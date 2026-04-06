"use client"

import React from "react"
import { Button } from "@/components/atoms/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu"
import { MoreHorizontal } from "lucide-react"

export interface RowAction {
  label: React.ReactNode
  onClick?: () => void
  variant?: "default" | "destructive"
  divider?: boolean
}

interface RowActionsCellProps {
  actions: RowAction[]
  align?: "start" | "center" | "end"
  menuLabel?: string
}

export function DataRowAction({ actions, align = "end", menuLabel = "Hành động" }: RowActionsCellProps) {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align}>
        <DropdownMenuLabel>{menuLabel}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {actions.map((action, index) => (
          <div key={index}>
            {action.divider && index > 0 && <DropdownMenuSeparator />}
            <DropdownMenuItem
              onClick={action.onClick}
              className={action.variant === "destructive" ? "text-red-600 focus:text-red-600 focus:bg-red-50" : ""}
            >
              {action.label}
            </DropdownMenuItem>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
