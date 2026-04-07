"use client"
import * as React from "react"
import {
  ArchiveIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  AudioLinesIcon,
  BoldIcon,
  BotIcon,
  ChevronDownIcon,
  ItalicIcon,
  MoreHorizontalIcon,
  PlusIcon,
  SearchIcon,
  Trash2Icon,
  UnderlineIcon,
} from "lucide-react"

import { Button } from "@/components/atoms/button"
import { Input } from "@/components/atoms/input"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/atoms/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/atoms/input-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/atoms/select"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/atoms/tooltip"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/atoms/field"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/atoms/popover"
import { Textarea } from "@/components/atoms/textarea"
import { ShowcaseSection } from "@/app/showcase/showcase-section"

function ButtonGroupInputGroup() {
  const [voiceEnabled, setVoiceEnabled] = React.useState(false)

  return (
    <ButtonGroup className="[--radius:9999rem]">
      <ButtonGroup>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <InputGroup>
          <InputGroupInput
            placeholder={
              voiceEnabled ? "Record and send audio..." : "Send a message..."
            }
            disabled={voiceEnabled}
          />
          <InputGroupAddon align="inline-end">
            <Tooltip>
              <TooltipTrigger asChild>
                <InputGroupButton
                  onClick={() => setVoiceEnabled(!voiceEnabled)}
                  size="icon-xs"
                  data-active={voiceEnabled}
                  className="data-[active=true]:bg-orange-100 data-[active=true]:text-orange-700 dark:data-[active=true]:bg-orange-800 dark:data-[active=true]:text-orange-100"
                  aria-pressed={voiceEnabled}
                >
                  <AudioLinesIcon />
                </InputGroupButton>
              </TooltipTrigger>
              <TooltipContent>Voice Mode</TooltipContent>
            </Tooltip>
          </InputGroupAddon>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  )
}

const CURRENCIES = [
  { value: "$", label: "US Dollar" },
  { value: "€", label: "Euro" },
  { value: "£", label: "British Pound" },
]

