"use client"

import type { Column, RowData } from "@tanstack/react-table"
import { XIcon } from "lucide-react"

import { Input } from "@/components/atoms/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select"

declare module "@tanstack/react-table" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    /** Render a filter input below this column's header */
    filterVariant?: "text" | "select"
    /** Options for filterVariant="select" */
    filterOptions?: { label: string; value: string }[]
    /** Placeholder text for the filter input */
    filterPlaceholder?: string
  }
}

export function ColumnFilterCell({ column }: { column: Column<unknown, unknown> }) {
  const meta = column.columnDef.meta
  const value = (column.getFilterValue() ?? "") as string

  if (meta?.filterVariant === "select") {
    return (
      <Select
        value={value || "__all__"}
        onValueChange={(v) => column.setFilterValue(v === "__all__" ? undefined : v)}
      >
        <SelectTrigger size="sm" className="h-7 text-xs w-full min-w-20">
          <SelectValue placeholder={meta.filterPlaceholder ?? "Tất cả"} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="__all__">{meta.filterPlaceholder ?? "Tất cả"}</SelectItem>
          {meta.filterOptions?.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  }

  if (meta?.filterVariant === "text") {
    return (
      <div className="relative">
        <Input
          value={value}
          onChange={(e) => column.setFilterValue(e.target.value || undefined)}
          placeholder={meta.filterPlaceholder ?? "Lọc..."}
          className="h-7 text-xs pr-6"
        />
        {value && (
          <button
            onClick={() => column.setFilterValue(undefined)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <XIcon className="size-3" />
          </button>
        )}
      </div>
    )
  }

  return null
}
