"use client"

import * as React from "react"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/atoms/popover"
import { Button } from "@/components/atoms/button"
import { Input } from "@/components/atoms/input"
import { Field, FieldLabel } from "@/components/atoms/field"
import { ShowcaseSection } from "@/app/showcase/showcase-section"

export default function PopoverShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Popover</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Displays rich content in a portal, triggered by a button.
        </p>
      </div>

      {/* Basic */}
      <ShowcaseSection
        title="Basic"
        description="A simple popover with a header, title, and description."
      >
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Popover Title</PopoverTitle>
              <PopoverDescription>
                This is a simple popover with a title and description.
              </PopoverDescription>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </ShowcaseSection>

      {/* Align */}
      <ShowcaseSection
        title="Align"
        description="Use the align prop on PopoverContent to control the horizontal alignment: start, center (default), and end."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Align Start</Button>
            </PopoverTrigger>
            <PopoverContent align="start">
              <PopoverHeader>
                <PopoverTitle>Aligned Start</PopoverTitle>
                <PopoverDescription>
                  This popover is aligned to the start of the trigger.
                </PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Align Center</Button>
            </PopoverTrigger>
            <PopoverContent align="center">
              <PopoverHeader>
                <PopoverTitle>Aligned Center</PopoverTitle>
                <PopoverDescription>
                  This popover is centered relative to the trigger.
                </PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Align End</Button>
            </PopoverTrigger>
            <PopoverContent align="end">
              <PopoverHeader>
                <PopoverTitle>Aligned End</PopoverTitle>
                <PopoverDescription>
                  This popover is aligned to the end of the trigger.
                </PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>
        </div>
      </ShowcaseSection>

      {/* With Form */}
      <ShowcaseSection
        title="With Form"
        description="A popover containing form fields for collecting user input."
      >
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <PopoverHeader>
              <PopoverTitle>Edit Profile</PopoverTitle>
              <PopoverDescription>
                Make changes to your profile here. Click save when done.
              </PopoverDescription>
            </PopoverHeader>
            <div className="flex flex-col gap-3">
              <Field>
                <FieldLabel>Name</FieldLabel>
                <Input id="name" defaultValue="Benjamin Pham" />
              </Field>
              <Field>
                <FieldLabel>Username</FieldLabel>
                <Input id="username" defaultValue="@benjaminpham" />
              </Field>
              <Button size="sm" className="w-full mt-1">
                Save changes
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </ShowcaseSection>

      {/* Side Offset */}
      <ShowcaseSection
        title="Side Variants"
        description="Control which side the popover appears on using the side prop: top, right, bottom (default), and left."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Top</Button>
            </PopoverTrigger>
            <PopoverContent side="top">
              <PopoverHeader>
                <PopoverTitle>Opens to Top</PopoverTitle>
                <PopoverDescription>This popover appears above the trigger.</PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Right</Button>
            </PopoverTrigger>
            <PopoverContent side="right">
              <PopoverHeader>
                <PopoverTitle>Opens to Right</PopoverTitle>
                <PopoverDescription>This popover appears to the right of the trigger.</PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Bottom</Button>
            </PopoverTrigger>
            <PopoverContent side="bottom">
              <PopoverHeader>
                <PopoverTitle>Opens to Bottom</PopoverTitle>
                <PopoverDescription>This popover appears below the trigger.</PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Left</Button>
            </PopoverTrigger>
            <PopoverContent side="left">
              <PopoverHeader>
                <PopoverTitle>Opens to Left</PopoverTitle>
                <PopoverDescription>This popover appears to the left of the trigger.</PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>
        </div>
      </ShowcaseSection>

      {/* Controlled */}
      <ShowcaseSection
        title="Controlled"
        description="Manage the open state externally using the open and onOpenChange props."
      >
        <ControlledPopoverExample />
      </ShowcaseSection>
    </div>
  )
}

function ControlledPopoverExample() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex items-center gap-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline">
            {open ? "Close Popover" : "Open Popover"}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>
            <PopoverTitle>Controlled Popover</PopoverTitle>
            <PopoverDescription>
              This popover state is controlled externally.
            </PopoverDescription>
          </PopoverHeader>
          <Button
            size="sm"
            variant="outline"
            className="w-full mt-1"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </PopoverContent>
      </Popover>
      <p className="text-sm text-muted-foreground">
        State: <span className="font-medium text-foreground">{open ? "Open" : "Closed"}</span>
      </p>
    </div>
  )
}
