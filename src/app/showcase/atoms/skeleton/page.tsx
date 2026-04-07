"use client"

import * as React from "react"
import { Skeleton } from "@/components/atoms/skeleton"
import { ShowcaseSection } from "@/app/showcase/showcase-section"

export default function SkeletonShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Skeleton</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Use to show a placeholder while content is loading.
        </p>
      </div>

      <ShowcaseSection title="Avatar" description="A basic loading skeleton for a profile.">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Card" description="A loading skeleton for a card component.">
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="List" description="A loading skeleton for a list of items.">
        <div className="w-full max-w-sm space-y-4">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-8 w-8 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-3 w-[150px]" />
              <Skeleton className="h-3 w-[100px]" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-8 w-8 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-3 w-[150px]" />
              <Skeleton className="h-3 w-[100px]" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-8 w-8 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-3 w-[150px]" />
              <Skeleton className="h-3 w-[100px]" />
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Text" description="A loading skeleton out of text lines.">
        <div className="flex w-full max-w-xs flex-col gap-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Form" description="A loading skeleton for a form.">
        <div className="flex w-full max-w-xs flex-col gap-7">
          <div className="flex flex-col gap-3">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-8 w-full" />
          </div>
          <div className="flex flex-col gap-3">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-8 w-full" />
          </div>
          <Skeleton className="h-8 w-24" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Table" description="A loading skeleton for a table.">
        <div className="flex w-full max-w-sm flex-col gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="flex gap-4" key={index}>
              <Skeleton className="h-4 flex-1" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-20" />
            </div>
          ))}
        </div>
      </ShowcaseSection>
    </div>
  )
}
