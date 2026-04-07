"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/atoms/navigation-menu"
import { ShowcaseSection } from "@/app/showcase/showcase-section"
import { BookOpen, Layers, LayoutDashboard, Rocket, Settings, Shield, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const gettingStartedLinks: { title: string; href: string; description: string }[] = [
  {
    title: "Introduction",
    href: "/docs",
    description: "Re-usable components built using Radix UI and Tailwind CSS.",
  },
  {
    title: "Installation",
    href: "/docs/installation",
    description: "How to install dependencies and structure your app.",
  },
  {
    title: "Typography",
    href: "/docs/primitives/typography",
    description: "Styles for headings, paragraphs, lists...etc",
  },
]

const componentsLinks: { title: string; href: string; description: string; icon: React.ElementType }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
    icon: Shield,
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description: "Displays an indicator showing the completion progress of a task.",
    icon: Zap,
  },
  {
    title: "Scroll Area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
    icon: Layers,
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    icon: LayoutDashboard,
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    icon: BookOpen,
  },
  {
    title: "Getting Started",
    href: "/docs/getting-started",
    description: "Jump right in with our quick-start guide and build your first component.",
    icon: Rocket,
  },
]

function ListItem({
  className,
  title,
  children,
  href,
  icon: Icon,
}: {
  className?: string
  title: string
  children: React.ReactNode
  href: string
  icon?: React.ElementType
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-2xl p-3 leading-none no-underline outline-none transition-colors hover:bg-muted focus:bg-muted",
            className
          )}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            {Icon && <Icon className="size-4 text-muted-foreground" />}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export default function NavigationMenuShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Navigation Menu</h1>
        <p className="text-muted-foreground text-sm mt-1">
          A collection of links for navigating websites, with support for dropdowns and viewport animation.
        </p>
      </div>

      {/* Basic Usage */}
      <ShowcaseSection
        title="Basic Usage"
        description="Simple navigation menu with a trigger and content dropdown."
        childrenClassName="w-full"
      >
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 p-4 w-[300px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/" className="flex select-none flex-col justify-end rounded-2xl bg-gradient-to-b from-muted/50 to-muted p-5 no-underline outline-none focus:shadow-md">
                        <div className="mb-2 mt-2 text-lg font-medium">shadcn/ui</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components that you can copy and paste into your apps.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-2 p-4">
                  {gettingStartedLinks.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/docs">Documentation</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </ShowcaseSection>

      {/* Link Component with asChild */}
      <ShowcaseSection
        title="Link Component"
        description="Use asChild prop to compose a custom link component such as Next.js Link."
        childrenClassName="w-full"
      >
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/docs">Documentation</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/showcase">Showcase</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </ShowcaseSection>

      {/* Rich Content Dropdown */}
      <ShowcaseSection
        title="Rich Content Dropdown"
        description="A navigation menu with rich content inside a grid layout."
        childrenClassName="w-full"
      >
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/"
                        className="flex h-full w-full select-none flex-col justify-end rounded-2xl bg-gradient-to-b from-violet-500/20 via-purple-500/10 to-muted p-5 no-underline outline-none focus:shadow-md"
                      >
                        <div className="mb-2 mt-4 text-lg font-semibold">shadcn/ui</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI and Tailwind CSS.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {gettingStartedLinks.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {componentsLinks.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                      icon={item.icon}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/docs">Documentation</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </ShowcaseSection>

      {/* Without Viewport (viewport=false) */}
      <ShowcaseSection
        title="Without Viewport"
        description="Pass viewport={false} to disable the animated viewport and render content directly below the trigger."
        childrenClassName="w-full"
      >
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Settings</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-1 p-2">
                  <ListItem href="/settings/account" title="Account">
                    Manage your account settings and preferences.
                  </ListItem>
                  <ListItem href="/settings/security" title="Security">
                    Update your password and security options.
                  </ListItem>
                  <ListItem href="/settings/notifications" title="Notifications">
                    Configure how you receive notifications.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/profile">
                  <Settings className="size-4" />
                  Profile
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </ShowcaseSection>
    </div>
  )
}
