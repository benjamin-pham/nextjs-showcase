"use client"
import { SidebarTrigger, useSidebar } from '@/components/atoms/sidebar';

const AppHeader = () => {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <div className={` flex shrink-0 items-center gap-2 border-b bg-background px-4 transition-all duration-250 ${isCollapsed ? 'h-12' : 'h-16'}`}>
      <div className="flex items-center gap-2">
        <SidebarTrigger className="size-10 cursor-pointer " />
      </div>
    </div>
  )
}

export default AppHeader