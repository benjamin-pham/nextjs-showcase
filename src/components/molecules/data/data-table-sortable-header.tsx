"use client"

import { ArrowDownIcon, ArrowUpIcon, ChevronsUpDownIcon, EyeOffIcon } from "lucide-react"

import { Button } from "@/components/atoms/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu"

interface SortableHeaderProps {
  label: string
  sorted: false | "asc" | "desc"
  onSort: () => void
  onHide?: () => void
}

export function SortableHeader({ label, sorted, onSort, onHide }: SortableHeaderProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="-ml-2 h-8 gap-1 data-[state=open]:bg-accent"
        >
          <span>{label}</span>
          {sorted === "asc" ? (
            <ArrowUpIcon className="size-3.5 text-foreground" />
          ) : sorted === "desc" ? (
            <ArrowDownIcon className="size-3.5 text-foreground" />
          ) : (
            <ChevronsUpDownIcon className="size-3.5 text-muted-foreground" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuLabel>Sắp xếp</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={sorted === "asc"} onClick={() => onSort()}>
          <ArrowUpIcon className="mr-1.5 size-3.5" />
          Tăng dần
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={sorted === "desc"} onClick={() => onSort()}>
          <ArrowDownIcon className="mr-1.5 size-3.5" />
          Giảm dần
        </DropdownMenuCheckboxItem>
        {onHide && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem onClick={onHide}>
              <EyeOffIcon className="mr-1.5 size-3.5" />
              Ẩn cột
            </DropdownMenuCheckboxItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
