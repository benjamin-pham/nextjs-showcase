"use client"

import * as React from "react"
import {
  type Column,
  type ColumnDef,
  type ColumnFiltersState,
  type PaginationState,
  type RowSelectionState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { cn } from "@/lib/utils"
import { Checkbox } from "@/components/atoms/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/atoms/table"

import { ColumnFilterCell } from "./data-table-column-filter"
import { SkeletonRows } from "./data-table-skeleton"
import { SortableHeader } from "./data-table-sortable-header"

export type { ColumnDef }

export interface DataTableMeta {
  pageCount: number
  filteredCount: number
  pageIndex: number
  pageSize: number
  canPrev: boolean
  canNext: boolean
}

export interface DataTableProps<TData> {
  columns: ColumnDef<TData, unknown>[]
  data: TData[]

  // controlled state
  sorting?: SortingState
  onSortingChange?: (s: SortingState) => void

  columnFilters?: ColumnFiltersState
  onColumnFiltersChange?: (f: ColumnFiltersState) => void

  columnVisibility?: VisibilityState
  onColumnVisibilityChange?: (v: VisibilityState) => void

  rowSelection?: RowSelectionState
  onRowSelectionChange?: (s: RowSelectionState) => void

  pagination?: PaginationState
  onPaginationChange?: (s: PaginationState) => void

  /** Called whenever filtered/pagination meta changes — lets parent drive PaginationBar */
  onMetaChange?: (meta: DataTableMeta) => void

  /** Server-side mode: disable internal pagination */
  manualPagination?: boolean
  /** Server-side mode: disable internal filtering */
  manualFiltering?: boolean
  /** Required when manualPagination=true */
  pageCount?: number

  enableRowSelection?: boolean
  isLoading?: boolean
  skeletonRows?: number
  emptyState?: React.ReactNode
  className?: string
}

export function DataTable<TData>({
  columns: columnsProp,
  data,
  sorting,
  onSortingChange,
  columnFilters,
  onColumnFiltersChange,
  columnVisibility,
  onColumnVisibilityChange,
  rowSelection,
  onRowSelectionChange,
  pagination,
  onPaginationChange,
  onMetaChange,
  manualPagination = false,
  manualFiltering = false,
  pageCount: pageCountProp,
  enableRowSelection = false,
  isLoading = false,
  skeletonRows = 8,
  emptyState,
  className,
}: DataTableProps<TData>) {
  "use no memo"

  // internal fallback state (uncontrolled)
  const [internalSorting, setInternalSorting] = React.useState<SortingState>([])
  const [internalColFilters, setInternalColFilters] = React.useState<ColumnFiltersState>([])
  const [internalVisibility, setInternalVisibility] = React.useState<VisibilityState>({})
  const [internalRowSelection, setInternalRowSelection] = React.useState<RowSelectionState>({})
  const [internalPagination, setInternalPagination] = React.useState<PaginationState>({ pageIndex: 0, pageSize: 10 })

  const resolvedSorting = sorting ?? internalSorting
  const resolvedColFilters = columnFilters ?? internalColFilters
  const resolvedVisibility = columnVisibility ?? internalVisibility
  const resolvedRowSelection = rowSelection ?? internalRowSelection
  const resolvedPagination = pagination ?? internalPagination

  // selection column
  const selectionCol: ColumnDef<TData, unknown> = {
    id: "__select__",
    enableSorting: false,
    enableHiding: false,
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() ? true : table.getIsSomePageRowsSelected() ? "indeterminate" : false}
        onCheckedChange={(v) => table.toggleAllPageRowsSelected(!!v)}
        aria-label="Chọn tất cả"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(v) => row.toggleSelected(!!v)}
        onClick={(e) => e.stopPropagation()}
        aria-label="Chọn hàng"
      />
    ),
    size: 40,
  }

  const columns = React.useMemo<ColumnDef<TData, unknown>[]>(
    () => (enableRowSelection ? [selectionCol, ...columnsProp] : columnsProp),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [enableRowSelection, columnsProp],
  )

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting: resolvedSorting,
      columnFilters: resolvedColFilters,
      columnVisibility: resolvedVisibility,
      rowSelection: resolvedRowSelection,
      pagination: resolvedPagination,
    },
    onSortingChange: (u) => {
      const next = typeof u === "function" ? u(resolvedSorting) : u
      if (onSortingChange) onSortingChange(next); else setInternalSorting(next)
    },
    onColumnFiltersChange: (u) => {
      const next = typeof u === "function" ? u(resolvedColFilters) : u
      if (onColumnFiltersChange) onColumnFiltersChange(next); else setInternalColFilters(next)
    },
    onColumnVisibilityChange: (u) => {
      const next = typeof u === "function" ? u(resolvedVisibility) : u
      if (onColumnVisibilityChange) onColumnVisibilityChange(next); else setInternalVisibility(next)
    },
    onRowSelectionChange: (u) => {
      const next = typeof u === "function" ? u(resolvedRowSelection) : u
      if (onRowSelectionChange) onRowSelectionChange(next); else setInternalRowSelection(next)
    },
    onPaginationChange: (u) => {
      const next = typeof u === "function" ? u(resolvedPagination) : u
      if (onPaginationChange) onPaginationChange(next); else setInternalPagination(next)
    },
    manualPagination,
    manualFiltering,
    pageCount: manualPagination ? (pageCountProp ?? -1) : undefined,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  // notify parent of pagination/filter meta
  const { pageIndex, pageSize } = table.getState().pagination
  const pageCount = table.getPageCount()
  const filteredCount = table.getFilteredRowModel().rows.length

  React.useEffect(() => {
    onMetaChange?.({
      pageCount,
      filteredCount,
      pageIndex,
      pageSize,
      canPrev: table.getCanPreviousPage(),
      canNext: table.getCanNextPage(),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageCount, filteredCount, pageIndex, pageSize])

  const hasColumnFilters = table.getAllColumns().some((c) => c.columnDef.meta?.filterVariant)

  return (
    <div className={cn("rounded-2xl border overflow-hidden", className)}>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((hg) => (
            <TableRow key={hg.id} className="bg-muted/30 hover:bg-muted/30">
              {hg.headers.map((header) => {
                const canSort = header.column.getCanSort()
                const canHide = header.column.getCanHide()
                const headerLabel = typeof header.column.columnDef.header === "string"
                  ? header.column.columnDef.header
                  : header.id
                return (
                  <TableHead key={header.id} style={{ width: header.column.columnDef.size }}>
                    {header.isPlaceholder ? null : canSort ? (
                      <SortableHeader
                        label={headerLabel}
                        sorted={header.column.getIsSorted()}
                        onSort={() => header.column.toggleSorting()}
                        onHide={canHide ? () => header.column.toggleVisibility(false) : undefined}
                      />
                    ) : (
                      flexRender(header.column.columnDef.header, header.getContext())
                    )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}

          {hasColumnFilters && (
            <TableRow className="bg-muted/10 hover:bg-muted/10">
              {table.getHeaderGroups()[0].headers.map((header) => (
                <TableHead key={header.id} className="py-1.5">
                  {header.column.columnDef.meta?.filterVariant && (
                    <ColumnFilterCell column={header.column as Column<unknown, unknown>} />
                  )}
                </TableHead>
              ))}
            </TableRow>
          )}
        </TableHeader>

        <TableBody>
          {isLoading ? (
            <SkeletonRows rows={skeletonRows} cols={columns.length} />
          ) : table.getRowModel().rows.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-48 text-center">
                {emptyState ?? (
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <span className="text-4xl">📭</span>
                    <p className="text-sm">Không có dữ liệu</p>
                  </div>
                )}
              </TableCell>
            </TableRow>
          ) : (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() ? "selected" : undefined}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}
