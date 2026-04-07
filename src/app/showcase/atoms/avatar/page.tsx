"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/atoms/avatar"
import { CheckIcon, PlusIcon } from "lucide-react"
import { Button } from "@/components/atoms/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu"
import { ShowcaseSection } from "@/app/showcase/showcase-section"

export default function AvatarShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Avatar</h1>
        <p className="text-muted-foreground text-sm mt-1">
          An image element with a fallback for representing the user.
        </p>
      </div>

      {/* Basic */}
      <ShowcaseSection
        childrenClassName="flex flex-wrap items-center gap-4"
        title="Basic"
        description="Avatar with an image and a text fallback."
      >
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </ShowcaseSection>

      {/* Fallback */}
      <ShowcaseSection
        childrenClassName="flex flex-wrap items-center gap-4"
        title="Fallback"
        description="When the image fails to load, the fallback text is shown."
      >
        <Avatar>
          <AvatarImage src="/broken-url.png" alt="Broken" />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>MN</AvatarFallback>
        </Avatar>
      </ShowcaseSection>

      {/* Sizes */}
      <ShowcaseSection
        childrenClassName="flex flex-wrap items-center gap-4"
        title="Sizes"
        description="Three sizes: sm, default, and lg."
      >
        <Avatar size="sm">
          <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar size="default">
          <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </ShowcaseSection>

      {/* Badge — status dot */}
      <ShowcaseSection
        childrenClassName="flex flex-wrap items-center gap-4"
        title="With Badge"
        description="AvatarBadge adds a status indicator at the bottom-right."
      >
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
          <AvatarFallback>CN</AvatarFallback>
          <AvatarBadge className="bg-green-500" />
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
          <AvatarFallback>CN</AvatarFallback>
          <AvatarBadge className="bg-yellow-500" />
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
          <AvatarFallback>CN</AvatarFallback>
          <AvatarBadge className="bg-destructive" />
        </Avatar>
      </ShowcaseSection>

      {/* Badge — with icon */}
      <ShowcaseSection
        childrenClassName="flex flex-wrap items-center gap-4"
        title="Badge with Icon"
        description="Icons can be placed inside the badge for richer status indicators."
      >
        <Avatar size="lg">
          <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
          <AvatarFallback>CN</AvatarFallback>
          <AvatarBadge className="bg-green-500">
            <CheckIcon />
          </AvatarBadge>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>PM</AvatarFallback>
          <AvatarBadge className="bg-primary">
            <PlusIcon />
          </AvatarBadge>
        </Avatar>
      </ShowcaseSection>

      {/* Group */}
      <ShowcaseSection
        childrenClassName="flex flex-wrap items-center gap-4"
        title="Avatar Group"
        description="Stack multiple avatars together with overlapping rings."
      >
        <AvatarGroup>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/leerob.png" alt="leerob" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </ShowcaseSection>

      {/* Group with count */}
      <ShowcaseSection
        childrenClassName="flex flex-wrap items-center gap-4"
        title="Group with Count"
        description="AvatarGroupCount shows how many additional avatars are hidden."
      >
        <AvatarGroup>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>+5</AvatarGroupCount>
        </AvatarGroup>
      </ShowcaseSection>

      {/* Group with icon count */}
      <ShowcaseSection
        childrenClassName="flex flex-wrap items-center gap-4"
        title="Avatar Group with Icon"
        description="AvatarGroupCount có thể chứa icon thay vì số."
      >
        <AvatarGroup className="grayscale">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
            <AvatarFallback>ML</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>
            <PlusIcon />
          </AvatarGroupCount>
        </AvatarGroup>
      </ShowcaseSection>

      {/* Dropdown */}
      <ShowcaseSection
        childrenClassName="flex flex-wrap items-center gap-4"
        title="Dropdown"
        description="Avatar dùng làm trigger cho DropdownMenu."
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-32">
            <DropdownMenuGroup>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ShowcaseSection>

      {/* Group sizes */}
      <ShowcaseSection
        childrenClassName="flex flex-wrap items-center gap-4"
        title="Group Sizes"
        description="Groups adapt to the size prop on child Avatar components."
      >
        <AvatarGroup>
          <Avatar size="sm">
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar size="sm">
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>+3</AvatarGroupCount>
        </AvatarGroup>

        <AvatarGroup>
          <Avatar size="lg">
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>+3</AvatarGroupCount>
        </AvatarGroup>
      </ShowcaseSection>
    </div>
  )
}
