"use client"

import * as React from "react"
import { type ColumnDef } from "@tanstack/react-table"
import { Trash2, FolderX, UserX } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/atoms/button"
import { ShowcaseSection } from "@/app/showcase/showcase-section"
import {
  deleteConfirm,
  DeleteConfirmContainer,
} from "@/components/molecules/confirm/delete-confirm"
import { DataRowAction, type RowAction } from "@/components/molecules/data/data-row-action"
import { DataTable } from "@/components/molecules/data/data-table"

// ─── Sample data for DataTable section ───────────────────────────────────────

interface Project {
  id: string
  name: string
  owner: string
  status: "active" | "archived"
}

const PROJECTS: Project[] = [
  { id: "1", name: "alpha-service", owner: "Nam Phạm", status: "active" },
  { id: "2", name: "beta-dashboard", owner: "Linh Trần", status: "active" },
  { id: "3", name: "gamma-api", owner: "Hùng Lê", status: "archived" },
  { id: "4", name: "delta-worker", owner: "Mai Nguyễn", status: "active" },
]

const columns: ColumnDef<Project, unknown>[] = [
  { accessorKey: "id", header: "ID", size: 60 },
  {
    accessorKey: "name",
    header: "Tên dự án",
    cell: ({ getValue }) => (
      <span className="font-medium">{getValue() as string}</span>
    ),
  },
  { accessorKey: "owner", header: "Chủ sở hữu" },
  {
    accessorKey: "status",
    header: "Trạng thái",
    cell: ({ getValue }) =>
      getValue() === "active" ? (
        <span className="text-green-600 text-sm font-medium">Hoạt động</span>
      ) : (
        <span className="text-muted-foreground text-sm">Đã lưu trữ</span>
      ),
  },
  {
    id: "actions",
    header: "",
    enableSorting: false,
    enableHiding: false,
    size: 60,
    cell: ({ row }) => {
      const project = row.original
      const actions: RowAction[] = [
        {
          label: "Xem chi tiết",
          onClick: () => toast.info(`Xem: ${project.name}`),
        },
        {
          label: "Chỉnh sửa",
          onClick: () => toast.info(`Sửa: ${project.name}`),
        },
        {
          label: "Xóa",
          variant: "destructive",
          divider: true,
          onClick: () =>
            deleteConfirm({
              title: `Xóa dự án "${project.name}"?`,
              description: `Toàn bộ dữ liệu của dự án sẽ bị xóa vĩnh viễn. Hành động này không thể hoàn tác.`,
              confirmText: project.name,
              onConfirm: async () => {
                await new Promise((r) => setTimeout(r, 800))
                toast.error(`Đã xóa: ${project.name}`)
              },
            }),
        },
      ]
      return <DataRowAction actions={actions} />
    },
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DeleteConfirmShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <DeleteConfirmContainer />

      <div>
        <h1 className="text-2xl font-bold">Delete Confirm</h1>
        <p className="text-muted-foreground text-sm mt-1">
          A headless imperative dialog for confirming destructive delete actions. Call{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs">deleteConfirm()</code> anywhere
          without needing a trigger element. Place{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs">&lt;DeleteConfirmContainer /&gt;</code>{" "}
          once in your layout.
        </p>
      </div>

      {/* Basic */}
      <ShowcaseSection
        childrenClassName="flex flex-wrap gap-3"
        title="Basic"
        description="Simplest usage — just provide an onConfirm callback."
      >
        <Button
          variant="destructive"
          onClick={() =>
            deleteConfirm({
              onConfirm: async () => {
                await new Promise((r) => setTimeout(r, 1200))
              },
            })
          }
        >
          <Trash2 />
          Xóa mục
        </Button>
      </ShowcaseSection>

      {/* Custom title & description */}
      <ShowcaseSection
        childrenClassName="flex flex-wrap gap-3"
        title="Custom title & description"
        description="Pass title and description to override the default text."
      >
        <Button
          variant="outline"
          onClick={() =>
            deleteConfirm({
              title: "Xóa dự án?",
              description:
                "Toàn bộ dữ liệu, thành viên và lịch sử của dự án sẽ bị xóa vĩnh viễn. Hành động này không thể hoàn tác.",
              onConfirm: async () => {
                await new Promise((r) => setTimeout(r, 1000))
              },
            })
          }
        >
          <FolderX />
          Xóa dự án
        </Button>

        <Button
          variant="outline"
          onClick={() =>
            deleteConfirm({
              title: "Xóa tài khoản người dùng?",
              description: "Tài khoản và toàn bộ dữ liệu liên quan sẽ bị xóa ngay lập tức.",
              onConfirm: async () => {
                await new Promise((r) => setTimeout(r, 800))
              },
            })
          }
        >
          <UserX />
          Xóa người dùng
        </Button>
      </ShowcaseSection>

      {/* With confirmText */}
      <ShowcaseSection
        childrenClassName="flex flex-wrap gap-3"
        title="Confirm text required"
        description="Pass confirmText to require the user to type an exact string before the Delete button is enabled. Paste is disabled."
      >
        <Button
          variant="destructive"
          onClick={() =>
            deleteConfirm({
              title: "Xóa workspace?",
              description:
                "Hành động này sẽ xóa vĩnh viễn workspace và toàn bộ dữ liệu bên trong. Nhập tên workspace để xác nhận.",
              confirmText: "my-workspace",
              onConfirm: async () => {
                await new Promise((r) => setTimeout(r, 1500))
              },
            })
          }
        >
          <Trash2 />
          Xóa workspace
        </Button>

        <Button
          variant="outline"
          onClick={() =>
            deleteConfirm({
              title: "Xóa môi trường production?",
              description: "Nhập XÓA để xác nhận. Hành động không thể hoàn tác.",
              confirmText: "XÓA",
              onConfirm: async () => {
                await new Promise((r) => setTimeout(r, 1000))
              },
            })
          }
        >
          Xóa production env
        </Button>
      </ShowcaseSection>

      {/* With DataTable + DataRowAction */}
      <ShowcaseSection
        title="Kết hợp với DataTable & DataRowAction"
        description="deleteConfirm được gọi từ RowAction bên trong cell — mở menu ⋯ của một hàng rồi chọn Xóa. confirmText được set động theo tên dự án."
      >
        <DataTable columns={columns} data={PROJECTS} />
      </ShowcaseSection>
    </div>
  )
}
