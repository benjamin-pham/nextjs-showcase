"use client"
import React from 'react'
import { deleteConfirm } from "@/components/molecules/confirm/delete-confirm"
import { toast } from 'sonner'
import { Button } from "@/components/atoms/button"

export default function PageInteractive() {
  return (
    <div>
      <Button onClick={() => deleteConfirm({
        confirmText: 'hello',
        onConfirm: () => {
          toast.info("xóa thành công", {
            description: "Bạn đã xóa thành công mục này.",
          })
        },
      })}>
        Xóa
      </Button>
    </div>
  )
}
