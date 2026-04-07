"use client";

import React from "react";
import {
  Item,
  ItemGroup,
  ItemSeparator,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemHeader,
  ItemFooter,
} from "@/components/atoms/item";
import { Button } from "@/components/atoms/button";
import {
  BadgeCheck,
  Inbox,
  Mail,
  ShieldAlert,
  Home,
  ChevronRight,
  Plus,
  ExternalLink,
} from "lucide-react";

export default function ItemShowcase() {
  return (
    <div className="flex flex-col gap-10 p-8 max-w-3xl mx-auto w-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Item</h1>
        <p className="text-muted-foreground">
          A versatile component for displaying content with media, title,
          description, and actions.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Basic Usage</h2>
        <Item variant="outline">
          <ItemMedia variant="icon">
            <BadgeCheck className="text-green-500" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Your profile has been verified.</ItemTitle>
            <ItemDescription>
              Verified accounts have access to more features.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button size="sm">Action</Button>
          </ItemActions>
        </Item>
      </div>

      {/* Variants */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Variants</h2>
        <div className="flex flex-col gap-4">
          <Item variant="default" className="bg-background border shadow-sm">
            <ItemMedia variant="icon">
              <Inbox />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Default Variant</ItemTitle>
              <ItemDescription>
                Transparent background with no border (shown in a container).
              </ItemDescription>
            </ItemContent>
          </Item>

          <Item variant="outline">
            <ItemMedia variant="icon">
              <Mail />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Outline Variant</ItemTitle>
              <ItemDescription>
                Outlined style with a visible border.
              </ItemDescription>
            </ItemContent>
          </Item>

          <Item variant="muted">
            <ItemMedia variant="icon">
              <Mail />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Muted Variant</ItemTitle>
              <ItemDescription>
                Muted background for secondary content.
              </ItemDescription>
            </ItemContent>
          </Item>
        </div>
      </div>

      {/* Sizes */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Sizes</h2>
        <div className="flex flex-col gap-4">
          <Item size="default" variant="outline">
            <ItemMedia variant="icon">
              <Inbox />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Default Size</ItemTitle>
              <ItemDescription>
                The standard size for most use cases.
              </ItemDescription>
            </ItemContent>
          </Item>

          <Item size="sm" variant="outline">
            <ItemMedia variant="icon">
              <Inbox />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Small Size</ItemTitle>
              <ItemDescription>
                A compact size for dense layouts.
              </ItemDescription>
            </ItemContent>
          </Item>

          <Item size="xs" variant="outline">
            <ItemMedia variant="icon">
              <Inbox />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Extra Small Size</ItemTitle>
              <ItemDescription>The most compact size available.</ItemDescription>
            </ItemContent>
          </Item>
        </div>
      </div>

      {/* Media Varieties */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Media Types</h2>

        <h3 className="text-sm font-medium text-muted-foreground mt-2">Icon</h3>
        <Item variant="outline">
          <ItemMedia variant="icon">
            <ShieldAlert className="text-destructive" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>New login detected</ItemTitle>
            <ItemDescription>
              New login detected from unknown device.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button size="sm" variant="outline">
              Review
            </Button>
          </ItemActions>
        </Item>

        <h3 className="text-sm font-medium text-muted-foreground mt-2">
          Image / Avatar
        </h3>
        <Item variant="outline">
          <ItemMedia variant="image">
            <img src="https://github.com/shadcn.png" alt="Avatar" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>shadcn</ItemTitle>
            <ItemDescription>Last seen 5 months ago</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button size="sm" variant="secondary">
              <Plus className="size-4 mr-1" /> Invite
            </Button>
          </ItemActions>
        </Item>
      </div>

      {/* Groups */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Item Group & Separator</h2>
        <ItemGroup className="border rounded-2xl p-2 bg-muted/20">
          <Item variant="default" className="hover:bg-muted/50 transition-colors">
            <ItemMedia variant="image">
              <img src="https://github.com/shadcn.png" alt="Avatar" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>shadcn</ItemTitle>
              <ItemDescription>shadcn@vercel.com</ItemDescription>
            </ItemContent>
          </Item>
          <ItemSeparator className="mx-2" />
          <Item variant="default" className="hover:bg-muted/50 transition-colors">
            <ItemMedia variant="image">
              <img src="https://github.com/vercel.png" alt="Avatar" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Vercel</ItemTitle>
              <ItemDescription>team@vercel.com</ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>
      </div>

      {/* Header and Footer */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Header & Footer</h2>
        <Item variant="outline">
          <ItemHeader>
            <div className="text-sm font-semibold">Task Overview</div>
            <div className="text-xs text-muted-foreground">
              Updated just now
            </div>
          </ItemHeader>

          <ItemMedia variant="icon">
            <Inbox />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Everyday tasks and UI generation</ItemTitle>
            <ItemDescription>
              Advanced thinking or reasoning. Open Source model for everyone.
            </ItemDescription>
          </ItemContent>

          <ItemFooter>
            <Button size="sm" variant="secondary" className="w-full">
              View Tasks
            </Button>
          </ItemFooter>
        </Item>
      </div>

      {/* Link Option */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">As Link (asChild)</h2>
        <Item asChild variant="outline">
          <a href="#" className="cursor-pointer hover:bg-muted/50">
            <ItemMedia variant="icon">
              <Home />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Dashboard</ItemTitle>
              <ItemDescription>
                Overview of your account and activity.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <ChevronRight className="size-4 text-muted-foreground" />
            </ItemActions>
          </a>
        </Item>

        <Item asChild variant="outline">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:bg-muted/50"
          >
            <ItemContent>
              <ItemTitle>External resource</ItemTitle>
              <ItemDescription>
                Opens in a new tab with security attributes.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <ExternalLink className="size-4 text-muted-foreground" />
            </ItemActions>
          </a>
        </Item>
      </div>
    </div>
  );
}
