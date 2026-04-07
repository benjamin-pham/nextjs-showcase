"use client"

import * as React from "react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/atoms/collapsible"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card"
import { Button } from "@/components/atoms/button"
import { ShowcaseSection } from "@/app/showcase/showcase-section"
import { ChevronRightIcon, ChevronsUpDown, FileIcon, FolderIcon } from "lucide-react"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/atoms/tabs"

export default function CollapsibleShowcasePage() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Collapsible</h1>
        <p className="text-muted-foreground text-sm mt-1">
          An interactive component which expands/collapses a panel.
        </p>
      </div>

      {/* Default */}
      <ShowcaseSection
        title="Default"
        description="A basic collapsible with a trigger and hidden content."
      >
        <Collapsible className="flex flex-col gap-2">
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              Can I use this in my project?
              <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="rounded-md border px-4 py-3 text-sm">
              Yes. Free to use for personal and commercial projects. No attribution required.
            </div>
          </CollapsibleContent>
        </Collapsible>
      </ShowcaseSection>

      {/* Default Open */}
      <ShowcaseSection
        title="Default Open"
        description="Use the defaultOpen prop to render the collapsible in an expanded state on mount."
      >
        <Collapsible defaultOpen className="flex flex-col gap-2">
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              @peduarte starred 3 repositories
              <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </CollapsibleTrigger>
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            @radix-ui/primitives
          </div>
          <CollapsibleContent className="flex flex-col gap-2">
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              @radix-ui/colors
            </div>
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              @stitches/react
            </div>
          </CollapsibleContent>
        </Collapsible>
      </ShowcaseSection>

      {/* Controlled */}
      <ShowcaseSection
        title="Controlled"
        description="Manage open state externally via the open and onOpenChange props."
      >
        <div className="flex flex-col gap-3">
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="flex flex-col gap-2">
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                Controlled collapsible
                <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="rounded-md border px-4 py-3 text-sm">
                This panel is controlled by external state. The current state is passed via the{" "}
                <code className="font-mono text-xs">open</code> prop.
              </div>
            </CollapsibleContent>
          </Collapsible>
          <p className="text-xs text-muted-foreground">
            State: <span className="font-mono">{isOpen ? "open" : "closed"}</span>
          </p>
        </div>
      </ShowcaseSection>

      {/* Disabled */}
      <ShowcaseSection
        title="Disabled"
        description="Pass the disabled prop to prevent the collapsible from being toggled."
      >
        <Collapsible disabled className="flex flex-col gap-2">
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full justify-between" disabled>
              This section is locked
              <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="rounded-md border px-4 py-3 text-sm">
              This content cannot be toggled while disabled.
            </div>
          </CollapsibleContent>
        </Collapsible>
      </ShowcaseSection>

      {/* Card Layout */}
      <ShowcaseSection
        title="Card Layout"
        description="Wrap a Collapsible inside a Card for a contained presentation."
      >
        <Card>
          <Collapsible defaultOpen>
            <CardHeader className="py-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-base">Notifications</CardTitle>
                  <CardDescription>Manage your notification settings.</CardDescription>
                </div>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <ChevronsUpDown className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
            </CardHeader>
            <CollapsibleContent>
              <CardContent className="flex flex-col gap-2 pt-0">
                {[
                  { label: "Push notifications", desc: "Receive alerts on your device." },
                  { label: "Email digest",        desc: "A daily summary sent to your inbox." },
                  { label: "SMS alerts",          desc: "Text messages for critical updates." },
                ].map((item) => (
                  <div key={item.label} className="rounded-md border px-4 py-3">
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </CardContent>
            </CollapsibleContent>
          </Collapsible>
        </Card>
      </ShowcaseSection>

      {/* File Tree */}
      <ShowcaseSection
        title="File Tree"
        description="Nested Collapsibles to build an interactive file explorer tree."
      >
        <CollapsibleFileTree />
      </ShowcaseSection>
    </div>
  )
}

type FileTreeItem = { name: string } | { name: string; items: FileTreeItem[] }

const fileTree: FileTreeItem[] = [
  {
    name: "components",
    items: [
      {
        name: "ui",
        items: [
          { name: "button.tsx" },
          { name: "card.tsx" },
          { name: "dialog.tsx" },
          { name: "input.tsx" },
          { name: "select.tsx" },
          { name: "table.tsx" },
        ],
      },
      { name: "login-form.tsx" },
      { name: "register-form.tsx" },
    ],
  },
  {
    name: "lib",
    items: [{ name: "utils.ts" }, { name: "cn.ts" }, { name: "api.ts" }],
  },
  {
    name: "hooks",
    items: [
      { name: "use-media-query.ts" },
      { name: "use-debounce.ts" },
      { name: "use-local-storage.ts" },
    ],
  },
  {
    name: "types",
    items: [{ name: "index.d.ts" }, { name: "api.d.ts" }],
  },
  {
    name: "public",
    items: [
      { name: "favicon.ico" },
      { name: "logo.svg" },
      { name: "images" },
    ],
  },
  { name: "app.tsx" },
  { name: "layout.tsx" },
  { name: "globals.css" },
  { name: "package.json" },
  { name: "tsconfig.json" },
  { name: "README.md" },
  { name: ".gitignore" },
]

function renderItem(fileItem: FileTreeItem): React.ReactNode {
  if ("items" in fileItem) {
    return (
      <Collapsible key={fileItem.name}>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="group w-full justify-start transition-none hover:bg-accent hover:text-accent-foreground"
          >
            <ChevronRightIcon className="transition-transform group-data-[state=open]:rotate-90" />
            <FolderIcon />
            {fileItem.name}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-1 ml-5">
          <div className="flex flex-col gap-1">
            {fileItem.items.map((child) => renderItem(child))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    )
  }
  return (
    <Button
      key={fileItem.name}
      variant="link"
      size="sm"
      className="w-full justify-start gap-2 text-foreground"
    >
      <FileIcon />
      <span>{fileItem.name}</span>
    </Button>
  )
}

function CollapsibleFileTree() {
  return (
    <Card className="mx-auto w-full max-w-[16rem] gap-2" size="sm">
      <CardHeader>
        <Tabs defaultValue="explorer">
          <TabsList className="w-full">
            <TabsTrigger value="explorer">Explorer</TabsTrigger>
            <TabsTrigger value="outline">Outline</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-1">
          {fileTree.map((item) => renderItem(item))}
        </div>
      </CardContent>
    </Card>
  )
}
