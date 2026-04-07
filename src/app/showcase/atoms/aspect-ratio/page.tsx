"use client"
import { AspectRatio } from "@/components/atoms/aspect-ratio"
import Image from "next/image"
import { ShowcaseSection } from "@/app/showcase/showcase-section"

export default function AspectRatioShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Aspect Ratio</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Displays content within a desired ratio.
        </p>
      </div>

      {/* 16:9 */}
      <ShowcaseSection
        title="16 / 9"
        description="Widescreen ratio — common for video thumbnails and hero images."
      >
        <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="A wide landscape photo"
            fill
            className="object-cover"
          />
        </AspectRatio>
      </ShowcaseSection>

      {/* 4:3 */}
      <ShowcaseSection
        title="4 / 3"
        description="Classic photo ratio — slightly taller than widescreen."
      >
        <AspectRatio ratio={4 / 3} className="bg-muted rounded-md overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&dpr=2&q=80"
            alt="A mountain landscape"
            fill
            className="object-cover"
          />
        </AspectRatio>
      </ShowcaseSection>

      {/* 1:1 — Square */}
      <ShowcaseSection
        title="1 / 1"
        description="Square ratio — useful for profile pictures or thumbnails."
      >
        <div className="w-48">
          <AspectRatio ratio={1 / 1} className="bg-muted rounded-md overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
              alt="A square image"
              fill
              className="object-cover"
            />
          </AspectRatio>
        </div>
      </ShowcaseSection>

      {/* 9:16 — Portrait */}
      <ShowcaseSection
        title="9 / 16"
        description="Portrait / story ratio — typical for mobile-first content."
      >
        <div className="w-40">
          <AspectRatio ratio={9 / 16} className="bg-muted rounded-md overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1604537466608-109fa2f16c3b?w=400&dpr=2&q=80"
              alt="A portrait photo"
              fill
              className="object-cover"
            />
          </AspectRatio>
        </div>
      </ShowcaseSection>

      {/* Placeholder / no image */}
      <ShowcaseSection
        title="Placeholder"
        description="AspectRatio can wrap any content, not just images."
      >
        <AspectRatio ratio={16 / 9} className="bg-muted rounded-md flex items-center justify-center">
          <span className="text-muted-foreground text-sm">16 / 9 placeholder</span>
        </AspectRatio>
      </ShowcaseSection>
    </div>
  )
}
