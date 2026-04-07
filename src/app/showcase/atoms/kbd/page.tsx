"use client"
import * as React from "react"
import { SearchIcon, SettingsIcon, TerminalIcon } from "lucide-react"

import { Kbd, KbdGroup } from "@/components/atoms/kbd"
import { Button } from "@/components/atoms/button"
import { ButtonGroup } from "@/components/atoms/button-group"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/atoms/input-group"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/atoms/tooltip"
import { ShowcaseSection } from "@/app/showcase/showcase-section"

export default function KbdShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Kbd</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Used to display textual user input from keyboard.
        </p>
      </div>

      <ShowcaseSection
        title="Basic Usage"
        description="A simple keyboard key indicator."
      >
        <div className="flex items-center gap-4">
          <Kbd>Ctrl</Kbd>
          <Kbd>Cmd</Kbd>
          <Kbd>Shift</Kbd>
          <Kbd>Enter</Kbd>
          <Kbd>Esc</Kbd>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Group"
        description="Use the KbdGroup component to group keyboard keys together."
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-sm text-foreground">
            Use <KbdGroup><Kbd>Ctrl</Kbd><Kbd>K</Kbd></KbdGroup> to open the command palette
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground">
            Press <KbdGroup><Kbd>⇧</Kbd><Kbd>⌘</Kbd><Kbd>P</Kbd></KbdGroup> to open settings
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Inside Button"
        description="Display a keyboard shortcut inside a button."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="outline" className="gap-2">
            <SearchIcon className="size-4" />
            <span>Search</span>
            <Kbd className="ml-2">Ctrl K</Kbd>
          </Button>
          
          <Button variant="outline" className="gap-2">
            <SettingsIcon className="size-4" />
            <span>Settings</span>
            <Kbd>⌘ S</Kbd>
          </Button>
          
          <Button variant="outline" className="gap-2">
            <TerminalIcon className="size-4" />
            <span>Terminal</span>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <Kbd>`</Kbd>
            </KbdGroup>
          </Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Inside Input Group"
        description="Display a keyboard shortcut hint inside an input group."
      >
        <div className="flex flex-col gap-4 max-w-sm">
          <InputGroup>
            <InputGroupAddon>
              <SearchIcon className="text-muted-foreground" />
            </InputGroupAddon>
            <InputGroupInput placeholder="Search documentation..." />
            <InputGroupAddon align="inline-end">
              <Kbd>⌘ K</Kbd>
            </InputGroupAddon>
          </InputGroup>

          <InputGroup>
            <InputGroupInput placeholder="Quick action..." />
            <InputGroupAddon align="inline-end">
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <Kbd>Enter</Kbd>
              </KbdGroup>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Inside Tooltip"
        description="You can use the Kbd component inside a Tooltip component to display a tooltip with a keyboard key."
      >
        <div className="flex flex-wrap gap-4">
          <TooltipProvider>
            <ButtonGroup>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Save</Button>
                </TooltipTrigger>
                <TooltipContent>
                  Save Changes <Kbd>S</Kbd>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Print</Button>
                </TooltipTrigger>
                <TooltipContent>
                  Print Document{" "}
                  <KbdGroup>
                    <Kbd>Ctrl</Kbd>
                    <Kbd>P</Kbd>
                  </KbdGroup>
                </TooltipContent>
              </Tooltip>
            </ButtonGroup>
          </TooltipProvider>
        </div>
      </ShowcaseSection>
    </div>
  )
}
