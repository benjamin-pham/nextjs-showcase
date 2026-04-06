"use client"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/atoms/pagination"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select"

interface PaginationBarProps {
  pageIndex: number       // 0-based internally
  pageSize: number
  pageCount: number
  totalItems: number
  pageSizeOptions: number[]
  isLoading: boolean
  canPrev: boolean
  canNext: boolean
  onPageChange: (idx: number) => void
  onPageSizeChange: (size: number) => void
  selectedCount?: number
}

export function PaginationBar({
  pageIndex,
  pageSize,
  pageCount,
  totalItems,
  pageSizeOptions,
  isLoading,
  canPrev,
  canNext,
  onPageChange,
  onPageSizeChange,
  selectedCount,
}: PaginationBarProps) {
  const from = pageCount === 0 ? 0 : pageIndex * pageSize + 1
  const to = Math.min((pageIndex + 1) * pageSize, totalItems)

  const buildPages = (): (number | "...")[] => {
    if (pageCount <= 7) return Array.from({ length: pageCount }, (_, i) => i)
    const cur = pageIndex
    const pages: (number | "...")[] = [0]
    if (cur > 2) pages.push("...")
    for (let i = Math.max(1, cur - 1); i <= Math.min(pageCount - 2, cur + 1); i++) {
      pages.push(i)
    }
    if (cur < pageCount - 3) pages.push("...")
    pages.push(pageCount - 1)
    return pages
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-1 pt-3">
      {/* Left: info */}
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        {selectedCount !== undefined && selectedCount > 0 && (
          <span className="font-medium text-foreground">{selectedCount} đã chọn</span>
        )}
        <span>
          {totalItems > 0 ? `${from}–${to} / ${totalItems} kết quả` : "Không có dữ liệu"}
        </span>
      </div>

      {/* Right: page size + pagination */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground whitespace-nowrap">Mỗi trang</span>
          <Select
            value={String(pageSize)}
            onValueChange={(v) => onPageSizeChange(Number(v))}
          >
            <SelectTrigger size="sm" className="w-16">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {pageSizeOptions.map((s) => (
                <SelectItem key={s} value={String(s)}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Pagination className="w-auto mx-0">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                text="Trước"
                href="#"
                aria-disabled={!canPrev || isLoading}
                className={!canPrev || isLoading ? "pointer-events-none opacity-50" : ""}
                onClick={(e) => { e.preventDefault(); if (canPrev && !isLoading) onPageChange(pageIndex - 1) }}
              />
            </PaginationItem>

            {buildPages().map((p, i) => (
              <PaginationItem key={p === "..." ? `ellipsis-${i}` : p}>
                {p === "..." ? (
                  <PaginationEllipsis />
                ) : (
                  <PaginationLink
                    href="#"
                    isActive={p === pageIndex}
                    aria-disabled={isLoading}
                    className={isLoading ? "pointer-events-none opacity-50" : ""}
                    onClick={(e) => { e.preventDefault(); if (!isLoading) onPageChange(p) }}
                  >
                    {p + 1}
                  </PaginationLink>
                )}
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                text="Sau"
                href="#"
                aria-disabled={!canNext || isLoading}
                className={!canNext || isLoading ? "pointer-events-none opacity-50" : ""}
                onClick={(e) => { e.preventDefault(); if (canNext && !isLoading) onPageChange(pageIndex + 1) }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
