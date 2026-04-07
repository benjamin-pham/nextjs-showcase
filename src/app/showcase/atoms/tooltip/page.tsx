"use client"

import * as React from "react"
import { Plus } from "lucide-react"

import { ShowcaseSection } from "@/app/showcase/showcase-section"
import { Button } from "@/components/atoms/button"
import { Kbd } from "@/components/atoms/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/atoms/tooltip"

export default function TooltipShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Tooltip</h1>
        <p className="text-muted-foreground text-sm mt-1">
          A popup that displays information related to an element when the
          element receives keyboard focus or the mouse hovers over it.
        </p>
      </div>

      {/* Basic */}
      <ShowcaseSection
        title="Basic"
        description="A simple tooltip that appears on hover."
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </ShowcaseSection>

      {/* Custom Side */}
      <ShowcaseSection
        title="Side Placement"
        description="Position the tooltip on different sides: top, right, bottom, or left."
      >
        <div className="flex flex-wrap items-center gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Top</Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Tooltip on top</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Right</Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Tooltip on right</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Bottom</Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Tooltip on bottom</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Left</Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Tooltip on left</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </ShowcaseSection>

      {/* With Shortcut */}
      <ShowcaseSection
        title="With Shortcut"
        description="Include keyboard shortcuts within the tooltip."
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Plus className="size-4" />
                <span className="sr-only">Add</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent className="flex items-center gap-2">
              Add to project
              <Kbd>⌘K</Kbd>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </ShowcaseSection>

      {/* Delay Duration */}
      <ShowcaseSection
        title="Delay Duration"
        description="Control the timing of the tooltip appearance."
      >
        <div className="flex flex-wrap items-center gap-4">
          <TooltipProvider delayDuration={700}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Slow (700ms)</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Delayed feedback</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Instant (0ms)</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Instant feedback</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </ShowcaseSection>
    </div>
  )
}
