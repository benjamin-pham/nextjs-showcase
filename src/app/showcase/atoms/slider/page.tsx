"use client"

import * as React from "react"
import { Slider } from "@/components/atoms/slider"
import { ShowcaseSection } from "@/app/showcase/showcase-section"
import { Label } from "@/components/atoms/label"

export default function SliderShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Slider</h1>
        <p className="text-muted-foreground text-sm mt-1">
          An input where the user selects a value from within a given range.
        </p>
      </div>

      <ShowcaseSection title="Basic" description="A basic slider.">
        <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />
      </ShowcaseSection>

      <ShowcaseSection title="Disabled" description="A disabled slider.">
        <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" disabled />
      </ShowcaseSection>
      
      <ShowcaseSection title="Step" description="A slider with step setting (e.g. step=10).">
         <Slider defaultValue={[50]} max={100} step={10} className="w-[60%]" />
      </ShowcaseSection>
      
      <ShowcaseSection title="Range" description="Multiple thumbs to specify a range.">
         <Slider defaultValue={[20, 80]} max={100} step={1} className="w-[60%]" />
      </ShowcaseSection>
      
      <ShowcaseSection title="Multiple Thumbs" description="A slider with multiple thumbs.">
        <Slider defaultValue={[10, 20, 70]} max={100} step={10} className="w-[60%]" />
      </ShowcaseSection>
      
      <ShowcaseSection title="Vertical" description="A vertical slider.">
        <div className="h-64 flex gap-8">
          <Slider defaultValue={[50]} max={100} step={1} orientation="vertical" />
          <Slider defaultValue={[20, 80]} max={100} step={1} orientation="vertical" />
          <Slider defaultValue={[75]} max={100} step={1} orientation="vertical" disabled />
        </div>
      </ShowcaseSection>
      
      <ShowcaseSection title="Controlled" description="A controlled slider component.">
        <SliderControlled />
      </ShowcaseSection>
    </div>
  )
}

function SliderControlled() {
  const [value, setValue] = React.useState([0.3, 0.7])

  return (
    <div className="grid w-[60%] gap-3">
      <div className="flex items-center justify-between gap-2">
        <Label htmlFor="slider-demo-temperature">Temperature</Label>
        <span className="text-sm text-muted-foreground">
          {value.join(", ")}
        </span>
      </div>
      <Slider
        id="slider-demo-temperature"
        value={value}
        onValueChange={setValue}
        min={0}
        max={1}
        step={0.1}
      />
    </div>
  )
}
