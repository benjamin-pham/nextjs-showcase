"use client"

import * as React from "react"
import { SendIcon } from "lucide-react"

import { Button } from "@/components/atoms/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/atoms/field"
import { Textarea } from "@/components/atoms/textarea"
import { ShowcaseSection } from "@/app/showcase/showcase-section"

export default function TextareaShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Textarea</h1>
        <p className="text-muted-foreground text-sm mt-1">
          A multi-line text input component for forms and user data entry.
        </p>
      </div>

      {/* Basic */}
      <ShowcaseSection
        title="Basic"
        description="A simple standalone textarea."
        childrenClassName="max-w-md"
      >
        <Textarea placeholder="Type your message here." />
      </ShowcaseSection>

      {/* Field */}
      <ShowcaseSection
        title="Field"
        description="Use Field, FieldLabel, and FieldDescription to create a textarea with a label and description."
        childrenClassName="max-w-md"
      >
        <Field>
          <FieldLabel htmlFor="message">Your Message</FieldLabel>
          <Textarea 
            placeholder="Tell us a little bit about yourself..." 
            id="message" 
          />
          <FieldDescription>
            Your message will be sent to the support team.
          </FieldDescription>
        </Field>
      </ShowcaseSection>

      {/* Disabled */}
      <ShowcaseSection
        title="Disabled"
        description="Use the disabled prop to disable the textarea."
        childrenClassName="max-w-md"
      >
        <Field data-disabled="true">
          <FieldLabel htmlFor="disabled-textarea">Feedback</FieldLabel>
          <Textarea 
            id="disabled-textarea" 
            placeholder="Tell us what you think..." 
            disabled 
          />
          <FieldDescription>
            Feedback is currently closed.
          </FieldDescription>
        </Field>
      </ShowcaseSection>

      {/* Invalid */}
      <ShowcaseSection
        title="Invalid"
        description="Use aria-invalid to apply error styling."
        childrenClassName="max-w-md"
      >
        <Field data-invalid>
          <FieldLabel htmlFor="invalid-textarea">Bio</FieldLabel>
          <Textarea 
            id="invalid-textarea" 
            placeholder="Tell us about yourself..." 
            aria-invalid
          />
          <FieldError>
            The bio must be at least 10 characters long.
          </FieldError>
        </Field>
      </ShowcaseSection>

      {/* With Label and Button */}
      <ShowcaseSection
        title="With Button"
        description="Combine Textarea with a Button for message submission."
        childrenClassName="max-w-md"
      >
        <div className="grid w-full gap-2">
          <FieldLabel htmlFor="message-2">Your Message</FieldLabel>
          <Textarea 
            placeholder="Type your message here." 
            id="message-2" 
          />
          <Button className="w-fit">
            <SendIcon className="mr-2 h-4 w-4" />
            Send Message
          </Button>
        </div>
      </ShowcaseSection>

    </div>
  )
}
