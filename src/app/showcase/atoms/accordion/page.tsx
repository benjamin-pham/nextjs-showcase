import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atoms/accordion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card"
import { ShowcaseSection } from "@/app/showcase/showcase-section"

const faqItems = [
  {
    value: "item-1",
    question: "Is it accessible?",
    answer:
      "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    value: "item-2",
    question: "Is it styled?",
    answer:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
  },
  {
    value: "item-3",
    question: "Is it animated?",
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
]


export default function AccordionShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Accordion</h1>
        <p className="text-muted-foreground text-sm mt-1">
          A vertically stacked set of interactive headings that each reveal a section of content.
        </p>
      </div>

      {/* Default — single, collapsible */}
      <ShowcaseSection
        title="Default"
        description="Single type, collapsible. Only one item can be open at a time."
      >
        <Accordion type="single" collapsible defaultValue="item-1">
          {faqItems.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ShowcaseSection>

      {/* Multiple */}
      <ShowcaseSection
        title="Multiple"
        description={'type="multiple" — multiple sections can be expanded simultaneously.'}
      >
        <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
          {faqItems.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ShowcaseSection>

      {/* Borders */}
      <ShowcaseSection
        title="Borders"
        description="Add border class to Accordion and border-b last:border-b-0 to AccordionItem."
      >
        <Accordion type="single" collapsible className="border rounded-md">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="border-b last:border-b-0 px-2"
            >
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ShowcaseSection>

      {/* Disabled */}
      <ShowcaseSection
        title="Disabled"
        description="Apply the disabled prop to an AccordionItem to prevent interaction."
      >
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" disabled>
            <AccordionTrigger>Is it styled? (disabled)</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ShowcaseSection>

      {/* Card Layout */}
      <ShowcaseSection
        title="Card Layout"
        description="Wrap the Accordion in a Card for a contained, elevated style."
      >
        <Card>
          <CardHeader>
            <CardTitle>FAQ</CardTitle>
            <CardDescription>Frequently asked questions</CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <Accordion type="single" collapsible defaultValue="item-1">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="px-6"
                >
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </ShowcaseSection>
    </div>
  )
}
