"use client"

import * as React from "react"
import { ScrollArea, ScrollBar } from "@/components/atoms/scroll-area"
import { ShowcaseSection } from "@/app/showcase/showcase-section"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export interface Artwork {
  artist: string
  art: string
}

export const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
]

export default function ScrollAreaShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Scroll Area</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Augments native scroll functionality for custom, cross-browser styling.
        </p>
      </div>

      {/* Vertical */}
      <ShowcaseSection
        title="Vertical"
        description="A vertical scroll area."
      >
        <ScrollArea className="h-72 w-48 rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
            {tags.map((tag) => (
              <div key={tag}>
                <div className="text-sm py-1">
                  {tag}
                </div>
                <div className="my-1 h-px bg-border/50" />
              </div>
            ))}
          </div>
        </ScrollArea>
      </ShowcaseSection>

      {/* Horizontal */}
      <ShowcaseSection
        title="Horizontal"
        description="A horizontal scroll area. Set orientation to horizontal on the ScrollBar component."
      >
        <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4">
            {works.map((artwork) => (
              <figure key={artwork.artist} className="shrink-0">
                <div className="overflow-hidden rounded-md bg-muted" style={{ width: 150, height: 200 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={artwork.art}
                    alt={`Photo by ${artwork.artist}`}
                    className="aspect-[3/4] h-fit w-fit object-cover"
                    width={150}
                    height={200}
                  />
                </div>
                <figcaption className="pt-2 text-xs text-muted-foreground">
                  Photo by{" "}
                  <span className="font-semibold text-foreground">
                    {artwork.artist}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </ShowcaseSection>
    </div>
  )
}
