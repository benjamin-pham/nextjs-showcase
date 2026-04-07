"use client"

import * as React from "react"
import { InfoIcon, SearchIcon, EyeIcon, EyeOffIcon, AtSignIcon, LockIcon } from "lucide-react"

import { Badge } from "@/components/atoms/badge"
import { Button } from "@/components/atoms/button"
import { ButtonGroup } from "@/components/atoms/button-group"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/atoms/field"
import { Input } from "@/components/atoms/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/atoms/input-group"
import { ShowcaseSection } from "@/app/showcase/showcase-section"

export default function InputShowcasePage() {
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Input</h1>
        <p className="text-muted-foreground text-sm mt-1">
          A text input component for forms and user data entry with built-in
          styling and accessibility features.
        </p>
      </div>

      {/* Basic */}
      <ShowcaseSection
        title="Basic"
        description="A simple standalone input with placeholder text."
        childrenClassName="max-w-sm"
      >
        <Input placeholder="Type something..." />
      </ShowcaseSection>

      {/* Field */}
      <ShowcaseSection
        title="Field"
        description="Use Field, FieldLabel, and FieldDescription to create an input with a label and description."
        childrenClassName="max-w-sm"
      >
        <Field>
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <Input id="username" autoComplete="off" placeholder="evil-rabbit" />
          <FieldDescription>
            Choose a unique username for your account.
          </FieldDescription>
        </Field>
      </ShowcaseSection>

      {/* Field Group */}
      <ShowcaseSection
        title="Field Group"
        description="Use FieldGroup to show multiple Field blocks and to build forms."
        childrenClassName="max-w-sm"
      >
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="fg-first-name">First name</FieldLabel>
            <Input id="fg-first-name" placeholder="John" autoComplete="off" />
          </Field>
          <Field>
            <FieldLabel htmlFor="fg-email">Email</FieldLabel>
            <Input
              id="fg-email"
              type="email"
              placeholder="john@example.com"
              autoComplete="off"
            />
            <FieldDescription>We&apos;ll send updates to this address.</FieldDescription>
          </Field>
          <Button className="w-fit">Save</Button>
        </FieldGroup>
      </ShowcaseSection>

      {/* Disabled */}
      <ShowcaseSection
        title="Disabled"
        description='Use the disabled prop to disable the input. Add data-disabled to the Field component to style the label.'
        childrenClassName="max-w-sm"
      >
        <Field data-disabled="true">
          <FieldLabel htmlFor="disabled-field">API Key</FieldLabel>
          <Input
            id="disabled-field"
            disabled
            defaultValue="sk-••••••••••••••••••••••"
          />
          <FieldDescription>This field is currently disabled.</FieldDescription>
        </Field>
      </ShowcaseSection>

      {/* Invalid */}
      <ShowcaseSection
        title="Invalid"
        description='Use aria-invalid on the input and data-invalid on the Field to apply error styling.'
        childrenClassName="max-w-sm"
      >
        <Field data-invalid>
          <FieldLabel htmlFor="invalid-email">Email</FieldLabel>
          <Input
            id="invalid-email"
            type="email"
            aria-invalid
            defaultValue="not-an-email"
          />
          <FieldError>This field contains validation errors.</FieldError>
        </Field>
      </ShowcaseSection>

      {/* File */}
      <ShowcaseSection
        title="File"
        description='Use type="file" to create a file input.'
        childrenClassName="max-w-sm"
      >
        <Field>
          <FieldLabel htmlFor="file-upload">Picture</FieldLabel>
          <Input id="file-upload" type="file" />
          <FieldDescription>Select a picture to upload.</FieldDescription>
        </Field>
      </ShowcaseSection>

      {/* Inline */}
      <ShowcaseSection
        title="Inline"
        description='Use Field with orientation="horizontal" paired with a Button to build a search input.'
        childrenClassName="max-w-sm"
      >
        <Field orientation="horizontal">
          <Input id="inline-search" placeholder="Search..." />
          <Button type="submit">Search</Button>
        </Field>
      </ShowcaseSection>

      {/* Grid */}
      <ShowcaseSection
        title="Grid"
        description="Use a grid layout to place multiple inputs side by side."
        childrenClassName="max-w-md"
      >
        <FieldGroup>
          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="grid-first">First name</FieldLabel>
              <Input id="grid-first" placeholder="John" />
            </Field>
            <Field>
              <FieldLabel htmlFor="grid-last">Last name</FieldLabel>
              <Input id="grid-last" placeholder="Doe" />
            </Field>
          </div>
          <Field>
            <FieldLabel htmlFor="grid-city">City</FieldLabel>
            <Input id="grid-city" placeholder="San Francisco" />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="grid-state">State</FieldLabel>
              <Input id="grid-state" placeholder="CA" />
            </Field>
            <Field>
              <FieldLabel htmlFor="grid-zip">ZIP</FieldLabel>
              <Input id="grid-zip" placeholder="94107" />
            </Field>
          </div>
        </FieldGroup>
      </ShowcaseSection>

      {/* Required */}
      <ShowcaseSection
        title="Required"
        description="Use the required attribute to indicate required inputs."
        childrenClassName="max-w-sm"
      >
        <Field>
          <FieldLabel htmlFor="required-email">
            Email <span className="text-destructive">*</span>
          </FieldLabel>
          <Input
            id="required-email"
            type="email"
            required
            placeholder="you@example.com"
          />
          <FieldDescription>This field must be filled out.</FieldDescription>
        </Field>
      </ShowcaseSection>

      {/* Badge in label */}
      <ShowcaseSection
        title="Badge"
        description="Use Badge in the label to highlight a recommended field."
        childrenClassName="max-w-sm"
      >
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="badge-display">
              Display name{" "}
              <Badge variant="secondary">Recommended</Badge>
            </FieldLabel>
            <Input id="badge-display" placeholder="Evil Rabbit" autoComplete="off" />
          </Field>
          <Field>
            <FieldLabel htmlFor="badge-username">
              Username <Badge variant="outline">Optional</Badge>
            </FieldLabel>
            <Input id="badge-username" placeholder="evil-rabbit" autoComplete="off" />
          </Field>
        </FieldGroup>
      </ShowcaseSection>

      {/* Input Group — icons */}
      <ShowcaseSection
        title="Input Group"
        description="Use InputGroup with InputGroupAddon to add icons, text, or buttons inside an input."
        childrenClassName="max-w-sm"
      >
        <FieldGroup>
          {/* Icon start */}
          <Field>
            <FieldLabel htmlFor="ig-email">Email</FieldLabel>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <AtSignIcon />
              </InputGroupAddon>
              <InputGroupInput id="ig-email" type="email" placeholder="you@example.com" />
            </InputGroup>
          </Field>

          {/* Icon end — info */}
          <Field>
            <FieldLabel htmlFor="ig-info">Website</FieldLabel>
            <InputGroup>
              <InputGroupInput id="ig-info" type="url" placeholder="https://example.com" />
              <InputGroupAddon align="inline-end">
                <InfoIcon />
              </InputGroupAddon>
            </InputGroup>
          </Field>

          {/* Password toggle */}
          <Field>
            <FieldLabel htmlFor="ig-password">Password</FieldLabel>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <LockIcon />
              </InputGroupAddon>
              <InputGroupInput
                id="ig-password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputGroupAddon align="inline-end">
                <InputGroupButton
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((v) => !v)}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </FieldGroup>
      </ShowcaseSection>

      {/* Button Group */}
      <ShowcaseSection
        title="Button Group"
        description="Use ButtonGroup to attach buttons directly to an input."
        childrenClassName="max-w-sm"
      >
        <FieldGroup>
          {/* Search with button */}
          <Field>
            <FieldLabel htmlFor="bg-search">Search</FieldLabel>
            <ButtonGroup>
              <Input id="bg-search" placeholder="Search..." className="rounded-r-none" />
              <Button className="rounded-l-none">
                <SearchIcon />
                Go
              </Button>
            </ButtonGroup>
          </Field>

          {/* Coupon with apply */}
          <Field>
            <FieldLabel htmlFor="bg-coupon">Coupon code</FieldLabel>
            <ButtonGroup>
              <Input id="bg-coupon" placeholder="SAVE20" className="rounded-r-none" />
              <Button variant="outline" className="rounded-l-none">
                Apply
              </Button>
            </ButtonGroup>
          </Field>
        </FieldGroup>
      </ShowcaseSection>

      {/* Full Form */}
      <ShowcaseSection
        title="Form"
        description="A complete form example demonstrating multiple input types, validation states, and layout patterns."
        childrenClassName="max-w-md"
      >
        <form
          className="flex flex-col gap-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <FieldGroup>
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="form-first">First name</FieldLabel>
                <Input id="form-first" placeholder="John" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="form-last">Last name</FieldLabel>
                <Input id="form-last" placeholder="Doe" required />
              </Field>
            </div>

            <Field>
              <FieldLabel htmlFor="form-email">
                Email <span className="text-destructive">*</span>
              </FieldLabel>
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <AtSignIcon />
                </InputGroupAddon>
                <InputGroupInput
                  id="form-email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </InputGroup>
              <FieldDescription>
                We&apos;ll never share your email with anyone.
              </FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="form-password">
                Password <span className="text-destructive">*</span>
              </FieldLabel>
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <LockIcon />
                </InputGroupAddon>
                <InputGroupInput
                  id="form-password"
                  type="password"
                  placeholder="Create a password"
                  required
                />
              </InputGroup>
            </Field>

            <Field>
              <FieldLabel htmlFor="form-avatar">Profile picture</FieldLabel>
              <Input id="form-avatar" type="file" accept="image/*" />
              <FieldDescription>JPG, PNG or WebP. Max 2 MB.</FieldDescription>
            </Field>
          </FieldGroup>

          <Button className="w-full">Create account</Button>
        </form>
      </ShowcaseSection>
    </div>
  )
}
