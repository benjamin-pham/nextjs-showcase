"use client"

import * as React from "react"
import { Button } from "@/components/atoms/button"
import { Checkbox } from "@/components/atoms/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/atoms/field"
import { Input } from "@/components/atoms/input"
import { RadioGroup, RadioGroupItem } from "@/components/atoms/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select"
import { Slider } from "@/components/atoms/slider"
import { Switch } from "@/components/atoms/switch"
import { Textarea } from "@/components/atoms/textarea"
import { ShowcaseSection } from "@/app/showcase/showcase-section"

export default function FieldShowcasePage() {
  const [sliderValue, setSliderValue] = React.useState([400])

  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Field</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Combine labels, controls, and help text to compose accessible form
          fields and grouped inputs.
        </p>
      </div>

      {/* Basic Input */}
      <ShowcaseSection
        title="Input"
        description="A basic field with label, input, and description."
        childrenClassName="max-w-sm"
      >
        <Field>
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <Input id="username" autoComplete="off" placeholder="evil-rabbit" />
          <FieldDescription>
            Choose a unique username for your account. Must be at least 8
            characters long.
          </FieldDescription>
        </Field>
      </ShowcaseSection>

      {/* Textarea */}
      <ShowcaseSection
        title="Textarea"
        description="Use Field with a Textarea control for multi-line input."
        childrenClassName="max-w-sm"
      >
        <Field>
          <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
          <Textarea
            id="feedback"
            placeholder="Share your thoughts..."
            rows={4}
          />
          <FieldDescription>
            Share your thoughts about our service.
          </FieldDescription>
        </Field>
      </ShowcaseSection>

      {/* Select */}
      <ShowcaseSection
        title="Select"
        description="Wrap a Select component inside a Field for consistent labeling."
        childrenClassName="max-w-sm"
      >
        <Field>
          <FieldLabel htmlFor="department">Department</FieldLabel>
          <Select>
            <SelectTrigger id="department">
              <SelectValue placeholder="Select a department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="engineering">Engineering</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="sales">Sales</SelectItem>
            </SelectContent>
          </Select>
          <FieldDescription>
            Select your department or area of work.
          </FieldDescription>
        </Field>
      </ShowcaseSection>

      {/* Slider */}
      <ShowcaseSection
        title="Slider"
        description="Use Field with a Slider for range inputs."
        childrenClassName="max-w-sm"
      >
        <Field>
          <FieldLabel htmlFor="budget">
            Budget Range (${sliderValue[0]})
          </FieldLabel>
          <Slider
            id="budget"
            min={200}
            max={800}
            step={50}
            value={sliderValue}
            onValueChange={setSliderValue}
          />
          <FieldDescription>
            Set your budget range ($200 - 800).
          </FieldDescription>
        </Field>
      </ShowcaseSection>

      {/* Switch — horizontal */}
      <ShowcaseSection
        title="Switch"
        description='Use orientation="horizontal" on Field to align the switch and label side-by-side.'
        childrenClassName="max-w-sm"
      >
        <Field orientation="horizontal">
          <Switch id="newsletter" />
          <FieldLabel htmlFor="newsletter">Subscribe to newsletter</FieldLabel>
        </Field>
      </ShowcaseSection>

      {/* Validation & Error */}
      <ShowcaseSection
        title="Validation & Error"
        description='Add data-invalid to Field and aria-invalid to the input to trigger error styling. Render FieldError to display the message.'
        childrenClassName="max-w-sm"
      >
        <Field data-invalid>
          <FieldLabel htmlFor="email-invalid">Email</FieldLabel>
          <Input
            id="email-invalid"
            type="email"
            aria-invalid
            defaultValue="not-an-email"
          />
          <FieldError>Enter a valid email address.</FieldError>
        </Field>
      </ShowcaseSection>

      {/* FieldSet + FieldGroup */}
      <ShowcaseSection
        title="Fieldset"
        description="Group related fields semantically with FieldSet and FieldLegend."
        childrenClassName="max-w-sm"
      >
        <FieldSet>
          <FieldLegend>Delivery Address</FieldLegend>
          <FieldDescription>
            We need your address to deliver your order.
          </FieldDescription>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="street">Street</FieldLabel>
              <Input id="street" placeholder="123 Main St" />
            </Field>
            <Field>
              <FieldLabel htmlFor="city">City</FieldLabel>
              <Input id="city" placeholder="San Francisco" />
            </Field>
            <Field>
              <FieldLabel htmlFor="zip">ZIP Code</FieldLabel>
              <Input id="zip" placeholder="94107" />
            </Field>
          </FieldGroup>
        </FieldSet>
      </ShowcaseSection>

      {/* Checkbox Group */}
      <ShowcaseSection
        title="Checkbox Group"
        description="Use FieldSet with checkboxes for multi-select preference groups."
        childrenClassName="max-w-sm"
      >
        <FieldSet>
          <FieldLegend>Desktop Items</FieldLegend>
          <FieldDescription>
            Select the items you want to show on the desktop.
          </FieldDescription>
          <FieldGroup>
            <Field orientation="horizontal">
              <Checkbox id="desktop" defaultChecked />
              <FieldLabel htmlFor="desktop">Desktop & Documents</FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="downloads" />
              <FieldLabel htmlFor="downloads">Downloads</FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="recent" defaultChecked />
              <FieldLabel htmlFor="recent">Recent Files</FieldLabel>
            </Field>
          </FieldGroup>
          <FieldDescription>
            Your Desktop & Documents folders are being synced with iCloud Drive.
          </FieldDescription>
        </FieldSet>
      </ShowcaseSection>

      {/* Radio Group */}
      <ShowcaseSection
        title="Radio Group"
        description="Wrap a RadioGroup inside a FieldSet for plan or option selection."
        childrenClassName="max-w-sm"
      >
        <FieldSet>
          <FieldLegend>Billing Plan</FieldLegend>
          <FieldDescription>
            Yearly and lifetime plans offer significant savings.
          </FieldDescription>
          <RadioGroup defaultValue="yearly">
            <FieldGroup>
              <Field orientation="horizontal">
                <RadioGroupItem id="monthly" value="monthly" />
                <FieldLabel htmlFor="monthly">Monthly — $12/mo</FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <RadioGroupItem id="yearly" value="yearly" />
                <FieldLabel htmlFor="yearly">
                  Yearly — $99/yr (save 31%)
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <RadioGroupItem id="lifetime" value="lifetime" />
                <FieldLabel htmlFor="lifetime">
                  Lifetime — $249 one-time
                </FieldLabel>
              </Field>
            </FieldGroup>
          </RadioGroup>
        </FieldSet>
      </ShowcaseSection>

      {/* FieldGroup with FieldSeparator */}
      <ShowcaseSection
        title="Field Group with Separator"
        description="Stack Field components inside FieldGroup and use FieldSeparator to divide sections."
        childrenClassName="max-w-sm"
      >
        <FieldSet>
          <FieldLegend variant="label">Notification Preferences</FieldLegend>
          <FieldGroup>
            <Field orientation="horizontal">
              <Checkbox id="notif-research" defaultChecked />
              <FieldContent>
                <FieldTitle>Research updates</FieldTitle>
                <FieldDescription>
                  Get notified when ChatGPT responds to requests that take time,
                  like research or image generation.
                </FieldDescription>
              </FieldContent>
            </Field>
            <FieldSeparator />
            <Field orientation="horizontal">
              <Checkbox id="notif-tasks" />
              <FieldContent>
                <FieldTitle>Task updates</FieldTitle>
                <FieldDescription>
                  Get notified when tasks you&#39;ve created have updates.{" "}
                  <a href="#">Manage tasks</a>
                </FieldDescription>
              </FieldContent>
            </Field>
          </FieldGroup>
        </FieldSet>
      </ShowcaseSection>

      {/* FieldSeparator with label */}
      <ShowcaseSection
        title="Field Separator with Label"
        description="FieldSeparator can render a centered label inside the divider."
        childrenClassName="max-w-sm"
      >
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="first-name">First name</FieldLabel>
            <Input id="first-name" placeholder="John" />
          </Field>
          <FieldSeparator>or</FieldSeparator>
          <Field>
            <FieldLabel htmlFor="last-name">Last name</FieldLabel>
            <Input id="last-name" placeholder="Doe" />
          </Field>
        </FieldGroup>
      </ShowcaseSection>

      {/* Responsive Layout */}
      <ShowcaseSection
        title="Responsive Layout"
        description='Set orientation="responsive" for automatic column-to-row layout inside container-aware FieldGroup.'
        childrenClassName="max-w-2xl"
      >
        <FieldSet>
          <FieldLegend>Profile Information</FieldLegend>
          <FieldDescription>Fill in your profile information.</FieldDescription>
          <FieldGroup className="@container/field-group">
            <Field orientation="responsive">
              <FieldLabel htmlFor="full-name">Full name</FieldLabel>
              <FieldContent>
                <Input
                  id="full-name"
                  placeholder="Evil Rabbit"
                  autoComplete="off"
                />
                <FieldDescription>
                  Provide your full name for identification.
                </FieldDescription>
              </FieldContent>
            </Field>
            <Field orientation="responsive">
              <FieldLabel htmlFor="bio">Bio</FieldLabel>
              <FieldContent>
                <Textarea
                  id="bio"
                  placeholder="Tell us a bit about yourself..."
                  rows={3}
                />
                <FieldDescription>
                  A short bio displayed on your public profile.
                </FieldDescription>
              </FieldContent>
            </Field>
          </FieldGroup>
          <Button className="w-fit">Save changes</Button>
        </FieldSet>
      </ShowcaseSection>

      {/* Multiple Errors */}
      <ShowcaseSection
        title="Multiple Errors"
        description="Pass an errors array to FieldError to display a list of validation messages."
        childrenClassName="max-w-sm"
      >
        <Field data-invalid>
          <FieldLabel htmlFor="password-errors">Password</FieldLabel>
          <Input
            id="password-errors"
            type="password"
            aria-invalid
            defaultValue="pass"
          />
          <FieldError
            errors={[
              { message: "Must be at least 8 characters." },
              { message: "Must contain at least one uppercase letter." },
              { message: "Must contain at least one special character." },
            ]}
          />
        </Field>
      </ShowcaseSection>

      {/* FieldLegend variants */}
      <ShowcaseSection
        title="FieldLegend Variants"
        description='FieldLegend has two variants: "legend" (larger, default) and "label" (label-sized, for nested fieldsets).'
        childrenClassName="max-w-sm"
      >
        <div className="flex flex-col gap-6">
          <FieldSet>
            <FieldLegend variant="legend">Legend variant (default)</FieldLegend>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="legend-demo">Field</FieldLabel>
                <Input id="legend-demo" placeholder="..." />
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldLegend variant="label">Label variant</FieldLegend>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="legend-label-demo">Field</FieldLabel>
                <Input id="legend-label-demo" placeholder="..." />
              </Field>
            </FieldGroup>
          </FieldSet>
        </div>
      </ShowcaseSection>

      {/* Disabled state */}
      <ShowcaseSection
        title="Disabled State"
        description='Set data-disabled="true" on Field to apply reduced opacity to the label.'
        childrenClassName="max-w-sm"
      >
        <Field data-disabled="true">
          <FieldLabel htmlFor="disabled-input">Disabled field</FieldLabel>
          <Input id="disabled-input" placeholder="Cannot edit this" disabled />
          <FieldDescription>
            This field is currently locked by an administrator.
          </FieldDescription>
        </Field>
      </ShowcaseSection>

      {/* Choice Card */}
      <ShowcaseSection
        title="Choice Card"
        description="Wrap Field components inside FieldLabel to create selectable card-style options. Works with RadioGroupItem, Checkbox, and Switch."
        childrenClassName="max-w-xs"
      >
        <FieldGroup className="w-full">
          <FieldSet>
            <FieldLegend variant="label">Compute Environment</FieldLegend>
            <FieldDescription>
              Select the compute environment for your cluster.
            </FieldDescription>
            <RadioGroup defaultValue="kubernetes">
              <FieldLabel htmlFor="kubernetes-r2h">
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Kubernetes</FieldTitle>
                    <FieldDescription>
                      Run GPU workloads on a K8s cluster.
                    </FieldDescription>
                  </FieldContent>
                  <RadioGroupItem value="kubernetes" id="kubernetes-r2h" />
                </Field>
              </FieldLabel>
              <FieldLabel htmlFor="vm-z4k">
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Virtual Machine</FieldTitle>
                    <FieldDescription>
                      Access a cluster to run GPU workloads.
                    </FieldDescription>
                  </FieldContent>
                  <RadioGroupItem value="vm" id="vm-z4k" />
                </Field>
              </FieldLabel>
            </RadioGroup>
          </FieldSet>
        </FieldGroup>
      </ShowcaseSection>

      {/* Full form example */}
      <ShowcaseSection
        title="Full Form Example"
        description="A complete payment form combining FieldSet, FieldGroup, and various controls."
        childrenClassName="max-w-md"
      >
        <FieldSet>
          <FieldLegend>Payment Details</FieldLegend>
          <FieldDescription>All transactions are secure and encrypted.</FieldDescription>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="card-number">Card Number</FieldLabel>
              <Input
                id="card-number"
                placeholder="0000 0000 0000 0000"
                maxLength={19}
              />
              <FieldDescription>Enter your 16-digit card number.</FieldDescription>
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="expiry">Expiry</FieldLabel>
                <Input id="expiry" placeholder="MM / YY" maxLength={7} />
              </Field>
              <Field>
                <FieldLabel htmlFor="cvc">CVC</FieldLabel>
                <Input id="cvc" placeholder="•••" maxLength={3} />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="billing-address">Billing Address</FieldLabel>
              <Input
                id="billing-address"
                placeholder="123 Main St, City, Country"
              />
              <FieldDescription>
                The billing address associated with your payment method.
              </FieldDescription>
            </Field>
            <Field orientation="horizontal">
              <Switch id="save-card" />
              <FieldLabel htmlFor="save-card">Save card for future payments</FieldLabel>
            </Field>
          </FieldGroup>
          <Button className="w-full">Pay Now</Button>
        </FieldSet>
      </ShowcaseSection>
    </div>
  )
}