function ButtonGroupSelect() {
  const [currency, setCurrency] = React.useState("$")

  return (
    <ButtonGroup>
      <ButtonGroup>
        <Select value={currency} onValueChange={setCurrency}>
          <SelectTrigger className="font-mono">{currency}</SelectTrigger>
          <SelectContent className="min-w-24">
            <SelectGroup>
              {CURRENCIES.map((currency) => (
                <SelectItem key={currency.value} value={currency.value}>
                  {currency.value}{" "}
                  <span className="text-muted-foreground">{currency.label}</span>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input placeholder="10.00" pattern="[0-9]*" />
      </ButtonGroup>
      <ButtonGroup>
        <Button aria-label="Send" size="icon" variant="outline">
          <ArrowRightIcon />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  )
}

function ButtonGroupPopover() {
  return (
    <ButtonGroup>
      <Button variant="outline">
        <BotIcon /> Copilot
      </Button>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Open Popover">
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" className="rounded-xl text-sm">
          <PopoverHeader>
            <PopoverTitle>Start a new task with Copilot</PopoverTitle>
            <PopoverDescription>
              Describe your task in natural language.
            </PopoverDescription>
          </PopoverHeader>
          <Field>
            <FieldLabel htmlFor="task" className="sr-only">
              Task Description
            </FieldLabel>
            <Textarea
              id="task"
              placeholder="I need to..."
              className="resize-none"
            />
            <FieldDescription>
              Copilot will open a pull request for review.
            </FieldDescription>
          </Field>
        </PopoverContent>
      </Popover>
    </ButtonGroup>
  )
}

export default function ButtonGroupShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Button Group</h1>
        <p className="text-muted-foreground text-sm mt-1">
          A container that groups related buttons together with consistent styling.
        </p>
      </div>

      {/* Basic */}
      <ShowcaseSection
        title="Basic"
        description="Group related buttons with shared borders and combined rounding."
      >
        <div className="flex flex-col gap-4">
          <ButtonGroup>
            <Button variant="outline">Cut</Button>
            <Button variant="outline">Copy</Button>
            <Button variant="outline">Paste</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button>Save</Button>
            <Button>Cancel</Button>
            <Button>Reset</Button>
          </ButtonGroup>
        </div>
      </ShowcaseSection>

      {/* Orientation */}
      <ShowcaseSection
        title="Orientation"
        description="Use the orientation prop to stack buttons vertically."
      >
        <div className="flex gap-8 items-start">
          <div className="flex flex-col gap-2">
            <p className="text-xs text-muted-foreground font-medium">Horizontal</p>
            <ButtonGroup orientation="horizontal">
              <Button variant="outline">Left</Button>
              <Button variant="outline">Center</Button>
              <Button variant="outline">Right</Button>
            </ButtonGroup>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs text-muted-foreground font-medium">Vertical</p>
            <ButtonGroup orientation="vertical">
              <Button variant="outline">Top</Button>
              <Button variant="outline">Middle</Button>
              <Button variant="outline">Bottom</Button>
            </ButtonGroup>
          </div>
        </div>
      </ShowcaseSection>

      {/* With Icon Buttons */}
      <ShowcaseSection
        title="With Icon Buttons"
        description="Mix text and icon buttons within the same group."
      >
        <div className="flex flex-col gap-4">
          <ButtonGroup>
            <Button variant="outline" size="icon" aria-label="Go Back">
              <ArrowLeftIcon />
            </Button>
            <Button variant="outline">Archive</Button>
            <Button variant="outline">Report</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button variant="outline" size="icon" aria-label="Bold">
              <BoldIcon />
            </Button>
            <Button variant="outline" size="icon" aria-label="Italic">
              <ItalicIcon />
            </Button>
            <Button variant="outline" size="icon" aria-label="Underline">
              <UnderlineIcon />
            </Button>
          </ButtonGroup>
        </div>
      </ShowcaseSection>

      {/* ButtonGroupSeparator */}
      <ShowcaseSection
        title="Separator"
        description="Use ButtonGroupSeparator to visually divide buttons within a group."
      >
        <ButtonGroup>
          <Button variant="secondary" size="sm">
            Copy
          </Button>
          <ButtonGroupSeparator />
          <Button variant="secondary" size="sm">
            Paste
          </Button>
        </ButtonGroup>
      </ShowcaseSection>

      {/* Split */}
      <ShowcaseSection
        title="Split"
        description="A primary action paired with a secondary icon button, separated by a divider."
      >
        <ButtonGroup>
          <Button variant="secondary">Button</Button>
          <ButtonGroupSeparator />
          <Button size="icon" variant="secondary">
            <PlusIcon />
          </Button>
        </ButtonGroup>
      </ShowcaseSection>

      {/* Input */}
      <ShowcaseSection
        title="Input"
        description="Combine an input with a button for search or submit patterns."
      >
        <ButtonGroup>
          <Input placeholder="Search..." />
          <Button variant="outline" aria-label="Search">
            <SearchIcon />
          </Button>
        </ButtonGroup>
      </ShowcaseSection>

      {/* Select */}
      <ShowcaseSection
        title="Select"
        description="Combine a Select with an Input and action button for currency or unit-based inputs."
      >
        <ButtonGroupSelect />
      </ShowcaseSection>

      {/* With Dropdown */}
      <ShowcaseSection
        title="With Dropdown"
        description="Combine a primary action button with a dropdown for secondary options."
      >
        <ButtonGroup>
          <Button variant="outline">Archive</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" aria-label="More Options">
                <MoreHorizontalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <ArchiveIcon />
                  Archive All
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                  <Trash2Icon />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </ButtonGroup>
      </ShowcaseSection>

      {/* Popover */}
      <ShowcaseSection
        title="Popover"
        description="Attach a Popover to an icon button at the end of a group for contextual actions."
      >
        <ButtonGroupPopover />
      </ShowcaseSection>

      {/* Input Group */}
      <ShowcaseSection
        title="Input Group"
        description="Combine a ButtonGroup with an InputGroup for rich chat-style input layouts."
      >
        <ButtonGroupInputGroup />
      </ShowcaseSection>

      {/* Nested Groups */}
      <ShowcaseSection
        title="Nested Groups"
        description="Nest ButtonGroup components for complex layouts with automatic spacing."
      >
        <ButtonGroup>
          <ButtonGroup>
            <Button variant="outline" size="icon">
              <PlusIcon />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <InputGroup>
              <InputGroupInput placeholder="Send a message..." />
              <Tooltip>
                <TooltipTrigger asChild>
                  <InputGroupAddon align="inline-end">
                    <AudioLinesIcon />
                  </InputGroupAddon>
                </TooltipTrigger>
                <TooltipContent>Voice Mode</TooltipContent>
              </Tooltip>
            </InputGroup>
          </ButtonGroup>
        </ButtonGroup>
      </ShowcaseSection>

      {/* Accessibility */}
      <ShowcaseSection
        title="Accessibility"
        description='Use aria-label or aria-labelledby on the ButtonGroup to describe the group purpose. role="group" is applied automatically.'
      >
        <ButtonGroup aria-label="Text formatting options">
          <Button variant="outline" size="icon" aria-label="Bold">
            <BoldIcon />
          </Button>
          <Button variant="outline" size="icon" aria-label="Italic">
            <ItalicIcon />
          </Button>
          <Button variant="outline" size="icon" aria-label="Underline">
            <UnderlineIcon />
          </Button>
        </ButtonGroup>
      </ShowcaseSection>
    </div>
  )
}
