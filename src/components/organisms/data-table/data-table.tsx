"use client"

import * as React from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type PaginationState,
  type RowSelectionState,
  type SortingState,
  type VisibilityState,
} from "@tanstack/react-table"
import { SearchIcon, XIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/atoms/button"
import { Input } from "@/components/atoms/input"

import {
  DataTable as TableMolecule,
  type DataTableMeta,
} from "@/components/molecules/data/data-table"
import { ColumnVisibilityToggle } from "@/components/molecules/data/data-table-column-visibility"
import { PaginationBar } from "@/components/molecules/data/data-table-pagination"
import type { DataTableProps } from "./data-table.types"

export type { ColumnDef } from "./data-table.types"
export type { DataTablePaginationMeta, DataTableProps } from "./data-table.types"

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getColId<TData>(col: ColumnDef<TData, unknown>): string {
  if ("accessorKey" in col && col.accessorKey) return String(col.accessorKey)
  return col.id ?? ""
}

// ─── Constants ────────────────────────────────────────────────────────────────

const DEFAULT_PAGE_SIZE_OPTIONS = [10, 20, 50, 100]

// ─── DataTable Organism ───────────────────────────────────────────────────────

export function DataTable<TData>({
  columns: columnsProp,
  data,
  isLoading = false,

  manualPagination = false,
  pageCount: pageCountProp,
  totalItems: totalItemsProp,
  pagination: paginationProp,
  onPaginationChange,

  globalFilter: globalFilterProp,
  onGlobalFilterChange,

  columnFilters: columnFiltersProp,
  onColumnFiltersChange,

  defaultPageSize = 10,
  pageSizeOptions = DEFAULT_PAGE_SIZE_OPTIONS,

  enableRowSelection = false,
  onRowSelectionChange,

  searchPlaceholder = "Tìm kiếm...",
  toolbarLeft,
  toolbarRight,
  emptyState,
  className,
}: DataTableProps<TData>) {
  // ── Internal state (client-side mode) ──────────────────────────────────────
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})
  const [internalGlobalFilter, setInternalGlobalFilter] = React.useState("")
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: defaultPageSize,
  })

  // meta từ molecule → dùng cho PaginationBar
  const [meta, setMeta] = React.useState<DataTableMeta>({
    pageCount: 0, filteredCount: 0,
    pageIndex: 0, pageSize: defaultPageSize,
    canPrev: false, canNext: false,
  })

  // ── Resolved values ─────────────────────────────────────────────────────────
  const isServerMode = manualPagination
  const globalFilterValue = isServerMode ? (globalFilterProp ?? "") : internalGlobalFilter
  const resolvedColumnFilters = isServerMode ? (columnFiltersProp ?? []) : columnFilters
  const resolvedPagination: PaginationState = isServerMode
    ? { pageIndex: (paginationProp?.pageIndex ?? 1) - 1, pageSize: paginationProp?.pageSize ?? defaultPageSize }
    : pagination

  // ── Notify parent on row selection change ───────────────────────────────────
  React.useEffect(() => {
    // onRowSelectionChange is called by molecule's onRowSelectionChange
  }, [])

  // ── Hidable columns (derived from column definitions) ───────────────────────
  const hidableColumns = React.useMemo(() =>
    columnsProp
      .filter((col) => col.enableHiding !== false)
      .map((col) => {
        const id = getColId(col)
        return {
          id,
          label: typeof col.header === "string" ? col.header : id,
          visible: columnVisibility[id] !== false,
          toggle: () =>
            setColumnVisibility((prev) => ({ ...prev, [id]: prev[id] === false })),
        }
      })
      .filter((c) => c.id),
    [columnsProp, columnVisibility],
  )

  // ── Active column filter chips ───────────────────────────────────────────────
  const activeColumnFilters = resolvedColumnFilters.map((f) => {
    const col = columnsProp.find((c) => getColId(c) === f.id)
    const label = typeof col?.header === "string" ? col.header : f.id
    const meta = col?.meta
    let valueLabel = String(f.value)
    if (meta?.filterVariant === "select") {
      valueLabel = meta.filterOptions?.find((o) => o.value === f.value)?.label ?? valueLabel
    }
    const clear = isServerMode
      ? () => onColumnFiltersChange?.(resolvedColumnFilters.filter((x) => x.id !== f.id))
      : () => setColumnFilters((prev) => prev.filter((x) => x.id !== f.id))
    return { id: f.id, label, valueLabel, clear }
  })

  // ── PaginationBar values ────────────────────────────────────────────────────
  const paginationBarProps = isServerMode
    ? {
        pageIndex: (paginationProp?.pageIndex ?? 1) - 1,
        pageCount: pageCountProp ?? 0,
        totalItems: totalItemsProp ?? 0,
        canPrev: (paginationProp?.pageIndex ?? 1) > 1,
        canNext: (paginationProp?.pageIndex ?? 1) < (pageCountProp ?? 0),
        onPageChange: (idx: number) =>
          onPaginationChange?.({
            pageIndex: idx + 1,
            pageSize: paginationProp?.pageSize ?? defaultPageSize,
            totalPages: pageCountProp ?? 0,
            totalItems: totalItemsProp ?? 0,
          }),
        onPageSizeChange: (size: number) =>
          onPaginationChange?.({
            pageIndex: 1,
            pageSize: size,
            totalPages: pageCountProp ?? 0,
            totalItems: totalItemsProp ?? 0,
          }),
      }
    : {
        pageIndex: meta.pageIndex,
        pageCount: meta.pageCount,
        totalItems: meta.filteredCount,
        canPrev: meta.canPrev,
        canNext: meta.canNext,
        onPageChange: (idx: number) => setPagination((p) => ({ ...p, pageIndex: idx })),
        onPageSizeChange: (size: number) => setPagination({ pageIndex: 0, pageSize: size }),
      }

  const selectedCount = Object.keys(rowSelection).length

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {/* Toolbar */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center gap-2">
          {toolbarLeft}
          <div className="relative max-w-xs flex-1">
            <SearchIcon className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder={searchPlaceholder}
              value={globalFilterValue}
              onChange={(e) => {
                const v = e.target.value
                if (isServerMode) {
                  onGlobalFilterChange?.(v)
                } else {
                  setInternalGlobalFilter(v)
                  setPagination((p) => ({ ...p, pageIndex: 0 }))
                }
              }}
              className="pl-8 pr-8"
            />
            {globalFilterValue && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 p-0 text-muted-foreground hover:text-foreground"
                onClick={() => {
                  if (isServerMode) onGlobalFilterChange?.("")
                  else { setInternalGlobalFilter(""); setPagination((p) => ({ ...p, pageIndex: 0 })) }
                }}
              >
                <XIcon className="size-3.5" />
              </Button>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {toolbarRight}
          {hidableColumns.length > 0 && (
            <ColumnVisibilityToggle columns={hidableColumns} />
          )}
        </div>
      </div>

      {/* Active column filter chips */}
      {activeColumnFilters.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5">
          {activeColumnFilters.map((f) => (
            <span
              key={f.id}
              className="inline-flex items-center gap-1 rounded-full border bg-muted px-2.5 py-0.5 text-xs font-medium"
            >
              <span className="text-muted-foreground">{f.label}:</span>
              {f.valueLabel}
              <button
                onClick={f.clear}
                className="ml-0.5 rounded-full text-muted-foreground hover:text-foreground"
              >
                <XIcon className="size-3" />
              </button>
            </span>
          ))}
          {activeColumnFilters.length > 1 && (
            <Button
              variant="ghost"
              size="xs"
              onClick={() => isServerMode ? onColumnFiltersChange?.([]) : setColumnFilters([])}
              className="h-6 px-2 text-xs text-muted-foreground"
            >
              Xóa tất cả
            </Button>
          )}
        </div>
      )}

      {/* Table molecule — bên trong có SortableHeader, ColumnFilterCell, SkeletonRows */}
      <TableMolecule
        columns={columnsProp}
        data={data}
        sorting={sorting}
        onSortingChange={setSorting}
        columnFilters={resolvedColumnFilters}
        onColumnFiltersChange={isServerMode ? onColumnFiltersChange : setColumnFilters}
        columnVisibility={columnVisibility}
        onColumnVisibilityChange={setColumnVisibility}
        rowSelection={rowSelection}
        onRowSelectionChange={(sel) => {
          setRowSelection(sel)
          if (onRowSelectionChange) {
            // map selection keys to row objects — need index-based lookup
            const selectedRows = Object.keys(sel)
              .map((idx) => data[Number(idx)])
              .filter(Boolean)
            onRowSelectionChange(selectedRows)
          }
        }}
        pagination={resolvedPagination}
        onPaginationChange={isServerMode ? undefined : setPagination}
        onMetaChange={setMeta}
        manualPagination={isServerMode}
        manualFiltering={isServerMode}
        pageCount={isServerMode ? (pageCountProp ?? -1) : undefined}
        enableRowSelection={enableRowSelection}
        isLoading={isLoading}
        emptyState={emptyState}
      />

      {/* PaginationBar molecule */}
      <PaginationBar
        pageSize={resolvedPagination.pageSize}
        pageSizeOptions={pageSizeOptions}
        isLoading={isLoading}
        selectedCount={enableRowSelection ? selectedCount : undefined}
        {...paginationBarProps}
      />
    </div>
  )
}
