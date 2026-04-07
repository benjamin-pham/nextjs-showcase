"use client"

import * as React from "react"
import { Label } from "@/components/atoms/label"
import { RadioGroup, RadioGroupItem } from "@/components/atoms/radio-group"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/atoms/field"
import { ShowcaseSection } from "@/app/showcase/showcase-section"

export default function RadioGroupShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Radio Group</h1>
        <p className="text-muted-foreground text-sm mt-1">
          A set of checkable buttons—known as radio buttons—where no more than
          one of the buttons can be checked at a time.
        </p>
      </div>

      {/* Basic */}
      <ShowcaseSection
        title="Basic"
        description="A simple radio group with two options."
      >
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option-one" id="rg-basic-option-one" />
            <Label htmlFor="rg-basic-option-one">Option One</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option-two" id="rg-basic-option-two" />
            <Label htmlFor="rg-basic-option-two">Option Two</Label>
          </div>
        </RadioGroup>
      </ShowcaseSection>

      {/* Description */}
      <ShowcaseSection
        title="Description"
        description="Radio group items with a description using the Field component."
      >
        <RadioGroup defaultValue="comfortable" className="max-w-xs">
          <Field orientation="horizontal">
            <RadioGroupItem value="default" id="rg-desc-default" />
            <FieldContent>
              <FieldLabel htmlFor="rg-desc-default">Default</FieldLabel>
              <FieldDescription>Standard spacing for most use cases.</FieldDescription>
            </FieldContent>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="comfortable" id="rg-desc-comfortable" />
            <FieldContent>
              <FieldLabel htmlFor="rg-desc-comfortable">Comfortable</FieldLabel>
              <FieldDescription>More space between elements.</FieldDescription>
            </FieldContent>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="compact" id="rg-desc-compact" />
            <FieldContent>
              <FieldLabel htmlFor="rg-desc-compact">Compact</FieldLabel>
              <FieldDescription>Minimal spacing for dense layouts.</FieldDescription>
            </FieldContent>
          </Field>
        </RadioGroup>
      </ShowcaseSection>

      {/* Choice Card */}
      <ShowcaseSection
        title="Choice Card"
        description="Use FieldLabel to wrap the entire Field for a clickable card-style selection."
      >
        <RadioGroup defaultValue="starter" className="max-w-sm">
          <FieldLabel htmlFor="rg-card-starter">
            <Field orientation="horizontal">
              <RadioGroupItem value="starter" id="rg-card-starter" />
              <FieldContent>
                <FieldLabel htmlFor="rg-card-starter">Starter</FieldLabel>
                <FieldDescription>For individuals and small teams.</FieldDescription>
              </FieldContent>
            </Field>
          </FieldLabel>
          <FieldLabel htmlFor="rg-card-pro">
            <Field orientation="horizontal">
              <RadioGroupItem value="pro" id="rg-card-pro" />
              <FieldContent>
                <FieldLabel htmlFor="rg-card-pro">Pro</FieldLabel>
                <FieldDescription>For growing businesses.</FieldDescription>
              </FieldContent>
            </Field>
          </FieldLabel>
          <FieldLabel htmlFor="rg-card-enterprise">
            <Field orientation="horizontal">
              <RadioGroupItem value="enterprise" id="rg-card-enterprise" />
              <FieldContent>
                <FieldLabel htmlFor="rg-card-enterprise">Enterprise</FieldLabel>
                <FieldDescription>For large teams and enterprises.</FieldDescription>
              </FieldContent>
            </Field>
          </FieldLabel>
        </RadioGroup>
      </ShowcaseSection>

      {/* Fieldset */}
      <ShowcaseSection
        title="Fieldset"
        description="Use FieldSet and FieldLegend to group radio items with a label and description."
      >
        <FieldSet className="max-w-xs">
          <FieldLegend>Billing cycle</FieldLegend>
          <FieldDescription>
            Yearly and lifetime plans offer significant savings.
          </FieldDescription>
          <RadioGroup defaultValue="monthly">
            <Field orientation="horizontal">
              <RadioGroupItem value="monthly" id="rg-fs-monthly" />
              <FieldContent>
                <FieldLabel htmlFor="rg-fs-monthly">Monthly</FieldLabel>
                <FieldDescription>Billed once a month.</FieldDescription>
              </FieldContent>
            </Field>
            <Field orientation="horizontal">
              <RadioGroupItem value="yearly" id="rg-fs-yearly" />
              <FieldContent>
                <FieldLabel htmlFor="rg-fs-yearly">Yearly</FieldLabel>
                <FieldDescription>Save 20% vs monthly.</FieldDescription>
              </FieldContent>
            </Field>
            <Field orientation="horizontal">
              <RadioGroupItem value="lifetime" id="rg-fs-lifetime" />
              <FieldContent>
                <FieldLabel htmlFor="rg-fs-lifetime">Lifetime</FieldLabel>
                <FieldDescription>One-time payment, forever.</FieldDescription>
              </FieldContent>
            </Field>
          </RadioGroup>
        </FieldSet>
      </ShowcaseSection>

      {/* Disabled */}
      <ShowcaseSection
        title="Disabled"
        description="Use the disabled prop on RadioGroupItem to disable individual items."
      >
        <RadioGroup defaultValue="active" className="max-w-xs">
          <Field orientation="horizontal">
            <RadioGroupItem value="active" id="rg-dis-active" />
            <FieldLabel htmlFor="rg-dis-active">Active option</FieldLabel>
          </Field>
          <Field orientation="horizontal" data-disabled="true">
            <RadioGroupItem value="disabled" id="rg-dis-disabled" disabled />
            <FieldLabel htmlFor="rg-dis-disabled">Disabled option</FieldLabel>
          </Field>
          <Field orientation="horizontal" data-disabled="true">
            <RadioGroupItem value="disabled-checked" id="rg-dis-disabled-checked" disabled />
            <FieldLabel htmlFor="rg-dis-disabled-checked">Disabled (pre-selected)</FieldLabel>
          </Field>
        </RadioGroup>
      </ShowcaseSection>

      {/* Invalid */}
      <ShowcaseSection
        title="Invalid"
        description="Use aria-invalid on RadioGroupItem and data-invalid on Field to show validation errors."
      >
        <InvalidRadioGroupExample />
      </ShowcaseSection>
    </div>
  )
}

function InvalidRadioGroupExample() {
  return (
    <FieldSet className="w-full max-w-xs">
      <FieldLegend variant="label">Notification Preferences</FieldLegend>
      <FieldDescription>
        Choose how you want to receive notifications.
      </FieldDescription>
      <RadioGroup defaultValue="email">
        <Field orientation="horizontal" data-invalid>
          <RadioGroupItem value="email" id="invalid-email" aria-invalid />
          <FieldLabel htmlFor="invalid-email" className="font-normal">
            Email only
          </FieldLabel>
        </Field>
        <Field orientation="horizontal" data-invalid>
          <RadioGroupItem value="sms" id="invalid-sms" aria-invalid />
          <FieldLabel htmlFor="invalid-sms" className="font-normal">
            SMS only
          </FieldLabel>
        </Field>
        <Field orientation="horizontal" data-invalid>
          <RadioGroupItem value="both" id="invalid-both" aria-invalid />
          <FieldLabel htmlFor="invalid-both" className="font-normal">
            Both Email & SMS
          </FieldLabel>
        </Field>
      </RadioGroup>
    </FieldSet>
  )
}
