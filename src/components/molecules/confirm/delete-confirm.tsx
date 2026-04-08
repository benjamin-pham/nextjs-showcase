"use client"

import React from "react"
import { Trash2Icon } from "lucide-react"
import { create } from "zustand"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
} from "@/components/atoms/alert-dialog"
import { Input } from "@/components/atoms/input"
import { Label } from "@/components/atoms/label"

export interface DeleteConfirmOptions {
  title?: string
  description?: string
  onConfirm: () => void | Promise<void>
  /**
   * Nếu truyền vào, người dùng phải nhập chính xác chuỗi này để kích hoạt nút Xóa.
   * Ví dụ: confirmText="tên-dự-án" hoặc confirmText="XÓA"
   */
  confirmText?: string
}

interface DialogState extends DeleteConfirmOptions {
  open: boolean
  loading: boolean
  set: (patch: Partial<Omit<DialogState, "set">>) => void
}

const useDialogStore = create<DialogState>((set) => ({
  open: false,
  loading: false,
  onConfirm: () => { },
  set: (patch) => set(patch),
}))

/** Mở hộp thoại xác nhận xóa. Đặt <DeleteConfirmContainer /> trong layout. */
export function deleteConfirm(options: DeleteConfirmOptions) {
  useDialogStore.getState().set({
    title: undefined,
    description: undefined,
    confirmText: undefined,
    ...options,
    open: true,
    loading: false,
  })
}

export function DeleteConfirmContainer() {
  const {
    open,
    loading,
    title = "Xác nhận xóa",
    description = "Hành động này không thể hoàn tác. Bạn có chắc chắn muốn xóa không?",
    onConfirm,
    confirmText,
    set,
  } = useDialogStore()

  const [inputValue, setInputValue] = React.useState("")

  const requiresConfirmText = Boolean(confirmText)
  const isConfirmed = requiresConfirmText ? inputValue === confirmText : true

  function handleOpenChange(next: boolean) {
    set({ open: next })
    if (!next) setInputValue("")
  }

  return (
    <AlertDialog open={open} onOpenChange={handleOpenChange}>
      <AlertDialogContent onContextMenu={(e) => e.preventDefault()} className="select-none">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10">
            <Trash2Icon className="text-destructive" />
          </AlertDialogMedia>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>

        {requiresConfirmText && (
          <div className="flex flex-col gap-2">
            <Label htmlFor="delete-confirm-input">
              Nhập{" "}
              <p className="rounded-md bg-muted px-1.5 py-0.5 text-xs text-foreground select-none">
                {confirmText}
              </p>{" "}
              để xác nhận
            </Label>
            <Input
              id="delete-confirm-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onPaste={(e) => e.preventDefault()}
              onKeyDown={async (e) => {
                if (e.key === "Enter" && isConfirmed && !loading) {
                  set({ loading: true })
                  await onConfirm()
                  handleOpenChange(false)
                }
              }}
              placeholder={confirmText}
              autoComplete="off"
              disabled={loading}
            />
          </div>
        )}

        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading} className="cursor-pointer">
            Hủy
          </AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            disabled={!isConfirmed || loading}
            className="cursor-pointer"
            onClick={async (e) => {
              e.preventDefault()
              set({ loading: true })
              await onConfirm()
              handleOpenChange(false)
            }}
          >
            {loading ? "Đang xóa..." : "Xóa"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
