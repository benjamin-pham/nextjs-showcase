"use client"

import * as React from "react"
import { Progress } from "@/components/atoms/progress"
import { Slider } from "@/components/atoms/slider"
import { Field, FieldLabel } from "@/components/atoms/field"
import { ShowcaseSection } from "@/app/showcase/showcase-section"

export default function ProgressShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Progress</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Displays an indicator showing the completion progress of a task,
          typically displayed as a progress bar.
        </p>
      </div>

      {/* Basic */}
      <ShowcaseSection
        title="Basic"
        description="A simple progress bar with a fixed value."
      >
        <div className="w-full max-w-md">
          <Progress value={33} />
        </div>
      </ShowcaseSection>

      {/* Values */}
      <ShowcaseSection
        title="Values"
        description="Progress bars at 0%, 25%, 50%, 75%, and 100% completion."
      >
        <div className="w-full max-w-md flex flex-col gap-4">
          <Progress value={0} />
          <Progress value={25} />
          <Progress value={50} />
          <Progress value={75} />
          <Progress value={100} />
        </div>
      </ShowcaseSection>

      {/* With Label */}
      <ShowcaseSection
        title="With Label"
        description="Use a Field component to add a label to the progress bar."
      >
        <div className="w-full max-w-md flex flex-col gap-4">
          <Field>
            <FieldLabel>Uploading file...</FieldLabel>
            <Progress value={60} />
          </Field>
          <Field>
            <FieldLabel>Installation progress</FieldLabel>
            <Progress value={80} />
          </Field>
        </div>
      </ShowcaseSection>

      {/* Controlled */}
      <ShowcaseSection
        title="Controlled"
        description="A progress bar whose value is controlled by an external input."
      >
        <ControlledProgressExample />
      </ShowcaseSection>

      {/* Indeterminate */}
      <ShowcaseSection
        title="Indeterminate"
        description="Pass null or undefined as the value to show an indeterminate state."
      >
        <div className="w-full max-w-md">
          <Progress value={null} />
        </div>
      </ShowcaseSection>
    </div>
  )
}

function ControlledProgressExample() {
  const [value, setValue] = React.useState(40)

  return (
    <div className="w-full max-w-md flex flex-col gap-4">
      <Field>
        <div className="flex items-center justify-between">
          <FieldLabel>Progress</FieldLabel>
          <span className="text-sm text-muted-foreground font-medium">
            {value}%
          </span>
        </div>
        <Progress value={value} />
      </Field>
      <Slider
        min={0}
        max={100}
        value={[value]}
        onValueChange={(vals) => setValue(vals[0])}
      />
    </div>
  )
}
