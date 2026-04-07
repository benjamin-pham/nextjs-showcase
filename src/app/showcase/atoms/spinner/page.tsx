import { ArrowUpIcon } from "lucide-react"

import { Spinner } from "@/components/atoms/spinner"
import { Button } from "@/components/atoms/button"
import { Badge } from "@/components/atoms/badge"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/atoms/input-group"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/atoms/empty"
import { ShowcaseSection } from "@/app/showcase/showcase-section"

export default function SpinnerShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Spinner</h1>
        <p className="text-muted-foreground text-sm mt-1">
          An animated loading indicator built on Lucide's Loader2 icon.
        </p>
      </div>

      {/* Default */}
      <ShowcaseSection
        title="Default"
        description="The default spinner with base size and animation."
      >
        <Spinner />
      </ShowcaseSection>

      {/* Sizes */}
      <ShowcaseSection
        title="Sizes"
        description="Control the size via className using Tailwind's size-* utilities."
      >
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-3" />
            <span className="text-muted-foreground text-xs">size-3</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-4" />
            <span className="text-muted-foreground text-xs">size-4 (default)</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-6" />
            <span className="text-muted-foreground text-xs">size-6</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-8" />
            <span className="text-muted-foreground text-xs">size-8</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-12" />
            <span className="text-muted-foreground text-xs">size-12</span>
          </div>
        </div>
      </ShowcaseSection>

      {/* Colors */}
      <ShowcaseSection
        title="Colors"
        description="Apply Tailwind text color utilities to change the spinner color."
      >
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-6" />
            <span className="text-muted-foreground text-xs">default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-6 text-primary" />
            <span className="text-muted-foreground text-xs">primary</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-6 text-destructive" />
            <span className="text-muted-foreground text-xs">destructive</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-6 text-green-500" />
            <span className="text-muted-foreground text-xs">green-500</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-6 text-blue-500" />
            <span className="text-muted-foreground text-xs">blue-500</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-6 text-muted-foreground" />
            <span className="text-muted-foreground text-xs">muted-foreground</span>
          </div>
        </div>
      </ShowcaseSection>

      {/* With Label */}
      <ShowcaseSection
        title="With Label"
        description="Pair the spinner with descriptive text for loading states."
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Spinner />
            <span className="text-sm">Loading...</span>
          </div>
          <div className="flex items-center gap-2">
            <Spinner className="size-5" />
            <span className="text-sm text-muted-foreground">Fetching data...</span>
          </div>
          <div className="flex items-center gap-2">
            <Spinner className="size-6 text-primary" />
            <span className="text-sm font-medium">Processing your request</span>
          </div>
        </div>
      </ShowcaseSection>

      {/* Inside Buttons */}
      <ShowcaseSection
        title="Inside Buttons"
        description="Embed the spinner in a Button to indicate an in-progress action."
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

      {/* Input Group */}
      <ShowcaseSection
        title="Input Group"
        description="Embed the spinner inside an InputGroup to indicate loading or validation states."
      >
        <div className="flex w-full max-w-md flex-col gap-4">
          <InputGroup>
            <InputGroupInput placeholder="Send a message..." disabled />
            <InputGroupAddon align="inline-end">
              <Spinner />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupTextarea placeholder="Send a message..." disabled />
            <InputGroupAddon align="block-end">
              <Spinner /> Validating...
              <InputGroupButton className="ml-auto" variant="default">
                <ArrowUpIcon />
                <span className="sr-only">Send</span>
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </ShowcaseSection>

      {/* Empty */}
      <ShowcaseSection
        title="Empty"
        description="Use the spinner inside an Empty state to indicate a loading or processing state."
      >
        <Empty className="w-full">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Spinner />
            </EmptyMedia>
            <EmptyTitle>Processing your request</EmptyTitle>
            <EmptyDescription>
              Please wait while we process your request. Do not refresh the page.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button variant="outline" size="sm">
              Cancel
            </Button>
          </EmptyContent>
        </Empty>
      </ShowcaseSection>

      {/* Badge */}
      <ShowcaseSection
        title="Badge"
        description="Embed the spinner inside a Badge to indicate live status."
      >
        <div className="flex items-center gap-4 [--radius:1.2rem]">
          <Badge>
            <Spinner data-icon="inline-start" />
            Syncing
          </Badge>
          <Badge variant="secondary">
            <Spinner data-icon="inline-start" />
            Updating
          </Badge>
          <Badge variant="outline">
            <Spinner data-icon="inline-start" />
            Processing
          </Badge>
        </div>
      </ShowcaseSection>

      {/* Full Page Loading */}
      <ShowcaseSection
        title="Centered Loading"
        description="Center the spinner in a container for full-section loading states."
      >
        <div className="relative h-32 w-full rounded-md border flex items-center justify-center bg-muted/30">
          <div className="flex flex-col items-center gap-3">
            <Spinner className="size-8 text-primary" />
            <span className="text-sm text-muted-foreground">Loading content...</span>
          </div>
        </div>
      </ShowcaseSection>
    </div>
  )
}
