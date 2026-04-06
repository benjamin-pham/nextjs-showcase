"use client"

import { SlidersHorizontalIcon } from "lucide-react"

import { Button } from "@/components/atoms/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu"

interface ColumnVisibilityToggleProps {
  columns: { id: string; label: string; visible: boolean; toggle: () => void }[]
}

export function ColumnVisibilityToggle({ columns }: ColumnVisibilityToggleProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-1.5">
          <SlidersHorizontalIcon className="size-4" />
          Cột
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuLabel>Hiển thị cột</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {columns.map((col) => (
          <DropdownMenuCheckboxItem
            key={col.id}
            checked={col.visible}
            onCheckedChange={col.toggle}
          >
            {col.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
