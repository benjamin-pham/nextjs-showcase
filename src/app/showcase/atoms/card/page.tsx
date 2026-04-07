"use client"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/atoms/card"
import { ShowcaseSection } from "@/app/showcase/showcase-section"
import { Button } from "@/components/atoms/button"

export default function CardShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Card</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Displays a card with header, content, and footer.
        </p>
      </div>

      {/* Basic */}
      <ShowcaseSection
        title="Basic"
        description="A simple card with header and content."
        childrenClassName="max-w-sm"
      >
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description goes here.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">This is the card content area.</p>
          </CardContent>
        </Card>
      </ShowcaseSection>

      {/* With Footer */}
      <ShowcaseSection
        title="With Footer"
        description="Card with header, content, and action buttons in the footer."
        childrenClassName="max-w-sm"
      >
        <Card>
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Fill in the details below to set up your new project and get started.
            </p>
          </CardContent>
          <CardFooter className="border-t gap-2 justify-end">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      </ShowcaseSection>

      {/* With Action */}
      <ShowcaseSection
        title="With Card Action"
        description="CardAction renders in the top-right corner of the header."
        childrenClassName="max-w-sm"
      >
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
            <CardAction>
              <Button size="sm" variant="outline">Mark all read</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Check your inbox to review recent notifications.
            </p>
          </CardContent>
        </Card>
      </ShowcaseSection>

      {/* Small size */}
      <ShowcaseSection
        title="Small Size"
        description='Use size="sm" for a more compact card layout.'
        childrenClassName="max-w-sm"
      >
        <Card size="sm">
          <CardHeader>
            <CardTitle>Compact Card</CardTitle>
            <CardDescription>Reduced padding for dense UIs.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">Smaller gap and padding throughout.</p>
          </CardContent>
          <CardFooter className="border-t gap-2 justify-end">
            <Button size="sm" variant="outline">Cancel</Button>
            <Button size="sm">Save</Button>
          </CardFooter>
        </Card>
      </ShowcaseSection>

      {/* With Image */}
      <ShowcaseSection
        title="With Image"
        description="Place an img as the first child of Card for automatic rounded top corners."
        childrenClassName="max-w-sm"
      >
        <Card>
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
            alt="Mountain landscape"
            className="w-full h-40 object-cover"
          />
          <CardHeader>
            <CardTitle>Mountain Escape</CardTitle>
            <CardDescription>A serene view from the summit.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Explore breathtaking mountain trails and enjoy the peace of nature.
            </p>
          </CardContent>
          <CardFooter className="border-t gap-2">
            <Button variant="outline" className="w-full">Learn more</Button>
          </CardFooter>
        </Card>
      </ShowcaseSection>

      {/* Grid layout */}
      <ShowcaseSection
        title="Grid Layout"
        description="Cards used in a responsive grid."
        childrenClassName="max-w-2xl"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: "Total Revenue", value: "$45,231.89", change: "+20.1% from last month" },
            { title: "Subscriptions", value: "+2350", change: "+180.1% from last month" },
            { title: "Sales", value: "+12,234", change: "+19% from last month" },
            { title: "Active Now", value: "+573", change: "+201 since last hour" },
          ].map((item) => (
            <Card key={item.title} size="sm">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.change}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{item.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ShowcaseSection>
    </div>
  )
}
