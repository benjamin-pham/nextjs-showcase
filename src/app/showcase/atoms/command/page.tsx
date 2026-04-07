"use client"

import * as React from "react"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/atoms/command"
import { Button } from "@/components/atoms/button"
import { ShowcaseSection } from "@/app/showcase/showcase-section"
import {
  CalendarIcon,
  CreditCardIcon,
  FileTextIcon,
  HomeIcon,
  MailIcon,
  MessageSquareIcon,
  MusicIcon,
  SearchIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react"

export default function CommandShowcasePage() {
  const [open, setOpen] = React.useState(false)
  const [openFull, setOpenFull] = React.useState(false)
  const [emptySearch, setEmptySearch] = React.useState("xxxxxxxxx")

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Command</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Fast, composable, unstyled command menu for React.
        </p>
      </div>

      {/* Default */}
      <ShowcaseSection
        title="Default"
        description="A basic command menu with search input, groups, and items."
        childrenClassName="max-w-sm"
      >
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <CalendarIcon />
                Calendar
              </CommandItem>
              <CommandItem>
                <SmileIcon />
                Search Emoji
              </CommandItem>
              <CommandItem>
                <MusicIcon />
                Search Music
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <UserIcon />
                Profile
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCardIcon />
                Billing
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <SettingsIcon />
                Settings
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </ShowcaseSection>

      {/* With Icons */}
      <ShowcaseSection
        title="With Icons"
        description="Add icons to command items to give visual context to each action."
        childrenClassName="max-w-sm"
      >
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Navigation">
              <CommandItem>
                <HomeIcon />
                Home
              </CommandItem>
              <CommandItem>
                <FileTextIcon />
                Documents
              </CommandItem>
              <CommandItem>
                <MailIcon />
                Inbox
              </CommandItem>
              <CommandItem>
                <MessageSquareIcon />
                Messages
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </ShowcaseSection>

      {/* With Keyboard Shortcuts */}
      <ShowcaseSection
        title="With Keyboard Shortcuts"
        description="Use CommandShortcut to display keyboard shortcuts alongside items."
        childrenClassName="max-w-sm"
      >
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="Search commands..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Actions">
              <CommandItem>
                <FileTextIcon />
                New File
                <CommandShortcut>⌘N</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <SearchIcon />
                Find in Files
                <CommandShortcut>⇧⌘F</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <SettingsIcon />
                Open Settings
                <CommandShortcut>⌘,</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </ShowcaseSection>

      {/* With Multiple Groups */}
      <ShowcaseSection
        title="With Multiple Groups"
        description="Separate related items using CommandGroup and CommandSeparator."
        childrenClassName="max-w-sm"
      >
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Pages">
              <CommandItem>
                <HomeIcon />
                Dashboard
              </CommandItem>
              <CommandItem>
                <FileTextIcon />
                Reports
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Account">
              <CommandItem>
                <UserIcon />
                Profile
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCardIcon />
                Billing
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <SettingsIcon />
                Settings
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Help">
              <CommandItem>
                <MailIcon />
                Contact Support
              </CommandItem>
              <CommandItem>
                <MessageSquareIcon />
                Documentation
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </ShowcaseSection>

      {/* Checked Items */}
      <ShowcaseSection
        title="Checked Items"
        description="Use the data-checked attribute on CommandItem to show a checkmark for selected options."
        childrenClassName="max-w-sm"
      >
        <CheckedCommandExample />
      </ShowcaseSection>

      {/* Empty State */}
      <ShowcaseSection
        title="Empty State"
        description="CommandEmpty renders when no items match the search query."
        childrenClassName="max-w-sm"
      >
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="Try typing something..." value={emptySearch} onValueChange={setEmptySearch} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </ShowcaseSection>

      {/* Dialog */}
      <ShowcaseSection
        title="Dialog"
        description="Wrap Command in CommandDialog to show it as a modal. Press ⌘K to open."
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Button onClick={() => setOpen(true)}>Open Command Menu</Button>
            <p className="text-sm text-muted-foreground">
              or press{" "}
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>
            </p>
          </div>
        </div>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem onSelect={() => setOpen(false)}>
                  <CalendarIcon />
                  Calendar
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  <SmileIcon />
                  Search Emoji
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  <MusicIcon />
                  Search Music
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem onSelect={() => setOpen(false)}>
                  <UserIcon />
                  Profile
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  <CreditCardIcon />
                  Billing
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  <SettingsIcon />
                  Settings
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </ShowcaseSection>

      {/* Full-featured Dialog */}
      <ShowcaseSection
        title="Full-featured Dialog"
        description="A more complete command palette with navigation, actions, and help groups."
      >
        <Button variant="outline" onClick={() => setOpenFull(true)}>
          Open Full Palette
        </Button>
        <CommandDialog open={openFull} onOpenChange={setOpenFull}>
          <Command>
            <CommandInput placeholder="Search commands, files, settings..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Navigation">
                <CommandItem onSelect={() => setOpenFull(false)}>
                  <HomeIcon />
                  Go to Dashboard
                  <CommandShortcut>G D</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setOpenFull(false)}>
                  <FileTextIcon />
                  Go to Documents
                  <CommandShortcut>G F</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setOpenFull(false)}>
                  <MailIcon />
                  Go to Inbox
                  <CommandShortcut>G I</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Actions">
                <CommandItem onSelect={() => setOpenFull(false)}>
                  <FileTextIcon />
                  New Document
                  <CommandShortcut>⌘N</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setOpenFull(false)}>
                  <SearchIcon />
                  Find in Files
                  <CommandShortcut>⇧⌘F</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Account">
                <CommandItem onSelect={() => setOpenFull(false)}>
                  <UserIcon />
                  Profile
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setOpenFull(false)}>
                  <SettingsIcon />
                  Settings
                  <CommandShortcut>⌘,</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </ShowcaseSection>
    </div>
  )
}

function CheckedCommandExample() {
  const themes = ["Light", "Dark", "System"]
  const [selected, setSelected] = React.useState("System")

  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Select theme..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Theme">
          {themes.map((theme) => (
            <CommandItem
              key={theme}
              data-checked={selected === theme}
              onSelect={() => setSelected(theme)}
            >
              {theme}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
