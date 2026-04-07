"use client"
import { Sidebar, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar, SidebarContent, SidebarGroup, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "@/components/atoms/sidebar";
import { ChevronDown } from "lucide-react";
import { IMenuItem, menuItems } from "@/components/menu-item";
import Link from "next/link";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/atoms/collapsible";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/atoms/popover";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const { state } = useSidebar();

  return (
    <>
      <Sidebar collapsible="icon" variant="sidebar" className="transition-all duration-200">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                size="lg"
              >
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground font-bold">
                  A
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Automation</span>
                  <span className="">Easy to use</span>
                </div>
                {/* <ChevronsUpDown className="ml-auto" /> */}
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {menuItems.map(item => (
                <SidebarMenuItem key={item.title}>
                  <RenderMenuItem item={item} />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </>

  )
}

function RenderMenuItem({ item }: { item: IMenuItem }) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const pathname = usePathname();
  const isActive = (item: IMenuItem) => {
    if (item.url && (pathname === item.url || pathname.startsWith(item.url + "/")))
      return true;
    if (item.subItems) {
      return item.subItems.some(
        (subItem: IMenuItem) =>
          subItem.url &&
          (pathname === subItem.url || pathname.startsWith(subItem.url + "/"))
      );
    }
    return false;
  }
  if (item.subItems && isCollapsed) {
    // Render popover for collapsed sidebar with submenu
    return (
      <Popover>
        <PopoverTrigger asChild>
          <SidebarMenuButton
            tooltip={item.title}
            isActive={isActive(item)}
            className='cursor-pointer'
          >
            <item.icon />
            <span>{item.title}</span>
            <CollapseComponent />
          </SidebarMenuButton>
        </PopoverTrigger>
        <PopoverContent side="right" align="start" className='p-2'>
          <p className='font-medium p-2'>{item.title}</p>
          <SidebarMenu>
            {item.subItems.map((subItem: IMenuItem) => (
              <SidebarMenuItem key={subItem.title}>
                <SidebarMenuButton asChild isActive={isActive(subItem)}>
                  <Link href={subItem.url!}>
                    <subItem.icon />
                    <span>{subItem.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </PopoverContent>
      </Popover>
    )
  }
  else if (item.subItems) {
    // Render collapsible for expanded sidebar with submenu
    return (
      <Collapsible defaultOpen={isActive(item)} className="group/collapsible">
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            tooltip={item.title}
            isActive={isActive(item)}
            className='cursor-pointer'
          >
            <item.icon />
            <span>{item.title}</span>
            <CollapseComponent />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {item.subItems.map((subItem: IMenuItem) => (
              <SidebarMenuSubItem key={subItem.title}>
                <SidebarMenuSubButton asChild
                  isActive={isActive(subItem)}
                >
                  <Link href={subItem.url!}>
                    <subItem.icon />
                    <span>{subItem.title}</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    )
  }
  else {
    // Render simple menu item
    return (
      <SidebarMenuButton asChild isActive={isActive(item)}>
        <Link href={item.url!}>
          <item.icon />
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
    )
  }
}

function CollapseComponent() {
  return (
    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
  )
}