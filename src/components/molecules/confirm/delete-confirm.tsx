"use client"

import React from "react"
import { Trash2Icon } from "lucide-react"

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

// ---------------------------------------------------------------------------
// Imperative API — gọi như toast.info(...)
// ---------------------------------------------------------------------------

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
}

const DEFAULT: DialogState = {
  open: false,
  loading: false,
  onConfirm: () => { },
}

let _state: DialogState = DEFAULT
const _listeners = new Set<() => void>()

function _set(patch: Partial<DialogState>) {
  _state = { ..._state, ...patch }
  _listeners.forEach((l) => l())
}

/** Mở hộp thoại xác nhận xóa. Đặt <DeleteConfirmContainer /> trong layout. */
export function deleteConfirm(options: DeleteConfirmOptions) {
  _set({ ...options, open: true, loading: false })
}

function useDialogStore() {
  return React.useSyncExternalStore(
    (cb) => {
      _listeners.add(cb)
      return () => _listeners.delete(cb)
    },
    () => _state,
    () => _state,
  )
}

export function DeleteConfirmContainer() {
  const {
    open,
    loading,
    title = "Xác nhận xóa",
    description = "Hành động này không thể hoàn tác. Bạn có chắc chắn muốn xóa không?",
    onConfirm,
    confirmText,
  } = useDialogStore()

  const [inputValue, setInputValue] = React.useState("")

  const requiresConfirmText = Boolean(confirmText)
  const isConfirmed = requiresConfirmText ? inputValue === confirmText : true

  function handleOpenChange(next: boolean) {
    _set({ open: next })
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
              _set({ loading: true })
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
