"use client"
import * as React from "react"
import {
  ArchiveIcon,
  ArrowLeftIcon,
  CalendarPlusIcon,
  ClockIcon,
  ListFilterIcon,
  MailCheckIcon,
  MoreHorizontalIcon,
  TagIcon,
  Trash2Icon,
} from "lucide-react"

import { Button } from "@/components/atoms/button"
import { ButtonGroup } from "@/components/atoms/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu"
import { Spinner } from "@/components/atoms/spinner"
import { ShowcaseSection } from "@/app/showcase/showcase-section"

export default function ButtonShowcasePage() {
  const [label, setLabel] = React.useState("personal")

  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Button</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Displays a button or a component that looks like a button.
        </p>
      </div>

      {/* Variants */}
      <ShowcaseSection
        title="Variants"
        description="All available visual styles for the Button component."
      >
        <div className="flex flex-wrap gap-3">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      </ShowcaseSection>

      {/* Sizes */}
      <ShowcaseSection
        title="Sizes"
        description="All available sizes for the Button component."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </ShowcaseSection>

      {/* Icon sizes */}
      <ShowcaseSection
        title="Icon Buttons"
        description="Square buttons designed for icon-only content."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button size="icon-xs" aria-label="Icon extra small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
          </Button>
          <Button size="icon-sm" aria-label="Icon small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
          </Button>
          <Button size="icon" aria-label="Icon default">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
          </Button>
          <Button size="icon-lg" aria-label="Icon large">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
          </Button>
        </div>
      </ShowcaseSection>

      {/* With icons inline */}
      <ShowcaseSection
        title="With Inline Icons"
        description="Use data-icon to add icons at the start or end of a button."
      >
        <div className="flex flex-wrap gap-3">
          <Button>
            <svg data-icon="inline-start" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z" />
            </svg>
            Back
          </Button>
          <Button>
            Next
            <svg data-icon="inline-end" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.59-6.59c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z" />
            </svg>
          </Button>
          <Button variant="outline">
            <svg data-icon="inline-start" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 13H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1 1-1z M19 13H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1zM12 19c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1s1 .45 1 1v12c0 .55-.45 1-1 1z" />
            </svg>
            Add Item
          </Button>
        </div>
      </ShowcaseSection>

      {/* Loading states */}
      <ShowcaseSection
        title="Loading States"
        description="Combine with a Spinner to indicate in-progress actions."
      >
        <div className="flex flex-wrap gap-3">
          <Button disabled>
            <Spinner data-icon="inline-start" />
            Saving...
          </Button>
          <Button variant="outline" disabled>
            <Spinner data-icon="inline-start" />
            Loading
          </Button>
          <Button variant="destructive" disabled>
            Deleting
            <Spinner data-icon="inline-end" />
          </Button>
          <Button variant="secondary" disabled>
            Processing
            <Spinner data-icon="inline-end" />
          </Button>
        </div>
      </ShowcaseSection>

      {/* Disabled */}
      <ShowcaseSection
        title="Disabled"
        description="Disabled buttons reduce opacity and block pointer events."
      >
        <div className="flex flex-wrap gap-3">
          <Button disabled>Default</Button>
          <Button variant="secondary" disabled>Secondary</Button>
          <Button variant="outline" disabled>Outline</Button>
          <Button variant="ghost" disabled>Ghost</Button>
          <Button variant="destructive" disabled>Destructive</Button>
          <Button variant="link" disabled>Link</Button>
        </div>
      </ShowcaseSection>

      {/* As link */}
      <ShowcaseSection
        title="As Link"
        description="Use asChild to render button styles on an anchor element."
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a href="#">Default</a>
          </Button>
          <Button asChild variant="outline">
            <a href="#">Outline</a>
          </Button>
          <Button asChild variant="secondary">
            <a href="#">Secondary</a>
          </Button>
          <Button asChild variant="link">
            <a href="#">Link</a>
          </Button>
        </div>
      </ShowcaseSection>

      {/* Button Group */}
      <ShowcaseSection
        title="Button Group"
        description="Group related buttons together with shared borders and combined rounding."
      >
        <div className="flex flex-col gap-4">
          {/* Simple group */}
          <ButtonGroup>
            <Button variant="outline">Archive</Button>
            <Button variant="outline">Report</Button>
            <Button variant="outline">Snooze</Button>
          </ButtonGroup>

          {/* With icon button */}
          <ButtonGroup>
            <Button variant="outline" size="icon" aria-label="Go Back">
              <ArrowLeftIcon />
            </Button>
            <Button variant="outline">Archive</Button>
            <Button variant="outline">Report</Button>
          </ButtonGroup>

          {/* With dropdown */}
          <ButtonGroup>
            <Button variant="outline">Snooze</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" aria-label="More Options">
                  <MoreHorizontalIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <MailCheckIcon />
                    Mark as Read
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ArchiveIcon />
                    Archive
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <ClockIcon />
                    Snooze
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CalendarPlusIcon />
                    Add to Calendar
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ListFilterIcon />
                    Add to List
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <TagIcon />
                      Label As...
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuRadioGroup value={label} onValueChange={setLabel}>
                        <DropdownMenuRadioItem value="personal">Personal</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="work">Work</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="other">Other</DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem variant="destructive">
                    <Trash2Icon />
                    Trash
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </ButtonGroup>

          {/* Vertical */}
          <ButtonGroup orientation="vertical">
            <Button variant="outline">Top</Button>
            <Button variant="outline">Middle</Button>
            <Button variant="outline">Bottom</Button>
          </ButtonGroup>
        </div>
      </ShowcaseSection>

      {/* Rounded */}
      <ShowcaseSection
        title="Rounded"
        description="Apply rounded-full for a pill-shaped button style."
      >
        <div className="flex flex-wrap gap-3">
          <Button className="rounded-full">Default</Button>
          <Button className="rounded-full" variant="outline">Outline</Button>
          <Button className="rounded-full" variant="secondary">Secondary</Button>
          <Button className="rounded-full" variant="destructive">Destructive</Button>
        </div>
      </ShowcaseSection>
    </div>
  )
}
