import AppHeader from "@/components/app-header"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/atoms/sidebar"
import Link from "next/link"
import { type ReactNode } from "react"

export default function ShowcaseLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col w-full">
        <AppHeader />
        <div className="p-4">
          {children}
        </div>
      </div>
    </SidebarProvider>
  )
}
