import type { ColumnDef, ColumnFiltersState } from "@tanstack/react-table"

export type { ColumnDef }

export interface DataTablePaginationMeta {
  pageIndex: number    // 1-based
  pageSize: number
  totalPages: number
  totalItems: number
}

export interface DataTableProps<TData> {
  columns: ColumnDef<TData, unknown>[]
  data: TData[]

  /** Show skeleton loading rows */
  isLoading?: boolean

  // ── Server-side mode ────────────────────────────────────────────────────
  /** Set true to disable built-in client-side pagination/filtering */
  manualPagination?: boolean
  /** Required when manualPagination=true: total page count */
  pageCount?: number
  /** Required when manualPagination=true: total item count */
  totalItems?: number
  /** Controlled pagination state (server-side) */
  pagination?: DataTablePaginationMeta
  onPaginationChange?: (state: DataTablePaginationMeta) => void

  /** Controlled global filter (server-side) */
  globalFilter?: string
  onGlobalFilterChange?: (value: string) => void

  /** Controlled column filters (server-side) */
  columnFilters?: ColumnFiltersState
  onColumnFiltersChange?: (filters: ColumnFiltersState) => void

  // ── Client-side defaults ─────────────────────────────────────────────────
  defaultPageSize?: number
  pageSizeOptions?: number[]

  // ── Features ─────────────────────────────────────────────────────────────
  /** Enable checkbox row selection */
  enableRowSelection?: boolean
  onRowSelectionChange?: (rows: TData[]) => void

  /** Search input placeholder */
  searchPlaceholder?: string

  /** Extra content left of the search bar */
  toolbarLeft?: React.ReactNode
  /** Extra content right of the toolbar */
  toolbarRight?: React.ReactNode

  /** Shown when data is empty and not loading */
  emptyState?: React.ReactNode

  className?: string
}
