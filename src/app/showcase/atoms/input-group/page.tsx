"use client"

import * as React from "react"
import {
  AtSignIcon,
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  CreditCardIcon,
  DollarSignIcon,
  EyeIcon,
  EyeOffIcon,
  FileCodeIcon,
  GlobeIcon,
  LockIcon,
  MoreHorizontalIcon,
  SearchIcon,
  SendIcon,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/atoms/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/atoms/input-group"
import { Kbd } from "@/components/atoms/kbd"
import { Separator } from "@/components/atoms/separator"
import { Spinner } from "@/components/atoms/spinner"
import { ShowcaseSection } from "@/app/showcase/showcase-section"

export default function InputGroupShowcasePage() {
  const [showPassword, setShowPassword] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Input Group</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Add addons, buttons, and helper content to inputs. Compose{" "}
          <code className="text-xs bg-muted px-1 py-0.5 rounded">InputGroupAddon</code>,{" "}
          <code className="text-xs bg-muted px-1 py-0.5 rounded">InputGroupButton</code>, and{" "}
          <code className="text-xs bg-muted px-1 py-0.5 rounded">InputGroupText</code> inside an{" "}
          <code className="text-xs bg-muted px-1 py-0.5 rounded">InputGroup</code>.
        </p>
      </div>

      {/* Basic */}
      <ShowcaseSection
        title="Basic"
        description="A simple InputGroup with an icon addon at the inline-start position."
        childrenClassName="max-w-sm"
      >
        <InputGroup>
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon align="inline-end">
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
      </ShowcaseSection>

      {/* Align — inline-start */}
      <ShowcaseSection
        title="Align: inline-start"
        description='Use align="inline-start" to position the addon at the start of the input. This is the default.'
        childrenClassName="max-w-sm"
      >
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="align-is-email">Email</FieldLabel>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <AtSignIcon />
              </InputGroupAddon>
              <InputGroupInput
                id="align-is-email"
                type="email"
                placeholder="you@example.com"
              />
            </InputGroup>
          </Field>

          <Field>
            <FieldLabel htmlFor="align-is-url">Website</FieldLabel>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <GlobeIcon />
              </InputGroupAddon>
              <InputGroupInput
                id="align-is-url"
                type="url"
                placeholder="https://example.com"
              />
            </InputGroup>
          </Field>
        </FieldGroup>
      </ShowcaseSection>

      {/* Align — inline-end */}
      <ShowcaseSection
        title="Align: inline-end"
        description='Use align="inline-end" to position the addon at the end of the input.'
        childrenClassName="max-w-sm"
      >
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="align-ie-search">Search</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="align-ie-search"
                placeholder="Search..."
              />
              <InputGroupAddon align="inline-end">
                <SearchIcon />
              </InputGroupAddon>
            </InputGroup>
          </Field>

          <Field>
            <FieldLabel htmlFor="align-ie-password">Password</FieldLabel>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <LockIcon />
              </InputGroupAddon>
              <InputGroupInput
                id="align-ie-password"
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

      {/* Align — block-start */}
      <ShowcaseSection
        title="Align: block-start"
        description='Use align="block-start" to position the addon above the input or textarea.'
        childrenClassName="max-w-sm"
      >
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="align-bs-code">Code snippet</FieldLabel>
            <InputGroup>
              <InputGroupAddon align="block-start">
                <FileCodeIcon />
                <span className="text-sm font-medium">JavaScript</span>
                <InputGroupButton
                  size="icon-xs"
                  aria-label="Copy"
                  className="ml-auto"
                >
                  <CopyIcon />
                </InputGroupButton>
              </InputGroupAddon>
              <InputGroupTextarea
                id="align-bs-code"
                placeholder="console.log('hello world')"
                rows={3}
              />
            </InputGroup>
          </Field>

          <Field>
            <FieldLabel htmlFor="align-bs-title">Title</FieldLabel>
            <InputGroup>
              <InputGroupAddon align="block-start" className="border-b">
                <span className="text-sm font-medium">Header</span>
              </InputGroupAddon>
              <InputGroupInput id="align-bs-title" placeholder="Enter title..." />
            </InputGroup>
          </Field>
        </FieldGroup>
      </ShowcaseSection>

      {/* Align — block-end */}
      <ShowcaseSection
        title="Align: block-end"
        description='Use align="block-end" to position the addon below the input or textarea.'
        childrenClassName="max-w-sm"
      >
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="align-be-message">Message</FieldLabel>
            <InputGroup>
              <InputGroupTextarea
                id="align-be-message"
                placeholder="Type your message..."
                rows={3}
              />
              <InputGroupAddon align="block-end">
                <span className="text-xs text-muted-foreground">0 / 500</span>
                <InputGroupButton size="xs" className="ml-auto">
                  <SendIcon />
                  Send
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </Field>

          <Field>
            <FieldLabel htmlFor="align-be-note">Note</FieldLabel>
            <InputGroup>
              <InputGroupInput id="align-be-note" placeholder="Short note..." />
              <InputGroupAddon align="block-end" className="border-t">
                <FieldDescription className="text-xs">
                  This will be visible to all team members.
                </FieldDescription>
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </FieldGroup>
      </ShowcaseSection>

      {/* Icon example */}
      <ShowcaseSection
        title="Icon"
        description="Use SVG icons from lucide-react inside InputGroupAddon."
        childrenClassName="max-w-sm"
      >
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="icon-card">Card number</FieldLabel>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <CreditCardIcon />
              </InputGroupAddon>
              <InputGroupInput
                id="icon-card"
                placeholder="4111 1111 1111 1111"
              />
              <InputGroupAddon align="inline-end">
                <CheckIcon className="text-green-500" />
              </InputGroupAddon>
            </InputGroup>
          </Field>

          <Field>
            <FieldLabel htmlFor="icon-amount">Amount</FieldLabel>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <DollarSignIcon />
              </InputGroupAddon>
              <InputGroupInput
                id="icon-amount"
                type="number"
                placeholder="0.00"
              />
            </InputGroup>
          </Field>
        </FieldGroup>
      </ShowcaseSection>

      {/* Text example */}
      <ShowcaseSection
        title="Text"
        description="Use InputGroupText to display static text labels inside the group."
        childrenClassName="max-w-sm"
      >
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="text-url">Website URL</FieldLabel>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText>https://</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput
                id="text-url"
                placeholder="example.com"
              />
            </InputGroup>
          </Field>

          <Field>
            <FieldLabel htmlFor="text-domain">Domain</FieldLabel>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText>@</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput id="text-domain" placeholder="username" />
              <InputGroupAddon align="inline-end">
                <InputGroupText>.com</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </FieldGroup>
      </ShowcaseSection>

      {/* Button example */}
      <ShowcaseSection
        title="Button"
        description="Use InputGroupButton to display action buttons within the group."
        childrenClassName="max-w-sm"
      >
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="button-copy">API Key</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="button-copy"
                defaultValue="sk-••••••••••••••••••"
                readOnly
              />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="icon-xs" aria-label="Copy">
                  <CopyIcon />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </Field>

          <Field>
            <FieldLabel htmlFor="button-multi">Actions</FieldLabel>
            <InputGroup>
              <InputGroupInput id="button-multi" placeholder="Enter value..." />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="icon-xs" aria-label="Copy">
                  <CopyIcon />
                </InputGroupButton>
                <Separator orientation="vertical" className="h-4" />
                <InputGroupButton size="icon-xs" aria-label="More options">
                  <MoreHorizontalIcon />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </FieldGroup>
      </ShowcaseSection>

      {/* Kbd example */}
      <ShowcaseSection
        title="Kbd"
        description="Place Kbd components inside InputGroupAddon to hint at keyboard shortcuts."
        childrenClassName="max-w-sm"
      >
        <Field>
          <FieldLabel htmlFor="kbd-search">Search</FieldLabel>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupInput id="kbd-search" placeholder="Search..." />
            <InputGroupAddon align="inline-end">
              <Kbd>⌘K</Kbd>
            </InputGroupAddon>
          </InputGroup>
        </Field>
      </ShowcaseSection>

      {/* Dropdown example */}
      <ShowcaseSection
        title="Dropdown"
        description="Embed a DropdownMenu trigger inside InputGroupAddon for contextual menu actions."
        childrenClassName="max-w-sm"
      >
        <Field>
          <FieldLabel htmlFor="dd-input">Input with dropdown</FieldLabel>
          <InputGroup>
            <InputGroupInput id="dd-input" placeholder="Enter value..." />
            <InputGroupAddon align="inline-end">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <InputGroupButton size="icon-xs" aria-label="Options">
                    <ChevronDownIcon />
                  </InputGroupButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Copy</DropdownMenuItem>
                  <DropdownMenuItem>Paste</DropdownMenuItem>
                  <DropdownMenuItem>Clear</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </InputGroupAddon>
          </InputGroup>
        </Field>
      </ShowcaseSection>

      {/* Spinner example */}
      <ShowcaseSection
        title="Spinner"
        description="Show a loading Spinner inside InputGroupAddon to indicate async operations."
        childrenClassName="max-w-sm"
      >
        <Field>
          <FieldLabel htmlFor="spinner-search">Search</FieldLabel>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              {isLoading ? <Spinner className="size-4" /> : <SearchIcon />}
            </InputGroupAddon>
            <InputGroupInput
              id="spinner-search"
              placeholder="Search..."
              onChange={(e) => {
                setIsLoading(e.target.value.length > 0)
                setTimeout(() => setIsLoading(false), 1500)
              }}
            />
          </InputGroup>
          <FieldDescription>Type anything to see the spinner.</FieldDescription>
        </Field>
      </ShowcaseSection>

      {/* Textarea example */}
      <ShowcaseSection
        title="Textarea"
        description="Use InputGroupTextarea instead of InputGroupInput when you need a multi-line text area."
        childrenClassName="max-w-sm"
      >
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="ta-basic">Message</FieldLabel>
            <InputGroup>
              <InputGroupTextarea
                id="ta-basic"
                placeholder="Type your message..."
                rows={4}
              />
              <InputGroupAddon align="block-end">
                <InputGroupButton size="xs" className="ml-auto">
                  <SendIcon />
                  Send
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </Field>

          <Field>
            <FieldLabel htmlFor="ta-header">Code</FieldLabel>
            <InputGroup>
              <InputGroupAddon align="block-start" className="border-b">
                <FileCodeIcon />
                <span className="text-sm font-medium">snippet.js</span>
                <InputGroupButton
                  size="icon-xs"
                  aria-label="Copy code"
                  className="ml-auto"
                >
                  <CopyIcon />
                </InputGroupButton>
              </InputGroupAddon>
              <InputGroupTextarea
                id="ta-header"
                placeholder="// Write your code here"
                rows={4}
                className="font-mono text-sm"
              />
            </InputGroup>
          </Field>
        </FieldGroup>
      </ShowcaseSection>

      {/* Disabled */}
      <ShowcaseSection
        title="Disabled"
        description="Pass data-disabled to the InputGroup wrapper to dim and disable interaction."
        childrenClassName="max-w-sm"
      >
        <Field data-disabled="true">
          <FieldLabel htmlFor="disabled-api">API Key</FieldLabel>
          <InputGroup data-disabled="true">
            <InputGroupAddon align="inline-start">
              <LockIcon />
            </InputGroupAddon>
            <InputGroupInput
              id="disabled-api"
              disabled
              defaultValue="sk-••••••••••••••••••"
            />
          </InputGroup>
          <FieldDescription>
            This input is currently disabled.
          </FieldDescription>
        </Field>
      </ShowcaseSection>

      {/* Invalid */}
      <ShowcaseSection
        title="Invalid"
        description="Add aria-invalid to the InputGroupInput and data-invalid to Field for error styling."
        childrenClassName="max-w-sm"
      >
        <Field data-invalid>
          <FieldLabel htmlFor="invalid-email">Email</FieldLabel>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <AtSignIcon />
            </InputGroupAddon>
            <InputGroupInput
              id="invalid-email"
              type="email"
              aria-invalid
              defaultValue="not-an-email"
            />
          </InputGroup>
          <FieldError>Please enter a valid email address.</FieldError>
        </Field>
      </ShowcaseSection>
    </div>
  )
}
