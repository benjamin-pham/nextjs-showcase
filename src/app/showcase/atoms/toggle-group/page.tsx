"use client"

import * as React from "react"
import { Bold, Italic, Underline } from "lucide-react"

import { ShowcaseSection } from "@/app/showcase/showcase-section"
import { Field, FieldDescription, FieldLabel } from "@/components/atoms/field"
import { ToggleGroup, ToggleGroupItem } from "@/components/atoms/toggle-group"

export default function ToggleGroupShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Toggle Group</h1>
        <p className="text-muted-foreground text-sm mt-1">
          A set of two-state buttons that can be toggled on or off.
        </p>
      </div>

      {/* Basic */}
      <ShowcaseSection
        title="Basic"
        description="A group of toggle buttons for multiple selection (default)."
      >
        <ToggleGroup type="multiple" aria-label="Toggle formatting">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline className="size-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </ShowcaseSection>

      {/* Single */}
      <ShowcaseSection
        title="Single Selection"
        description="A group of toggle buttons where only one can be selected at a time."
      >
        <ToggleGroup type="single" aria-label="Toggle formatting (single selection)">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline className="size-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </ShowcaseSection>

      {/* Outline */}
      <ShowcaseSection
        title="Outline Variant"
        description="Toggle group items with the outline variant."
      >
        <ToggleGroup variant="outline" type="multiple" aria-label="Toggle formatting">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline className="size-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </ShowcaseSection>

      {/* Sizes */}
      <ShowcaseSection
        title="Sizes"
        description="Toggle group items in different sizes."
      >
        <div className="flex flex-col gap-4">
          <ToggleGroup size="sm" type="multiple" aria-label="Toggle formatting">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup size="default" type="multiple" aria-label="Toggle formatting">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup size="lg" type="multiple" aria-label="Toggle formatting">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </ShowcaseSection>

      {/* Vertical Orientation */}
      <ShowcaseSection
        title="Vertical Orientation"
        description="Toggle group items arranged vertically."
      >
        <ToggleGroup orientation="vertical" type="single" aria-label="Toggle formatting (vertical)">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline className="size-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </ShowcaseSection>

      {/* Spacing */}
      <ShowcaseSection
        title="Spacing"
        description="Toggle group items with custom spacing (using gap)."
      >
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium">Spacing: 0 (Connected)</p>
          <ToggleGroup spacing={0} variant="outline" type="multiple" aria-label="Toggle formatting (connected)">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <Underline className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>

          <p className="text-sm font-medium">Spacing: 1 (Small gap)</p>
          <ToggleGroup spacing={1} variant="outline" type="multiple" aria-label="Toggle formatting (gap)">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <Underline className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </ShowcaseSection>

      {/* Disabled */}
      <ShowcaseSection
        title="Disabled"
        description="The entire toggle group or individual items can be disabled."
      >
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium">Entire Group Disabled</p>
          <ToggleGroup disabled type="multiple" aria-label="Toggle formatting (disabled)">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>

          <p className="text-sm font-medium">Individual Item Disabled (Italic disabled)</p>
          <ToggleGroup type="multiple" aria-label="Toggle formatting (partial)">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" disabled aria-label="Toggle italic">
              <Italic className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <Underline className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </ShowcaseSection>

      {/* Custom */}
      <ShowcaseSection
        title="Custom"
        description="A custom toggle group used as a font weight selector."
      >
        <ToggleGroupFontWeightSelector />
      </ShowcaseSection>
    </div>
  )
}

function ToggleGroupFontWeightSelector() {
  const [fontWeight, setFontWeight] = React.useState("normal")
  return (
    <Field>
      <FieldLabel>Font Weight</FieldLabel>
      <ToggleGroup
        type="single"
        value={fontWeight}
        onValueChange={(value) => value && setFontWeight(value)}
        variant="outline"
        spacing={2}
        size="lg"
      >
        <ToggleGroupItem
          value="light"
          aria-label="Light"
          className="flex size-16 flex-col items-center justify-center rounded-xl"
        >
          <span className="text-2xl leading-none font-light">Aa</span>
          <span className="text-xs text-muted-foreground">Light</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="normal"
          aria-label="Normal"
          className="flex size-16 flex-col items-center justify-center rounded-xl"
        >
          <span className="text-2xl leading-none font-normal">Aa</span>
          <span className="text-xs text-muted-foreground">Normal</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="medium"
          aria-label="Medium"
          className="flex size-16 flex-col items-center justify-center rounded-xl"
        >
          <span className="text-2xl leading-none font-medium">Aa</span>
          <span className="text-xs text-muted-foreground">Medium</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="bold"
          aria-label="Bold"
          className="flex size-16 flex-col items-center justify-center rounded-xl"
        >
          <span className="text-2xl leading-none font-bold">Aa</span>
          <span className="text-xs text-muted-foreground">Bold</span>
        </ToggleGroupItem>
      </ToggleGroup>
      <FieldDescription>
        Use{" "}
        <code className="rounded-md bg-muted px-1 py-0.5 font-mono">
          font-{fontWeight}
        </code>{" "}
        to set the font weight.
      </FieldDescription>
    </Field>
  )
}
