"use client"

import * as React from "react"
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/atoms/context-menu"
import { ShowcaseSection } from "@/app/showcase/showcase-section"
import {
  BookmarkIcon,
  CopyIcon,
  DownloadIcon,
  EyeIcon,
  FileIcon,
  FolderIcon,
  LinkIcon,
  PencilIcon,
  PrinterIcon,
  ScissorsIcon,
  ShareIcon,
  StarIcon,
  TrashIcon,
  UserIcon,
} from "lucide-react"

function TriggerArea({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-32 w-full items-center justify-center rounded-2xl border border-dashed border-border bg-muted/30 text-sm text-muted-foreground select-none">
      {children}
    </div>
  )
}

export default function ContextMenuShowcasePage() {
  const [showBookmarks, setShowBookmarks] = React.useState(true)
  const [showFullUrls, setShowFullUrls] = React.useState(false)
  const [showDevTools, setShowDevTools] = React.useState(false)
  const [person, setPerson] = React.useState("pedro")

  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Context Menu</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Displays a menu to the user — such as a set of actions or functions — triggered by a right-click.
        </p>
      </div>

      {/* Basic */}
      <ShowcaseSection
        title="Basic"
        description="Right-click the area below to open the context menu."
      >
        <ContextMenu>
          <ContextMenuTrigger>
            <TriggerArea>Right-click here</TriggerArea>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>
              <EyeIcon />
              View
            </ContextMenuItem>
            <ContextMenuItem>
              <CopyIcon />
              Copy
            </ContextMenuItem>
            <ContextMenuItem>
              <PencilIcon />
              Edit
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive">
              <TrashIcon />
              Delete
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </ShowcaseSection>

      {/* With Shortcuts */}
      <ShowcaseSection
        title="With Shortcuts"
        description="Use ContextMenuShortcut to display keyboard shortcuts alongside menu items."
      >
        <ContextMenu>
          <ContextMenuTrigger>
            <TriggerArea>Right-click here</TriggerArea>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>
              <CopyIcon />
              Copy
              <ContextMenuShortcut>⌘C</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              <ScissorsIcon />
              Cut
              <ContextMenuShortcut>⌘X</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              <FileIcon />
              Paste
              <ContextMenuShortcut>⌘V</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>
              <PrinterIcon />
              Print
              <ContextMenuShortcut>⌘P</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem variant="destructive">
              <TrashIcon />
              Delete
              <ContextMenuShortcut>⌫</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </ShowcaseSection>

      {/* With Label and Groups */}
      <ShowcaseSection
        title="With Label and Groups"
        description="Use ContextMenuLabel and ContextMenuGroup to organize items into named sections."
      >
        <ContextMenu>
          <ContextMenuTrigger>
            <TriggerArea>Right-click here</TriggerArea>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuLabel>File</ContextMenuLabel>
            <ContextMenuGroup>
              <ContextMenuItem>
                <FolderIcon />
                Open
                <ContextMenuShortcut>⌘O</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                <DownloadIcon />
                Download
                <ContextMenuShortcut>⌘S</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuLabel>Share</ContextMenuLabel>
            <ContextMenuGroup>
              <ContextMenuItem>
                <LinkIcon />
                Copy link
              </ContextMenuItem>
              <ContextMenuItem>
                <ShareIcon />
                Share...
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      </ShowcaseSection>

      {/* With Submenu */}
      <ShowcaseSection
        title="With Submenu"
        description="Use ContextMenuSub, ContextMenuSubTrigger, and ContextMenuSubContent to create nested menus."
      >
        <ContextMenu>
          <ContextMenuTrigger>
            <TriggerArea>Right-click here</TriggerArea>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>
              <CopyIcon />
              Copy
              <ContextMenuShortcut>⌘C</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              <PencilIcon />
              Edit
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuSub>
              <ContextMenuSubTrigger>
                <ShareIcon />
                Share
              </ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem>
                  <LinkIcon />
                  Copy link
                </ContextMenuItem>
                <ContextMenuItem>
                  <BookmarkIcon />
                  Bookmark
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuSub>
                  <ContextMenuSubTrigger>
                    <UserIcon />
                    Share with
                  </ContextMenuSubTrigger>
                  <ContextMenuSubContent>
                    <ContextMenuItem>Pedro Duarte</ContextMenuItem>
                    <ContextMenuItem>Colm Tuite</ContextMenuItem>
                    <ContextMenuItem>@radix_ui</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive">
              <TrashIcon />
              Delete
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </ShowcaseSection>

      {/* With Checkbox Items */}
      <ShowcaseSection
        title="With Checkbox Items"
        description="Use ContextMenuCheckboxItem for toggleable options that preserve state between menu opens."
      >
        <ContextMenu>
          <ContextMenuTrigger>
            <TriggerArea>Right-click here</TriggerArea>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuLabel>View Options</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem
              checked={showBookmarks}
              onCheckedChange={setShowBookmarks}
            >
              Show Bookmarks Bar
              <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem
              checked={showFullUrls}
              onCheckedChange={setShowFullUrls}
            >
              Show Full URLs
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem
              checked={showDevTools}
              onCheckedChange={setShowDevTools}
            >
              Show Developer Tools
              <ContextMenuShortcut>⌘⌥I</ContextMenuShortcut>
            </ContextMenuCheckboxItem>
          </ContextMenuContent>
        </ContextMenu>
        <p className="mt-2 text-xs text-muted-foreground">
          Bookmarks: {showBookmarks ? "on" : "off"} · Full URLs: {showFullUrls ? "on" : "off"} · Dev Tools: {showDevTools ? "on" : "off"}
        </p>
      </ShowcaseSection>

      {/* With Radio Items */}
      <ShowcaseSection
        title="With Radio Items"
        description="Use ContextMenuRadioGroup and ContextMenuRadioItem for mutually exclusive choices."
      >
        <ContextMenu>
          <ContextMenuTrigger>
            <TriggerArea>Right-click here</TriggerArea>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuLabel>People</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
              <ContextMenuRadioItem value="pedro">
                Pedro Duarte
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="colm">
                Colm Tuite
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="adam">
                Adam Wathan
              </ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuContent>
        </ContextMenu>
        <p className="mt-2 text-xs text-muted-foreground">
          Selected: <span className="font-mono">{person}</span>
        </p>
      </ShowcaseSection>

      {/* With Inset Items */}
      <ShowcaseSection
        title="Inset"
        description="Use the inset prop on items and labels to align them with items that have an icon."
      >
        <ContextMenu>
          <ContextMenuTrigger>
            <TriggerArea>Right-click here</TriggerArea>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>
              <StarIcon />
              Add to Favourites
            </ContextMenuItem>
            <ContextMenuItem inset>Undo</ContextMenuItem>
            <ContextMenuItem inset>Redo</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuLabel inset>Developer</ContextMenuLabel>
            <ContextMenuItem inset>
              Inspect Element
              <ContextMenuShortcut>⌘⇧C</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </ShowcaseSection>

      {/* Disabled Items */}
      <ShowcaseSection
        title="Disabled Items"
        description="Pass the disabled prop to prevent interaction with specific menu items."
      >
        <ContextMenu>
          <ContextMenuTrigger>
            <TriggerArea>Right-click here</TriggerArea>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>
              <CopyIcon />
              Copy
              <ContextMenuShortcut>⌘C</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem disabled>
              <ScissorsIcon />
              Cut
              <ContextMenuShortcut>⌘X</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem disabled>
              <FileIcon />
              Paste
              <ContextMenuShortcut>⌘V</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive" disabled>
              <TrashIcon />
              Delete (no permission)
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </ShowcaseSection>

      {/* Full-featured — File Browser */}
      <ShowcaseSection
        title="File Browser"
        description="A realistic context menu combining labels, icons, shortcuts, submenus, and a destructive action."
        childrenClassName="max-w-xl"
      >
        <ContextMenu>
          <ContextMenuTrigger>
            <div className="flex h-40 w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-muted/30 text-sm text-muted-foreground select-none">
              <FolderIcon className="size-8 text-muted-foreground/60" />
              <span>Right-click the folder</span>
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuLabel>project-assets/</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuItem>
              <FolderIcon />
              Open
              <ContextMenuShortcut>↵</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              <EyeIcon />
              Preview
              <ContextMenuShortcut>Space</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuSub>
              <ContextMenuSubTrigger>
                <ShareIcon />
                Share
              </ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem>
                  <LinkIcon />
                  Copy link
                </ContextMenuItem>
                <ContextMenuItem>
                  <DownloadIcon />
                  Download
                </ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuItem>
              <CopyIcon />
              Duplicate
              <ContextMenuShortcut>⌘D</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              <PencilIcon />
              Rename
              <ContextMenuShortcut>F2</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem checked={showBookmarks} onCheckedChange={setShowBookmarks}>
              Pin to sidebar
            </ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive">
              <TrashIcon />
              Move to Trash
              <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </ShowcaseSection>
    </div>
  )
}
