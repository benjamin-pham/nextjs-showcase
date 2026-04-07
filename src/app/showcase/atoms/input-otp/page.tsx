"use client"

import * as React from "react"
import { REGEXP_ONLY_DIGITS, REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import { RefreshCwIcon } from "lucide-react"

import { Button } from "@/components/atoms/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/atoms/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/atoms/input-otp"
import { ShowcaseSection } from "@/app/showcase/showcase-section"

export default function InputOTPShowcasePage() {
  const [controlledValue, setControlledValue] = React.useState("")
  const [invalidValue, setInvalidValue] = React.useState("12")
  const [formValue, setFormValue] = React.useState("")
  const [formSubmitted, setFormSubmitted] = React.useState(false)

  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Input OTP</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Accessible one-time password component with copy-paste functionality.
          Built on top of{" "}
          <code className="text-xs bg-muted px-1 py-0.5 rounded">
            input-otp
          </code>{" "}
          by @guilherme_rodz. Compose{" "}
          <code className="text-xs bg-muted px-1 py-0.5 rounded">
            InputOTPGroup
          </code>
          ,{" "}
          <code className="text-xs bg-muted px-1 py-0.5 rounded">
            InputOTPSlot
          </code>
          , and{" "}
          <code className="text-xs bg-muted px-1 py-0.5 rounded">
            InputOTPSeparator
          </code>{" "}
          inside{" "}
          <code className="text-xs bg-muted px-1 py-0.5 rounded">
            InputOTP
          </code>
          .
        </p>
      </div>

      {/* Basic */}
      <ShowcaseSection
        title="Basic"
        description="A simple 6-digit OTP input split into two groups of three."
      >
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </ShowcaseSection>

      {/* Separator */}
      <ShowcaseSection
        title="Separator"
        description="Use the InputOTPSeparator component to add a visual separator between groups."
      >
        <FieldGroup>
          <Field>
            <FieldLabel>Two groups of 3</FieldLabel>
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </Field>

          <Field>
            <FieldLabel>Three groups of 2</FieldLabel>
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </Field>
        </FieldGroup>
      </ShowcaseSection>

      {/* Pattern — Digits only */}
      <ShowcaseSection
        title="Pattern"
        description="Use the pattern prop to restrict input. REGEXP_ONLY_DIGITS limits to numeric characters only."
      >
        <Field>
          <FieldLabel htmlFor="pattern-digits">Digits only</FieldLabel>
          <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <FieldDescription>Only numeric characters are accepted.</FieldDescription>
        </Field>
      </ShowcaseSection>

      {/* Disabled */}
      <ShowcaseSection
        title="Disabled"
        description="Use the disabled prop to prevent interaction with the OTP input."
      >
        <Field data-disabled="true">
          <FieldLabel>Verification code</FieldLabel>
          <InputOTP maxLength={6} disabled>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <FieldDescription>This input is currently disabled.</FieldDescription>
        </Field>
      </ShowcaseSection>

      {/* Controlled */}
      <ShowcaseSection
        title="Controlled"
        description="Use the value and onChange props to control the input value from React state."
      >
        <Field>
          <FieldLabel>Enter code</FieldLabel>
          <InputOTP
            maxLength={6}
            value={controlledValue}
            onChange={setControlledValue}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <FieldDescription>
            Current value:{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded">
              {controlledValue || "(empty)"}
            </code>
          </FieldDescription>
        </Field>
      </ShowcaseSection>

      {/* Invalid */}
      <ShowcaseSection
        title="Invalid"
        description="Use aria-invalid on the InputOTPGroup to show an error state."
      >
        <Field data-invalid>
          <FieldLabel>Security code</FieldLabel>
          <InputOTP
            maxLength={6}
            value={invalidValue}
            onChange={setInvalidValue}
          >
            <InputOTPGroup aria-invalid>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup aria-invalid>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <FieldError>Invalid code. Please check and try again.</FieldError>
        </Field>
      </ShowcaseSection>

      {/* Four Digits — PIN */}
      <ShowcaseSection
        title="Four Digits"
        description="A common pattern for PIN codes using pattern={REGEXP_ONLY_DIGITS} with maxLength={4}."
      >
        <Field>
          <FieldLabel>Enter PIN</FieldLabel>
          <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
          <FieldDescription>Enter your 4-digit PIN to continue.</FieldDescription>
        </Field>
      </ShowcaseSection>

      {/* Alphanumeric */}
      <ShowcaseSection
        title="Alphanumeric"
        description="Use REGEXP_ONLY_DIGITS_AND_CHARS to accept both letters and numbers."
      >
        <Field>
          <FieldLabel>Invite code</FieldLabel>
          <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <FieldDescription>
            Letters and numbers are both accepted (e.g. ABC123).
          </FieldDescription>
        </Field>
      </ShowcaseSection>

      {/* Form example */}
      <ShowcaseSection
        title="Form"
        description="A complete example: enter a 6-digit code then submit. Includes a resend action."
        childrenClassName="max-w-sm"
      >
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault()
            if (formValue.length === 6) setFormSubmitted(true)
          }}
        >
          <Field>
            <FieldLabel htmlFor="form-otp">Verification code</FieldLabel>
            <InputOTP
              id="form-otp"
              maxLength={6}
              value={formValue}
              onChange={(v) => {
                setFormValue(v)
                setFormSubmitted(false)
              }}
              pattern={REGEXP_ONLY_DIGITS}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <FieldDescription>
              Check your email for a 6-digit verification code.
            </FieldDescription>
          </Field>

          {formSubmitted && (
            <p className="text-sm text-green-600 dark:text-green-400 font-medium">
              ✓ Code verified successfully!
            </p>
          )}

          <div className="flex items-center gap-3">
            <Button
              type="submit"
              disabled={formValue.length < 6}
              className="flex-1"
            >
              Verify
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Resend code"
              onClick={() => {
                setFormValue("")
                setFormSubmitted(false)
              }}
            >
              <RefreshCwIcon />
            </Button>
          </div>
        </form>
      </ShowcaseSection>
    </div>
  )
}
