"use client"

import * as React from "react"
import { ShowcaseSection } from "@/app/showcase/showcase-section"
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/atoms/native-select"
import { Label } from "@/components/atoms/label"

export default function NativeSelectShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Native Select</h1>
        <p className="text-muted-foreground text-sm mt-1">
          A native select element wrapper with custom styles and accessibility support.
        </p>
      </div>

      {/* Basic */}
      <ShowcaseSection
        title="Basic"
        description="A simple native select with multiple options."
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="fruit">Favorite Fruit</Label>
          <NativeSelect id="fruit" defaultValue="apple">
            <NativeSelectOption value="apple">Apple</NativeSelectOption>
            <NativeSelectOption value="banana">Banana</NativeSelectOption>
            <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
            <NativeSelectOption value="grapes">Grapes</NativeSelectOption>
            <NativeSelectOption value="pineapple">Pineapple</NativeSelectOption>
          </NativeSelect>
        </div>
      </ShowcaseSection>

      {/* Placeholder */}
      <ShowcaseSection
        title="With Placeholder"
        description="Using a disabled option as a placeholder."
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="placeholder">Pick a fruit</Label>
          <NativeSelect id="placeholder" defaultValue="">
            <NativeSelectOption value="" disabled hidden>
              Select a fruit...
            </NativeSelectOption>
            <NativeSelectOption value="apple">Apple</NativeSelectOption>
            <NativeSelectOption value="banana">Banana</NativeSelectOption>
            <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
          </NativeSelect>
        </div>
      </ShowcaseSection>

      {/* Sizes */}
      <ShowcaseSection
        title="Sizes"
        description="Native select supports two sizes: default and small."
      >
        <div className="flex flex-col gap-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="size-default">Default size</Label>
            <NativeSelect id="size-default" size="default">
              <NativeSelectOption value="1">Option 1</NativeSelectOption>
              <NativeSelectOption value="2">Option 2</NativeSelectOption>
            </NativeSelect>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="size-sm">Small size</Label>
            <NativeSelect id="size-sm" size="sm">
              <NativeSelectOption value="1">Option 1</NativeSelectOption>
              <NativeSelectOption value="2">Option 2</NativeSelectOption>
            </NativeSelect>
          </div>
        </div>
      </ShowcaseSection>

      {/* States */}
      <ShowcaseSection
        title="States"
        description="Demonstrating disabled and invalid states."
      >
        <div className="flex flex-col gap-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="disabled">Disabled State</Label>
            <NativeSelect id="disabled" disabled>
              <NativeSelectOption value="1">Disabled Select</NativeSelectOption>
            </NativeSelect>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="invalid" className="text-destructive">Invalid State</Label>
            <NativeSelect id="invalid" aria-invalid="true">
              <NativeSelectOption value="1">Invalid Choice</NativeSelectOption>
              <NativeSelectOption value="2">Another Problem</NativeSelectOption>
            </NativeSelect>
            <p className="text-destructive text-xs">This field is required.</p>
          </div>
        </div>
      </ShowcaseSection>

      {/* OptGroup */}
      <ShowcaseSection
        title="Grouped Options"
        description="Organize options using the NativeSelectOptGroup component."
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="grouped">Select a category</Label>
          <NativeSelect id="grouped">
            <NativeSelectOptGroup label="Fruits">
              <NativeSelectOption value="apple">Apple</NativeSelectOption>
              <NativeSelectOption value="banana">Banana</NativeSelectOption>
            </NativeSelectOptGroup>
            <NativeSelectOptGroup label="Meat">
              <NativeSelectOption value="beef">Beef</NativeSelectOption>
              <NativeSelectOption value="pork">Pork</NativeSelectOption>
            </NativeSelectOptGroup>
          </NativeSelect>
        </div>
      </ShowcaseSection>
    </div>
  )
}
