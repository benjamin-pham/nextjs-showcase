import AppHeader from "@/app/showcase/app-header"
import { showcaseMenuItems } from "@/app/showcase/showcase-menu-items"

import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/atoms/sidebar"
import { type ReactNode } from "react"

export default function ShowcaseLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar menuItems={showcaseMenuItems} />
      <div className="flex flex-col w-full">
        <AppHeader />
        <div className="p-4">
          {children}
        </div>
      </div>
    </SidebarProvider>
  )
}
