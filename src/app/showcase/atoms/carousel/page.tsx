"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/atoms/carousel"
import { Card, CardContent } from "@/components/atoms/card"
import { ShowcaseSection } from "@/app/showcase/showcase-section"

export default function CarouselShowcasePage() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Carousel</h1>
        <p className="text-muted-foreground text-sm mt-1">
          A carousel with motion and swipe built using Embla.
        </p>
      </div>

      {/* Default */}
      <ShowcaseSection
        title="Default"
        description="Basic horizontal carousel with previous/next controls."
        childrenClassName="max-w-sm"
      >
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </ShowcaseSection>

      {/* Sizes */}
      <ShowcaseSection
        title="Sizes"
        description="Use basis-* classes on CarouselItem to control how many slides are visible."
        childrenClassName="max-w-sm"
      >
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-2">
                    <span className="text-2xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </ShowcaseSection>

      {/* Spacing */}
      <ShowcaseSection
        title="Spacing"
        description="Adjust pl-* on CarouselItem and the negative margin on CarouselContent for custom spacing."
        childrenClassName="max-w-sm"
      >
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pl-1 basis-1/3">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-2">
                    <span className="text-2xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </ShowcaseSection>

      {/* Orientation */}
      <ShowcaseSection
        title="Orientation"
        description='Use orientation="vertical" for a vertically scrolling carousel.'
        childrenClassName="max-w-xs"
      >
        <Carousel orientation="vertical" className="w-full max-w-xs">
          <CarouselContent className="-mt-1 h-[200px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pt-1 basis-1/3">
                <Card>
                  <CardContent className="flex items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </ShowcaseSection>

      {/* API — dot indicators */}
      <ShowcaseSection
        title="API"
        description="Use setApi to get the carousel API and track the current slide."
        childrenClassName="max-w-sm"
      >
        <div className="flex flex-col items-center gap-3">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <p className="text-sm text-muted-foreground">
            Slide {current} of {count}
          </p>
        </div>
      </ShowcaseSection>
    </div>
  )
}
