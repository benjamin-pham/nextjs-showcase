import { Skeleton } from "@/components/atoms/skeleton"
import { TableCell, TableRow } from "@/components/atoms/table"

export function SkeletonRows({ rows, cols }: { rows: number; cols: number }) {
  return (
    <>
      {Array.from({ length: rows }).map((_, ri) => (
        <TableRow key={ri}>
          {Array.from({ length: cols }).map((_, ci) => (
            <TableCell key={ci}>
              <Skeleton className="h-4 w-full" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  )
}
