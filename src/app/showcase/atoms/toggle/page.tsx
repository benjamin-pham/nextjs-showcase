"use client"

import * as React from "react"
import { Bold, Italic, Underline } from "lucide-react"

import { ShowcaseSection } from "@/app/showcase/showcase-section"
import { Toggle } from "@/components/atoms/toggle"

export default function ToggleShowcasePage() {
  const [pressed, setPressed] = React.useState(false)

  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Toggle</h1>
        <p className="text-muted-foreground text-sm mt-1">
          A two-state button that can be either off or on.
        </p>
      </div>

      {/* Basic */}
      <ShowcaseSection
        title="Basic"
        description="A basic toggle button with an icon."
      >
        <Toggle aria-label="Toggle bold">
          <Bold className="size-4" />
        </Toggle>
      </ShowcaseSection>

      {/* Outline */}
      <ShowcaseSection
        title="Outline"
        description="A toggle button with an outline variant."
      >
        <Toggle variant="outline" aria-label="Toggle italic">
          <Italic className="size-4" />
        </Toggle>
      </ShowcaseSection>

      {/* With Text */}
      <ShowcaseSection
        title="With Text"
        description="A toggle button with text and an icon."
      >
        <div className="flex items-center gap-4">
          <Toggle aria-label="Toggle underline" data-icon="inline-start">
            <Underline className="size-4" />
            Underline
          </Toggle>
          <Toggle aria-label="Toggle underline" data-icon="inline-end">
            Underline
            <Underline className="size-4" />
          </Toggle>
        </div>
      </ShowcaseSection>

      {/* Sizes */}
      <ShowcaseSection
        title="Sizes"
        description="Toggle buttons come in different sizes."
      >
        <div className="flex items-center gap-4">
          <Toggle size="sm" aria-label="Toggle bold">
            <Bold className="size-4" />
          </Toggle>
          <Toggle size="default" aria-label="Toggle bold">
            <Bold className="size-4" />
          </Toggle>
          <Toggle size="lg" aria-label="Toggle bold">
            <Bold className="size-4" />
          </Toggle>
        </div>
      </ShowcaseSection>

      {/* Disabled */}
      <ShowcaseSection
        title="Disabled"
        description="Toggle buttons can be disabled."
      >
        <div className="flex items-center gap-4">
          <Toggle disabled aria-label="Toggle bold">
            <Bold className="size-4" />
          </Toggle>
          <Toggle disabled pressed variant="outline" aria-label="Toggle bold">
            <Bold className="size-4" />
          </Toggle>
        </div>
      </ShowcaseSection>

      {/* Controlled */}
      <ShowcaseSection
        title="Controlled"
        description={`A controlled toggle button. Pressed: ${pressed}`}
      >
        <Toggle
          pressed={pressed}
          onPressedChange={setPressed}
          aria-label="Toggle italic"
        >
          <Italic className="size-4" />
        </Toggle>
      </ShowcaseSection>
    </div>
  )
}
