"use client"

import * as React from "react"
import { type ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/organisms/data-table"
import { DataRowAction, type RowAction } from "@/components/molecules/data/data-row-action"
import { Badge } from "@/components/atoms/badge"
import { Button } from "@/components/atoms/button"
import { PlusIcon } from "lucide-react"
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
    size: 48,
    cell: ({ row }) => {
      const actions: RowAction[] = [
        { label: "Xem chi tiết", onClick: () => toast.info(`Xem: ${row.original.name}`) },
        { label: "Chỉnh sửa", onClick: () => toast.info(`Sửa: ${row.original.name}`) },
        {
          label: "Xóa",
          onClick: () => toast.error(`Xóa: ${row.original.name}`),
          variant: "destructive",
          divider: true,
        },
      ]
      return <DataRowAction actions={actions} />
    },
  },
]

// ─── Demo: Client-side table ──────────────────────────────────────────────────

function ClientSideDemo() {
  const [selected, setSelected] = React.useState<User[]>([])

  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-lg font-semibold">Client-side (built-in pagination & filter)</h2>
        <p className="text-sm text-muted-foreground">
          Toàn bộ 53 bản ghi được truyền vào — TanStack tự xử lý lọc, sắp xếp, phân trang.
        </p>
      </div>

      <DataTable
        columns={columns}
        data={ALL_USERS}
        enableRowSelection
        onRowSelectionChange={setSelected}
        defaultPageSize={10}
        pageSizeOptions={[5, 10, 20, 50]}
        searchPlaceholder="Tìm theo tên, email..."
        toolbarRight={
          <Button size="sm" className="gap-1.5">
            <PlusIcon className="size-4" />
            Thêm mới
          </Button>
        }
      />

      {selected.length > 0 && (
        <p className="text-sm text-muted-foreground">
          Đã chọn: {selected.map((u) => u.name).join(", ")}
        </p>
      )}
    </section>
  )
}

// ─── Demo: Server-side table ──────────────────────────────────────────────────

const PAGE_SIZE = 10

function ServerSideDemo() {
  const [pageIndex, setPageIndex] = React.useState(1) // 1-based
  const [pageSize, setPageSize] = React.useState(PAGE_SIZE)
  const [search, setSearch] = React.useState("")
  const [colFilters, setColFilters] = React.useState<{ id: string; value: unknown }[]>([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [rows, setRows] = React.useState<User[]>([])
  const [total, setTotal] = React.useState(0)

  // Simulate server fetch — applies global search + column filters
  const fetchData = React.useCallback(
    (pg: number, ps: number, q: string, filters: { id: string; value: unknown }[]) => {
      setIsLoading(true)
      setTimeout(() => {
        let result = ALL_USERS

        // Global search
        if (q) {
          const lq = q.toLowerCase()
          result = result.filter(
            (u) => u.name.toLowerCase().includes(lq) || u.email.toLowerCase().includes(lq)
          )
        }

        // Column filters
        for (const f of filters) {
          if (!f.value) continue
          result = result.filter((u) => {
            const val = String(u[f.id as keyof User])
            return val.toLowerCase().includes(String(f.value).toLowerCase())
          })
        }

        const start = (pg - 1) * ps
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

  const handleSearch = (v: string) => { setSearch(v); setPageIndex(1) }
  const handleColFilters = (filters: { id: string; value: unknown }[]) => {
    setColFilters(filters)
    setPageIndex(1)
  }

  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-lg font-semibold">Server-side (manualPagination)</h2>
        <p className="text-sm text-muted-foreground">
          Fetch giả lập 400 ms — server áp dụng global search + column filters + pagination.
        </p>
      </div>

      <DataTable
        columns={columns}
        data={rows}
        isLoading={isLoading}
        manualPagination
        pageCount={Math.ceil(total / pageSize)}
        totalItems={total}
        pagination={{ pageIndex, pageSize, totalPages: Math.ceil(total / pageSize), totalItems: total }}
        onPaginationChange={(s) => { setPageIndex(s.pageIndex); setPageSize(s.pageSize) }}
        globalFilter={search}
        onGlobalFilterChange={handleSearch}
        columnFilters={colFilters}
        onColumnFiltersChange={handleColFilters}
        searchPlaceholder="Tìm kiếm (server)..."
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
        <p className="text-sm text-muted-foreground">isLoading=true</p>
      </div>
      <DataTable columns={columns} data={[]} isLoading defaultPageSize={5} />
    </section>
  )
}

// ─── Demo: Empty state ────────────────────────────────────────────────────────

function EmptyDemo() {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-lg font-semibold">Empty state</h2>
        <p className="text-sm text-muted-foreground">data=[] isLoading=false</p>
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DataTablePage() {
  return (
    <main className="mx-auto max-w-6xl space-y-12 p-6">
      <div>
        <h1 className="text-2xl font-bold">DataTable showcase</h1>
        <p className="text-muted-foreground">
          TanStack Table v8 + shadcn/ui atoms — sắp xếp, lọc, phân trang, chọn hàng, ẩn cột.
        </p>
      </div>

      <ClientSideDemo />
      <ServerSideDemo />
      <LoadingDemo />
      <EmptyDemo />
    </main>
  )
}
