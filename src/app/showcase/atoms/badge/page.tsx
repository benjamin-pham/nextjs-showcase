"use client"
import { Badge } from "@/components/atoms/badge"
import { Spinner } from "@/components/atoms/spinner"
import { ShowcaseSection } from "@/app/showcase/showcase-section"

export default function BadgeShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Badge</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Displays a badge or a component that looks like a badge.
        </p>
      </div>

      {/* Variants */}
      <ShowcaseSection
        title="Variants"
        description="All available visual styles for the Badge component."
      >
        <div className="flex flex-wrap gap-3">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="ghost">Ghost</Badge>
          <Badge variant="link">Link</Badge>
        </div>
      </ShowcaseSection>

      {/* As link */}
      <ShowcaseSection
        title="As Link"
        description="Use asChild to render the badge as an anchor element."
      >
        <div className="flex flex-wrap gap-3">
          <Badge asChild variant="default">
            <a href="#">Default</a>
          </Badge>
          <Badge asChild variant="secondary">
            <a href="#">Secondary</a>
          </Badge>
          <Badge asChild variant="outline">
            <a href="#">Outline</a>
          </Badge>
        </div>
      </ShowcaseSection>

      {/* With icons */}
      <ShowcaseSection
        title="With Icons"
        description="Badges can contain SVG icons alongside text."
      >
        <div className="flex flex-wrap gap-3">
          <Badge variant="default">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-13h2v6h-2zm0 8h2v2h-2z" />
            </svg>
            Info
          </Badge>
          <Badge variant="destructive">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
            Error
          </Badge>
          <Badge variant="secondary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
            Done
          </Badge>
        </div>
      </ShowcaseSection>

      {/* Notification counts */}
      <ShowcaseSection
        title="Notification Counts"
        description="Common use case for displaying numeric counts."
      >
        <div className="flex flex-wrap gap-3 items-center">
          <Badge>1</Badge>
          <Badge>12</Badge>
          <Badge variant="secondary">99+</Badge>
          <Badge variant="destructive">3</Badge>
          <Badge variant="outline">New</Badge>
        </div>
      </ShowcaseSection>

      {/* Status indicators */}
      <ShowcaseSection
        title="Status Indicators"
        description="Use badges to convey status or category labels."
      >
        <div className="flex flex-wrap gap-3">
          <Badge variant="default">Active</Badge>
          <Badge variant="secondary">Pending</Badge>
          <Badge variant="outline">Draft</Badge>
          <Badge variant="destructive">Archived</Badge>
          <Badge variant="ghost">Inactive</Badge>
        </div>
      </ShowcaseSection>

      {/* With spinner */}
      <ShowcaseSection
        title="With Spinner"
        description="Combine badges with a spinner to indicate loading or in-progress states."
      >
        <div className="flex flex-wrap gap-2">
          <Badge variant="destructive">
            <Spinner data-icon="inline-start" />
            Deleting
          </Badge>
          <Badge variant="secondary">
            Generating
            <Spinner data-icon="inline-end" />
          </Badge>
        </div>
      </ShowcaseSection>

      {/* Custom colors */}
      <ShowcaseSection
        title="Custom Colors"
        description="Override badge colors using Tailwind utility classes for semantic color coding."
      >
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            Blue
          </Badge>
          <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
            Green
          </Badge>
          <Badge className="bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
            Sky
          </Badge>
          <Badge className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
            Purple
          </Badge>
          <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
            Red
          </Badge>
        </div>
      </ShowcaseSection>
    </div>
  )
}
