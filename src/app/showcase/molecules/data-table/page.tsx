"use client"

import * as React from "react"
import { type ColumnDef, type ColumnFiltersState, type PaginationState, type RowSelectionState, type SortingState, type VisibilityState } from "@tanstack/react-table"

import { DataTable, type DataTableMeta } from "@/components/molecules/data/data-table"
import { PaginationBar } from "@/components/molecules/data/data-table-pagination"
import { ColumnVisibilityToggle } from "@/components/molecules/data/data-table-column-visibility"
import { DataRowAction, type RowAction } from "@/components/molecules/data/data-row-action"
import { deleteConfirm } from "@/components/molecules/confirm/delete-confirm"
import { Badge } from "@/components/atoms/badge"
import { Button } from "@/components/atoms/button"
import { Input } from "@/components/atoms/input"
import { PlusIcon, SearchIcon, Trash2Icon } from "lucide-react"
import { toast } from "sonner"
// ─── Sample data ──────────────────────────────────────────────────────────────

type Status = "active" | "inactive" | "pending"

interface User {
  id: string
  name: string
  email: string
  role: string
  status: Status
  createdAt: string
}

function generateUsers(count: number): User[] {
  const roles = ["Admin", "Editor", "Viewer", "Manager"]
  const statuses: Status[] = ["active", "inactive", "pending"]
  return Array.from({ length: count }, (_, i) => ({
    id: String(i + 1),
    name: `Người dùng ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: roles[i % roles.length],
    status: statuses[i % statuses.length],
    createdAt: new Date(Date.now() - i * 86_400_000).toLocaleDateString("vi-VN"),
  }))
}

const ALL_USERS = generateUsers(53)

// ─── Status badge ─────────────────────────────────────────────────────────────

const statusConfig: Record<Status, { label: string; variant: "default" | "outline" | "destructive" | "secondary" }> = {
  active: { label: "Hoạt động", variant: "default" },
  inactive: { label: "Không hoạt động", variant: "secondary" },
  pending: { label: "Chờ duyệt", variant: "outline" },
}

// ─── Columns ──────────────────────────────────────────────────────────────────
// Delete action uses DeleteConfirm inline in the cell — no programmatic open needed

const columns: ColumnDef<User, unknown>[] = [
  {
    accessorKey: "id",
    header: "ID",
    size: 60,
    enableSorting: false,
  },
  {
    accessorKey: "name",
    header: "Họ tên",
    cell: ({ getValue }) => (
      <span className="font-medium">{getValue() as string}</span>
    ),
    meta: { filterVariant: "text", filterPlaceholder: "Tìm tên..." },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ getValue }) => (
      <span className="text-muted-foreground">{getValue() as string}</span>
    ),
  },
  {
    accessorKey: "role",
    header: "Vai trò",
    meta: {
      filterVariant: "select",
      filterPlaceholder: "Tất cả vai trò",
      filterOptions: [
        { label: "Admin", value: "Admin" },
        { label: "Editor", value: "Editor" },
        { label: "Viewer", value: "Viewer" },
        { label: "Manager", value: "Manager" },
      ],
    },
  },
  {
    accessorKey: "status",
    header: "Trạng thái",
    cell: ({ getValue }) => {
      const s = getValue() as Status
      const cfg = statusConfig[s]
      return <Badge variant={cfg.variant}>{cfg.label}</Badge>
    },
    meta: {
      filterVariant: "select",
      filterPlaceholder: "Tất cả trạng thái",
      filterOptions: [
        { label: "Hoạt động", value: "active" },
        { label: "Không hoạt động", value: "inactive" },
        { label: "Chờ duyệt", value: "pending" },
      ],
    },
  },
  {
    accessorKey: "createdAt",
    header: "Ngày tạo",
    enableSorting: false,
  },
  {
    id: "actions",
    header: "",
    enableSorting: false,
    enableHiding: false,
    size: 80,
    cell: ({ row }) => {
      const actions: RowAction[] = [
        { label: "Xem chi tiết", onClick: () => toast.info("click xem chi tiết") },
        { label: "Chỉnh sửa", onClick: () => toast.info("click chỉnh sửa") },
        {
          label: "Xóa",
          variant: "destructive",
          divider: true,
          onClick: () => deleteConfirm({
            title: `Xóa ${row.original.name}?`,
            description: `Bạn sắp xóa tài khoản ${row.original.email}. Hành động này không thể hoàn tác.`,
            confirmText: row.original.name,
            onConfirm: async () => {
              await new Promise((r) => setTimeout(r, 600))
              toast.error(`Đã xóa: ${row.original.name}`)
            },
          }),
        },
      ]
      return <DataRowAction actions={actions} />
    },
  },
]

// ─── Helper: build visibility column list from ColumnDef ──────────────────────

function useVisibilityColumns(
  visibility: VisibilityState,
  setVisibility: React.Dispatch<React.SetStateAction<VisibilityState>>
) {
  return React.useMemo(
    () =>
      columns
        .filter((c) => {
          const key = (c as { accessorKey?: string }).accessorKey
          return key !== undefined
        })
        .map((c) => {
          const key = (c as { accessorKey?: string }).accessorKey!
          return {
            id: key,
            label: typeof c.header === "string" ? c.header : key,
            visible: visibility[key] !== false,
            toggle: () =>
              setVisibility((prev) => ({ ...prev, [key]: prev[key] === false })),
          }
        }),
    [visibility, setVisibility]
  )
}

// ─── Demo: Client-side — manually composed toolbar + pagination ───────────────

const PAGE_SIZE_OPTIONS = [5, 10, 20, 50]

function ClientSideDemo() {
  const [search, setSearch] = React.useState("")
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [colFilters, setColFilters] = React.useState<ColumnFiltersState>([])
  const [visibility, setVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})
  const [pagination, setPagination] = React.useState<PaginationState>({ pageIndex: 0, pageSize: 10 })
  const [meta, setMeta] = React.useState<DataTableMeta>({
    pageCount: 1, filteredCount: 0, pageIndex: 0, pageSize: 10, canPrev: false, canNext: false,
  })

  const filteredData = React.useMemo(() => {
    if (!search) return ALL_USERS
    const q = search.toLowerCase()
    return ALL_USERS.filter(
      (u) => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)
    )
  }, [search])

  const visibilityColumns = useVisibilityColumns(visibility, setVisibility)
  const selectedCount = Object.keys(rowSelection).length
  const selectedUsers = React.useMemo(
    () => filteredData.filter((_, i) => rowSelection[String(i)]),
    [filteredData, rowSelection]
  )

  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-lg font-semibold">Client-side — compose thủ công</h2>
        <p className="text-sm text-muted-foreground">
          Toolbar, phân trang và ẩn cột lắp ráp thủ công.{" "}
          Xóa hàng dùng{" "}
          <code className="text-xs bg-muted px-1 py-0.5 rounded">DeleteConfirm</code>{" "}
          trực tiếp trong cell.
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1 max-w-xs">
          <SearchIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
          <Input
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPagination((p) => ({ ...p, pageIndex: 0 })) }}
            placeholder="Tìm theo tên, email..."
            className="pl-8 h-9"
          />
        </div>
        <ColumnVisibilityToggle columns={visibilityColumns} />
        <Button size="sm" className="ml-auto gap-1.5">
          <PlusIcon className="size-4" />
          Thêm mới
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={filteredData}
        sorting={sorting}
        onSortingChange={setSorting}
        columnFilters={colFilters}
        onColumnFiltersChange={setColFilters}
        columnVisibility={visibility}
        onColumnVisibilityChange={setVisibility}
        rowSelection={rowSelection}
        onRowSelectionChange={setRowSelection}
        pagination={pagination}
        onPaginationChange={setPagination}
        onMetaChange={setMeta}
        enableRowSelection
      />

      <PaginationBar
        pageIndex={meta.pageIndex}
        pageSize={pagination.pageSize}
        pageCount={meta.pageCount}
        totalItems={meta.filteredCount}
        pageSizeOptions={PAGE_SIZE_OPTIONS}
        isLoading={false}
        canPrev={meta.canPrev}
        canNext={meta.canNext}
        onPageChange={(idx) => setPagination((p) => ({ ...p, pageIndex: idx }))}
        onPageSizeChange={(size) => setPagination({ pageIndex: 0, pageSize: size })}
        selectedCount={selectedCount}
      />

      {selectedUsers.length > 0 && (
        <p className="text-sm text-muted-foreground">
          Đã chọn: {selectedUsers.map((u) => u.name).join(", ")}
        </p>
      )}
    </section>
  )
}

// ─── Demo: Server-side ────────────────────────────────────────────────────────

function ServerSideDemo() {
  const [search, setSearch] = React.useState("")
  const [colFilters, setColFilters] = React.useState<ColumnFiltersState>([])
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [visibility, setVisibility] = React.useState<VisibilityState>({})
  const [pageIndex, setPageIndex] = React.useState(0)
  const [pageSize, setPageSize] = React.useState(10)
  const [isLoading, setIsLoading] = React.useState(false)
  const [rows, setRows] = React.useState<User[]>([])
  const [total, setTotal] = React.useState(0)

  const fetchData = React.useCallback(
    (pg: number, ps: number, q: string, filters: ColumnFiltersState) => {
      setIsLoading(true)
      setTimeout(() => {
        let result = ALL_USERS
        if (q) {
          const lq = q.toLowerCase()
          result = result.filter(
            (u) => u.name.toLowerCase().includes(lq) || u.email.toLowerCase().includes(lq)
          )
        }
        for (const f of filters) {
          if (!f.value) continue
          result = result.filter((u) => {
            const val = String(u[f.id as keyof User])
            return val.toLowerCase().includes(String(f.value).toLowerCase())
          })
        }
        const start = pg * ps
        setRows(result.slice(start, start + ps))
        setTotal(result.length)
        setIsLoading(false)
      }, 400)
    },
    []
  )

  React.useEffect(() => {
    fetchData(pageIndex, pageSize, search, colFilters)
  }, [pageIndex, pageSize, search, colFilters, fetchData])

  const pageCount = Math.ceil(total / pageSize)
  const visibilityColumns = useVisibilityColumns(visibility, setVisibility)

  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-lg font-semibold">Server-side (manualPagination)</h2>
        <p className="text-sm text-muted-foreground">
          Fetch giả lập 400 ms — component cha quản lý toàn bộ state, DataTable chỉ render.
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1 max-w-xs">
          <SearchIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
          <Input
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPageIndex(0) }}
            placeholder="Tìm kiếm (server)..."
            className="pl-8 h-9"
          />
        </div>
        <ColumnVisibilityToggle columns={visibilityColumns} />
      </div>

      <DataTable
        columns={columns}
        data={rows}
        sorting={sorting}
        onSortingChange={setSorting}
        columnFilters={colFilters}
        onColumnFiltersChange={(f) => { setColFilters(f); setPageIndex(0) }}
        columnVisibility={visibility}
        onColumnVisibilityChange={setVisibility}
        pagination={{ pageIndex, pageSize }}
        onPaginationChange={(s) => { setPageIndex(s.pageIndex); setPageSize(s.pageSize) }}
        isLoading={isLoading}
        manualPagination
        manualFiltering
        pageCount={pageCount}
      />

      <PaginationBar
        pageIndex={pageIndex}
        pageSize={pageSize}
        pageCount={pageCount}
        totalItems={total}
        pageSizeOptions={PAGE_SIZE_OPTIONS}
        isLoading={isLoading}
        canPrev={pageIndex > 0}
        canNext={pageIndex < pageCount - 1}
        onPageChange={setPageIndex}
        onPageSizeChange={(size) => { setPageSize(size); setPageIndex(0) }}
      />
    </section>
  )
}

// ─── Demo: Loading skeleton ───────────────────────────────────────────────────

function LoadingDemo() {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-lg font-semibold">Loading skeleton</h2>
        <p className="text-sm text-muted-foreground">
          <code className="text-xs bg-muted px-1 py-0.5 rounded">isLoading=true</code> — SkeletonRows được render bên trong DataTable molecule.
        </p>
      </div>
      <DataTable
        columns={columns}
        data={[]}
        isLoading
        skeletonRows={5}
        pagination={{ pageIndex: 0, pageSize: 5 }}
      />
    </section>
  )
}

// ─── Demo: Empty state ────────────────────────────────────────────────────────

function EmptyDemo() {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-lg font-semibold">Empty state</h2>
        <p className="text-sm text-muted-foreground">
          <code className="text-xs bg-muted px-1 py-0.5 rounded">data=[]</code> với custom{" "}
          <code className="text-xs bg-muted px-1 py-0.5 rounded">emptyState</code>.
        </p>
      </div>
      <DataTable
        columns={columns}
        data={[]}
        emptyState={
          <div className="flex flex-col items-center gap-3 py-6">
            <span className="text-5xl">🗂️</span>
            <p className="font-medium">Chưa có người dùng nào</p>
            <Button size="sm">
              <PlusIcon className="mr-1.5 size-4" />
              Thêm người dùng đầu tiên
            </Button>
          </div>
        }
      />
    </section>
  )
}

// ─── Demo: DeleteConfirm standalone ──────────────────────────────────────────

function DeleteConfirmDemo() {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-lg font-semibold">DeleteConfirm molecule</h2>
        <p className="text-sm text-muted-foreground">
          Standalone — trigger tuỳ chỉnh, có và không có <code className="text-xs bg-muted px-1 py-0.5 rounded">confirmText</code>.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button
          variant="destructive"
          size="icon"
          className="cursor-pointer"
          onClick={() => deleteConfirm({
            title: "Xóa người dùng?",
            description: "Hành động này không thể hoàn tác.",
            onConfirm: () => { toast.error("Đã xóa người dùng") },
          })}
        >
          <Trash2Icon />
          <span className="sr-only">Xóa</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="gap-1.5 text-destructive border-destructive/40 hover:bg-destructive/5 cursor-pointer"
          onClick={() => deleteConfirm({
            title: "Xóa dự án?",
            description: 'Nhập "my-project" để xác nhận xóa toàn bộ dự án và dữ liệu liên quan.',
            confirmText: "my-project",
            onConfirm: () => { toast.error("Đã xóa dự án") },
          })}
        >
          <Trash2Icon className="size-4" />
          Xóa có xác nhận text
        </Button>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MoleculesDataTablePage() {
  return (
    <main className="mx-auto max-w-6xl space-y-12 p-6">
      <div>
        <h1 className="text-2xl font-bold">DataTable molecules showcase</h1>
        <p className="text-muted-foreground">
          Lắp ráp thủ công từ các molecules:{" "}
          <code className="text-xs bg-muted px-1 py-0.5 rounded">DataTable</code>,{" "}
          <code className="text-xs bg-muted px-1 py-0.5 rounded">PaginationBar</code>,{" "}
          <code className="text-xs bg-muted px-1 py-0.5 rounded">ColumnVisibilityToggle</code>,{" "}
          <code className="text-xs bg-muted px-1 py-0.5 rounded">DataRowAction</code>,{" "}
          <code className="text-xs bg-muted px-1 py-0.5 rounded">DeleteConfirm</code>.
        </p>
      </div>

      <ClientSideDemo />
      <ServerSideDemo />
      <LoadingDemo />
      <EmptyDemo />
      <DeleteConfirmDemo />
    </main>
  )
}
