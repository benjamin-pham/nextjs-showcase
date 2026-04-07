import { cn } from "@/lib/utils"
import * as React from "react"

export function ShowcaseSection({
  title,
  description,
  children,
  childrenClassName = "max-w-xl",
  className,
}: {
  title: string
  description?: string
  children: React.ReactNode
  childrenClassName?: string
  className?: string
}) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <div className={childrenClassName}>{children}</div>
    </div>
  )
}
