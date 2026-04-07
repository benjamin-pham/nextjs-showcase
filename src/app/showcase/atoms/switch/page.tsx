"use client"

import * as React from "react"

import { ShowcaseSection } from "@/app/showcase/showcase-section"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/atoms/field"
import { Label } from "@/components/atoms/label"
import { Switch } from "@/components/atoms/switch"

export default function SwitchShowcasePage() {
  const [airplaneMode, setAirplaneMode] = React.useState(false)

  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Switch</h1>
        <p className="text-muted-foreground text-sm mt-1">
          A control that allows the user to toggle between checked and not checked.
        </p>
      </div>

      {/* Basic */}
      <ShowcaseSection
        title="Basic"
        description="A basic un-controlled switch."
      >
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      </ShowcaseSection>

      {/* Controlled */}
      <ShowcaseSection
        title="Controlled"
        description={`A switch with state managed by React, current state: ${airplaneMode ? "On" : "Off"}.`}
      >
        <div className="flex items-center space-x-2">
          <Switch
            id="airplane-mode-controlled"
            checked={airplaneMode}
            onCheckedChange={setAirplaneMode}
          />
          <Label htmlFor="airplane-mode-controlled">Airplane Mode</Label>
        </div>
      </ShowcaseSection>

      {/* Small Size */}
      <ShowcaseSection
        title="Size"
        description="Use the size prop to change the size of the switch."
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center space-x-2">
            <Switch id="small-mode" size="sm" />
            <Label htmlFor="small-mode">Small Mode (sm)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="default-mode" size="default" />
            <Label htmlFor="default-mode">Default Mode</Label>
          </div>
        </div>
      </ShowcaseSection>

      {/* Disabled */}
      <ShowcaseSection
        title="Disabled"
        description="Disabled switches reduce opacity and block pointer events."
      >
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode-disabled" disabled />
            <Label htmlFor="airplane-mode-disabled" className="opacity-50">
              Airplane Mode
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode-disabled-checked" disabled defaultChecked />
            <Label htmlFor="airplane-mode-disabled-checked" className="opacity-50">
              Airplane Mode
            </Label>
          </div>
        </div>
      </ShowcaseSection>

      {/* Invalid */}
      <ShowcaseSection
        title="Invalid State"
        description="A switch with the aria-invalid attribute."
      >
        <div className="flex items-center space-x-2">
          <Switch id="terms" aria-invalid="true" />
          <Label htmlFor="terms" className="text-destructive">
            Accept Terms & Conditions
          </Label>
        </div>
      </ShowcaseSection>

      {/* Description */}
      <ShowcaseSection
        title="Description"
        description="A switch with a field description to provide more context."
      >
        <Field orientation="horizontal" className="max-w-sm">
          <FieldContent>
            <FieldLabel htmlFor="switch-focus-mode">
              Share across devices
            </FieldLabel>
            <FieldDescription>
              Focus is shared across devices, and turns off when you leave the app.
            </FieldDescription>
          </FieldContent>
          <Switch id="switch-focus-mode" />
        </Field>
      </ShowcaseSection>

      {/* Choice Card */}
      <ShowcaseSection
        title="Choice Card"
        description="Card-style selection where FieldLabel wraps the entire Field for a clickable card pattern."
      >
        <FieldGroup className="w-full max-w-sm">
          <FieldLabel htmlFor="switch-share">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Share across devices</FieldTitle>
                <FieldDescription>
                  Focus is shared across devices, and turns off when you leave the
                  app.
                </FieldDescription>
              </FieldContent>
              <Switch id="switch-share" />
            </Field>
          </FieldLabel>
          <FieldLabel htmlFor="switch-notifications">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Enable notifications</FieldTitle>
                <FieldDescription>
                  Receive notifications when focus mode is enabled or disabled.
                </FieldDescription>
              </FieldContent>
              <Switch id="switch-notifications" defaultChecked />
            </Field>
          </FieldLabel>
        </FieldGroup>
      </ShowcaseSection>
    </div>
  )
}
