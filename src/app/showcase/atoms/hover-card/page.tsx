"use client"

import { CalendarDaysIcon, LinkIcon, UsersIcon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar"
import { Button } from "@/components/atoms/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/atoms/hover-card"
import { ShowcaseSection } from "@/app/showcase/showcase-section"

export default function HoverCardShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Hover Card</h1>
        <p className="text-muted-foreground text-sm mt-1">
          For sighted users to preview content available behind a link.
        </p>
      </div>

      {/* Basic */}
      <ShowcaseSection
        title="Basic"
        description="A simple hover card that shows a popover when the user hovers over the trigger."
        childrenClassName="flex items-center gap-4"
      >
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@nextjs</Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm">
                  The React Framework – created and maintained by @vercel.
                </p>
                <div className="flex items-center pt-2">
                  <CalendarDaysIcon className="mr-2 h-4 w-4 opacity-70" />
                  <span className="text-xs text-muted-foreground">
                    Joined December 2021
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </ShowcaseSection>

      {/* Trigger Delays */}
      <ShowcaseSection
        title="Trigger Delays"
        description="Use openDelay and closeDelay on HoverCard to control when the card opens and closes."
        childrenClassName="flex flex-wrap items-center gap-4"
      >
        <HoverCard openDelay={0} closeDelay={0}>
          <HoverCardTrigger asChild>
            <Button variant="outline">Instant (0ms)</Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <p className="text-sm">Opens immediately with no delay.</p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard openDelay={300} closeDelay={300}>
          <HoverCardTrigger asChild>
            <Button variant="outline">Default (300ms)</Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <p className="text-sm">Opens and closes after 300ms.</p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard openDelay={700} closeDelay={500}>
          <HoverCardTrigger asChild>
            <Button variant="outline">Slow (700ms / 500ms)</Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <p className="text-sm">Opens after 700ms, closes after 500ms.</p>
          </HoverCardContent>
        </HoverCard>
      </ShowcaseSection>

      {/* Positioning — sides */}
      <ShowcaseSection
        title="Sides"
        description="Use the side prop on HoverCardContent to control placement: top, right, bottom, left."
        childrenClassName="flex flex-wrap items-center gap-4"
      >
        {(["top", "right", "bottom", "left"] as const).map((side) => (
          <HoverCard key={side}>
            <HoverCardTrigger asChild>
              <Button variant="outline" className="capitalize">
                {side}
              </Button>
            </HoverCardTrigger>
            <HoverCardContent side={side}>
              <p className="text-sm">Card positioned on the {side}.</p>
            </HoverCardContent>
          </HoverCard>
        ))}
      </ShowcaseSection>

      {/* Positioning — align */}
      <ShowcaseSection
        title="Alignment"
        description="Use the align prop on HoverCardContent to control alignment: start, center, end."
        childrenClassName="flex flex-wrap items-center gap-4"
      >
        {(["start", "center", "end"] as const).map((align) => (
          <HoverCard key={align}>
            <HoverCardTrigger asChild>
              <Button variant="outline" className="capitalize">
                Align {align}
              </Button>
            </HoverCardTrigger>
            <HoverCardContent align={align}>
              <p className="text-sm">Card aligned to the {align}.</p>
            </HoverCardContent>
          </HoverCard>
        ))}
      </ShowcaseSection>

      {/* User profile card */}
      <ShowcaseSection
        title="User Profile"
        description="A rich hover card showing a user's profile information."
        childrenClassName="flex flex-wrap items-center gap-4"
      >
        {[
          {
            handle: "@shadcn",
            name: "shadcn",
            bio: "Building design systems and open source tools.",
            avatar: "https://github.com/shadcn.png",
            fallback: "CN",
            followers: "12.4k",
            joined: "January 2020",
          },
          {
            handle: "@leerob",
            name: "Lee Robinson",
            bio: "VP of Product at Vercel. Building the future of the web.",
            avatar: "https://github.com/leerob.png",
            fallback: "LR",
            followers: "89.2k",
            joined: "March 2018",
          },
        ].map((user) => (
          <HoverCard key={user.handle}>
            <HoverCardTrigger asChild>
              <Button variant="link" className="p-0 h-auto font-semibold">
                {user.handle}
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage src={user.avatar} alt={user.handle} />
                  <AvatarFallback>{user.fallback}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-semibold">{user.name}</h4>
                  <p className="text-xs text-muted-foreground">{user.handle}</p>
                  <p className="text-sm mt-1">{user.bio}</p>
                  <div className="flex items-center gap-4 pt-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <UsersIcon className="h-3 w-3" />
                      {user.followers} followers
                    </span>
                    <span className="flex items-center gap-1">
                      <CalendarDaysIcon className="h-3 w-3" />
                      {user.joined}
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </ShowcaseSection>

      {/* Link preview */}
      <ShowcaseSection
        title="Link Preview"
        description="Hover over a link to preview the destination content."
        childrenClassName="flex flex-wrap items-center gap-4"
      >
        <HoverCard>
          <HoverCardTrigger asChild>
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium underline underline-offset-4 hover:no-underline transition-all"
            >
              nextjs.org
            </a>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <LinkIcon className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  nextjs.org
                </span>
              </div>
              <h4 className="text-sm font-semibold">Next.js by Vercel</h4>
              <p className="text-sm text-muted-foreground">
                The React Framework for the Web. Used by some of the world&apos;s
                largest companies, Next.js enables you to create high-quality
                web applications with the power of React.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </ShowcaseSection>

      {/* Controlled */}
      <ShowcaseSection
        title="Custom Trigger"
        description="HoverCardTrigger can wrap any focusable element, not just buttons."
        childrenClassName="flex flex-wrap items-center gap-8"
      >
        <HoverCard>
          <HoverCardTrigger asChild>
            <span className="cursor-pointer text-sm font-medium border-b border-dashed border-foreground/50 hover:border-foreground transition-colors">
              Hover this text
            </span>
          </HoverCardTrigger>
          <HoverCardContent>
            <p className="text-sm">
              Any focusable element works as a trigger — links, buttons, spans
              with tabIndex, etc.
            </p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </HoverCardTrigger>
          <HoverCardContent side="right">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold">shadcn</p>
              <p className="text-xs text-muted-foreground">
                An avatar can be a hover card trigger too.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </ShowcaseSection>
    </div>
  )
}
