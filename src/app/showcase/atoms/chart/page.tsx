"use client"

import * as React from "react"
import {
  Bar, BarChart, CartesianGrid, XAxis, YAxis,
  Line, LineChart,
  Area, AreaChart,
  Pie, PieChart, Cell, Label,
  RadialBar, RadialBarChart, PolarRadiusAxis,
  Scatter, ScatterChart, ZAxis,
  Radar, RadarChart, PolarGrid, PolarAngleAxis,
  Funnel, FunnelChart, LabelList,
  ComposedChart,
  Treemap,
  Sankey,
  SunburstChart,
  ReferenceLine,
  ReferenceArea,
  ReferenceDot,
  Brush,
  ErrorBar,
} from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/atoms/chart"
import { ShowcaseSection } from "@/app/showcase/showcase-section"

// ── Bar Chart ──────────────────────────────────────────────────────────────
const barData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73,  mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
]
const barConfig: ChartConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile:  { label: "Mobile",  color: "var(--chart-2)" },
}

// ── Horizontal Bar Chart ───────────────────────────────────────────────────
const hBarData = [
  { category: "A", value: 400 },
  { category: "B", value: 300 },
  { category: "C", value: 520 },
  { category: "D", value: 180 },
  { category: "E", value: 290 },
]
const hBarConfig: ChartConfig = {
  value: { label: "Value", color: "var(--chart-1)" },
}

// ── Line Chart ─────────────────────────────────────────────────────────────
const lineData = [
  { month: "Jan", revenue: 4000, expenses: 2400 },
  { month: "Feb", revenue: 3000, expenses: 1398 },
  { month: "Mar", revenue: 2000, expenses: 9800 },
  { month: "Apr", revenue: 2780, expenses: 3908 },
  { month: "May", revenue: 1890, expenses: 4800 },
  { month: "Jun", revenue: 2390, expenses: 3800 },
]
const lineConfig: ChartConfig = {
  revenue:  { label: "Revenue",  color: "var(--chart-1)" },
  expenses: { label: "Expenses", color: "var(--chart-2)" },
}

// ── Area Chart ─────────────────────────────────────────────────────────────
const areaData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73,  mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
]
const areaConfig: ChartConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile:  { label: "Mobile",  color: "var(--chart-2)" },
}

// ── Pie Chart ──────────────────────────────────────────────────────────────
const pieData = [
  { browser: "Chrome",  visitors: 275 },
  { browser: "Safari",  visitors: 200 },
  { browser: "Firefox", visitors: 187 },
  { browser: "Edge",    visitors: 173 },
  { browser: "Other",   visitors: 90  },
]
const pieConfig: ChartConfig = {
  visitors: { label: "Visitors" },
  Chrome:   { label: "Chrome",  color: "var(--chart-1)" },
  Safari:   { label: "Safari",  color: "var(--chart-2)" },
  Firefox:  { label: "Firefox", color: "var(--chart-3)" },
  Edge:     { label: "Edge",    color: "var(--chart-4)" },
  Other:    { label: "Other",   color: "var(--chart-5)" },
}

// ── Radial Bar Chart ───────────────────────────────────────────────────────
const radialData = [{ desktop: 1260, mobile: 570 }]
const radialConfig: ChartConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile:  { label: "Mobile",  color: "var(--chart-2)" },
}

// ── Scatter Chart ──────────────────────────────────────────────────────────
const scatterData = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
  { x: 200, y: 150, z: 320 },
  { x: 90,  y: 350, z: 150 },
  { x: 160, y: 180, z: 360 },
  { x: 130, y: 320, z: 240 },
]
const scatterConfig: ChartConfig = {
  data: { label: "Data Points", color: "var(--chart-1)" },
}

// ── Radar Chart ────────────────────────────────────────────────────────────
const radarData = [
  { skill: "Math",    alice: 120, bob: 110 },
  { skill: "English", alice: 98,  bob: 130 },
  { skill: "Physics", alice: 86,  bob: 130 },
  { skill: "History", alice: 99,  bob: 100 },
  { skill: "Art",     alice: 85,  bob: 90  },
  { skill: "Music",   alice: 65,  bob: 85  },
]
const radarConfig: ChartConfig = {
  alice: { label: "Alice", color: "var(--chart-1)" },
  bob:   { label: "Bob",   color: "var(--chart-2)" },
}

// ── Funnel Chart ───────────────────────────────────────────────────────────
const funnelData = [
  { name: "Sent",     value: 5000, fill: "var(--chart-1)" },
  { name: "Opened",   value: 3200, fill: "var(--chart-2)" },
  { name: "Clicked",  value: 1800, fill: "var(--chart-3)" },
  { name: "Signed up",value: 900,  fill: "var(--chart-4)" },
  { name: "Converted",value: 380,  fill: "var(--chart-5)" },
]
const funnelConfig: ChartConfig = {
  value: { label: "Count" },
}

// ── Composed Chart ─────────────────────────────────────────────────────────
const composedData = [
  { month: "Jan", bar: 400, line: 240, area: 180 },
  { month: "Feb", bar: 300, line: 139, area: 220 },
  { month: "Mar", bar: 520, line: 980, area: 300 },
  { month: "Apr", bar: 180, line: 390, area: 250 },
  { month: "May", bar: 290, line: 480, area: 210 },
  { month: "Jun", bar: 340, line: 380, area: 290 },
]
const composedConfig: ChartConfig = {
  bar:  { label: "Bar",  color: "var(--chart-1)" },
  line: { label: "Line", color: "var(--chart-2)" },
  area: { label: "Area", color: "var(--chart-3)" },
}

// ── Stacked Bar Chart ──────────────────────────────────────────────────────
const stackedBarData = [
  { month: "Jan", a: 120, b: 80,  c: 60 },
  { month: "Feb", a: 180, b: 100, c: 80 },
  { month: "Mar", a: 150, b: 120, c: 90 },
  { month: "Apr", a: 90,  b: 60,  c: 110 },
  { month: "May", a: 200, b: 140, c: 70 },
  { month: "Jun", a: 160, b: 90,  c: 100 },
]
const stackedBarConfig: ChartConfig = {
  a: { label: "Series A", color: "var(--chart-1)" },
  b: { label: "Series B", color: "var(--chart-2)" },
  c: { label: "Series C", color: "var(--chart-3)" },
}

// ── Pie Chart (simple) ─────────────────────────────────────────────────────
const simplePieData = [
  { name: "Q1", value: 400 },
  { name: "Q2", value: 300 },
  { name: "Q3", value: 500 },
  { name: "Q4", value: 200 },
]
const simplePieConfig: ChartConfig = {
  Q1: { label: "Q1", color: "var(--chart-1)" },
  Q2: { label: "Q2", color: "var(--chart-2)" },
  Q3: { label: "Q3", color: "var(--chart-3)" },
  Q4: { label: "Q4", color: "var(--chart-4)" },
}

// ── Sankey ─────────────────────────────────────────────────────────────────
const sankeyData = {
  nodes: [
    { name: "Organic" },
    { name: "Paid" },
    { name: "Social" },
    { name: "Referral" },
    { name: "Homepage" },
    { name: "Blog" },
    { name: "Signup" },
    { name: "Purchase" },
  ],
  links: [
    { source: 0, target: 4, value: 800 },
    { source: 1, target: 4, value: 600 },
    { source: 2, target: 5, value: 400 },
    { source: 3, target: 5, value: 200 },
    { source: 4, target: 6, value: 900 },
    { source: 5, target: 6, value: 400 },
    { source: 6, target: 7, value: 700 },
  ],
}

// ── Sunburst Chart ─────────────────────────────────────────────────────────
const sunburstData = {
  name: "root",
  children: [
    {
      name: "Frontend",
      children: [
        { name: "React",   value: 400 },
        { name: "Vue",     value: 200 },
        { name: "Svelte",  value: 150 },
      ],
    },
    {
      name: "Backend",
      children: [
        { name: "Node",    value: 300 },
        { name: "Go",      value: 250 },
        { name: "Python",  value: 200 },
      ],
    },
    {
      name: "Mobile",
      children: [
        { name: "iOS",     value: 220 },
        { name: "Android", value: 180 },
      ],
    },
  ],
}

// ── ReferenceLine / ReferenceArea / ReferenceDot ──────────────────────────
const refLineData = [
  { month: "Jan", value: 40 },
  { month: "Feb", value: 80 },
  { month: "Mar", value: 55 },
  { month: "Apr", value: 130 },
  { month: "May", value: 95 },
  { month: "Jun", value: 150 },
  { month: "Jul", value: 70 },
]
const refLineConfig: ChartConfig = {
  value: { label: "Value", color: "var(--chart-1)" },
}

// ── Brush ──────────────────────────────────────────────────────────────────
const brushData = Array.from({ length: 20 }, (_, i) => ({
  day: `D${i + 1}`,
  sales: Math.floor(Math.random() * 400 + 100),
}))
const brushConfig: ChartConfig = {
  sales: { label: "Sales", color: "var(--chart-2)" },
}

// ── ErrorBar ───────────────────────────────────────────────────────────────
const errorBarData = [
  { name: "A", value: 200, error: 30 },
  { name: "B", value: 350, error: 50 },
  { name: "C", value: 150, error: 20 },
  { name: "D", value: 420, error: 60 },
  { name: "E", value: 280, error: 35 },
]
const errorBarConfig: ChartConfig = {
  value: { label: "Value", color: "var(--chart-3)" },
}

// ── Step Line ──────────────────────────────────────────────────────────────
const stepLineData = [
  { time: "00:00", temp: 18 },
  { time: "04:00", temp: 16 },
  { time: "08:00", temp: 20 },
  { time: "12:00", temp: 27 },
  { time: "16:00", temp: 25 },
  { time: "20:00", temp: 22 },
  { time: "24:00", temp: 19 },
]
const stepLineConfig: ChartConfig = {
  temp: { label: "Temperature (°C)", color: "var(--chart-4)" },
}

// ── Area Gradient ──────────────────────────────────────────────────────────
const gradientAreaData = [
  { month: "Jan", uv: 400 },
  { month: "Feb", uv: 300 },
  { month: "Mar", uv: 600 },
  { month: "Apr", uv: 800 },
  { month: "May", uv: 500 },
  { month: "Jun", uv: 900 },
]
const gradientAreaConfig: ChartConfig = {
  uv: { label: "UV Index", color: "var(--chart-5)" },
}

// ── Multi Scatter ──────────────────────────────────────────────────────────
const scatterGroupA = [
  { x: 50, y: 100 }, { x: 60, y: 120 }, { x: 55, y: 90 },
  { x: 70, y: 130 }, { x: 45, y: 110 }, { x: 65, y: 105 },
]
const scatterGroupB = [
  { x: 150, y: 250 }, { x: 160, y: 230 }, { x: 145, y: 260 },
  { x: 170, y: 240 }, { x: 155, y: 270 }, { x: 165, y: 220 },
]
const multiScatterConfig: ChartConfig = {
  groupA: { label: "Group A", color: "var(--chart-1)" },
  groupB: { label: "Group B", color: "var(--chart-2)" },
}

// ── Treemap ────────────────────────────────────────────────────────────────
const treemapData = [
  { name: "React",   size: 4000 },
  { name: "Vue",     size: 2800 },
  { name: "Angular", size: 1800 },
  { name: "Svelte",  size: 1200 },
  { name: "Solid",   size: 900  },
  { name: "Qwik",    size: 600  },
  { name: "Remix",   size: 500  },
  { name: "Astro",   size: 400  },
]
const treemapColors = [
  "var(--chart-1)", "var(--chart-2)", "var(--chart-3)",
  "var(--chart-4)", "var(--chart-5)",
]

export default function ChartShowcasePage() {
  const totalVisitors = React.useMemo(
    () => pieData.reduce((acc, cur) => acc + cur.visitors, 0),
    []
  )
  const totalRadial = React.useMemo(
    () => radialData[0].desktop + radialData[0].mobile,
    []
  )

  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Chart</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Beautiful charts built with Recharts and shadcn/ui ChartContainer.
        </p>
      </div>

      {/* Bar Chart */}
      <ShowcaseSection
        title="Bar Chart"
        description="Grouped bar chart comparing desktop vs mobile visitors per month."
        childrenClassName="w-full max-w-2xl"
      >
        <ChartContainer config={barConfig} className="h-64 w-full">
          <BarChart data={barData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile"  fill="var(--color-mobile)"  radius={4} />
          </BarChart>
        </ChartContainer>
      </ShowcaseSection>

      {/* Horizontal Bar Chart */}
      <ShowcaseSection
        title="Bar Chart — Horizontal"
        description='Use layout="vertical" on BarChart for horizontal bars.'
        childrenClassName="w-full max-w-2xl"
      >
        <ChartContainer config={hBarConfig} className="h-56 w-full">
          <BarChart data={hBarData} layout="vertical">
            <CartesianGrid horizontal={false} />
            <YAxis dataKey="category" type="category" tickLine={false} axisLine={false} tickMargin={8} width={32} />
            <XAxis type="number" tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="value" fill="var(--color-value)" radius={4} />
          </BarChart>
        </ChartContainer>
      </ShowcaseSection>

      {/* Line Chart */}
      <ShowcaseSection
        title="Line Chart"
        description="Multi-series line chart with tooltip and legend."
        childrenClassName="w-full max-w-2xl"
      >
        <ChartContainer config={lineConfig} className="h-64 w-full">
          <LineChart data={lineData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Line type="monotone" dataKey="revenue"  stroke="var(--color-revenue)"  strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="expenses" stroke="var(--color-expenses)" strokeWidth={2} dot={false} />
          </LineChart>
        </ChartContainer>
      </ShowcaseSection>

      {/* Area Chart */}
      <ShowcaseSection
        title="Area Chart"
        description="Stacked area chart showing desktop and mobile traffic."
        childrenClassName="w-full max-w-2xl"
      >
        <ChartContainer config={areaConfig} className="h-64 w-full">
          <AreaChart data={areaData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Area type="monotone" dataKey="desktop" stackId="a" stroke="var(--color-desktop)" fill="var(--color-desktop)" fillOpacity={0.4} />
            <Area type="monotone" dataKey="mobile"  stackId="a" stroke="var(--color-mobile)"  fill="var(--color-mobile)"  fillOpacity={0.4} />
          </AreaChart>
        </ChartContainer>
      </ShowcaseSection>

      {/* Composed Chart */}
      <ShowcaseSection
        title="Composed Chart"
        description="Combines Bar, Line, and Area in a single chart."
        childrenClassName="w-full max-w-2xl"
      >
        <ChartContainer config={composedConfig} className="h-64 w-full">
          <ComposedChart data={composedData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Area  type="monotone" dataKey="area" stroke="var(--color-area)" fill="var(--color-area)" fillOpacity={0.3} />
            <Bar   dataKey="bar"  fill="var(--color-bar)"  radius={4} />
            <Line  type="monotone" dataKey="line" stroke="var(--color-line)" strokeWidth={2} dot={false} />
          </ComposedChart>
        </ChartContainer>
      </ShowcaseSection>

      {/* Scatter Chart */}
      <ShowcaseSection
        title="Scatter Chart"
        description="Bubble scatter plot — x, y position with z controlling bubble size."
        childrenClassName="w-full max-w-2xl"
      >
        <ChartContainer config={scatterConfig} className="h-64 w-full">
          <ScatterChart>
            <CartesianGrid />
            <XAxis dataKey="x" type="number" name="X" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis dataKey="y" type="number" name="Y" tickLine={false} axisLine={false} tickMargin={8} />
            <ZAxis dataKey="z" range={[60, 400]} name="Size" />
            <ChartTooltip content={<ChartTooltipContent />} cursor={{ strokeDasharray: "3 3" }} />
            <Scatter name="Data Points" data={scatterData} fill="var(--color-data)" fillOpacity={0.7} />
          </ScatterChart>
        </ChartContainer>
      </ShowcaseSection>

      {/* Radar Chart */}
      <ShowcaseSection
        title="Radar Chart"
        description="Spider chart comparing two subjects across multiple skills."
        childrenClassName="w-full max-w-sm"
      >
        <ChartContainer config={radarConfig} className="mx-auto h-72 w-full">
          <RadarChart data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="skill" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Radar name="alice" dataKey="alice" stroke="var(--color-alice)" fill="var(--color-alice)" fillOpacity={0.4} />
            <Radar name="bob"   dataKey="bob"   stroke="var(--color-bob)"   fill="var(--color-bob)"   fillOpacity={0.4} />
          </RadarChart>
        </ChartContainer>
      </ShowcaseSection>

      {/* Pie / Donut Chart */}
      <ShowcaseSection
        title="Pie Chart — Donut with label"
        description="Donut chart with a centered total label and custom tooltip."
        childrenClassName="w-full max-w-sm"
      >
        <ChartContainer config={pieConfig} className="mx-auto h-64 w-full">
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent nameKey="visitors" hideLabel />} />
            <Pie data={pieData} dataKey="visitors" nameKey="browser" innerRadius={60} outerRadius={90} strokeWidth={2}>
              {pieData.map((entry) => (
                <Cell key={entry.browser} fill={`var(--color-${entry.browser})`} />
              ))}
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy ?? 0) + 24} className="fill-muted-foreground text-sm">
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </ShowcaseSection>

      {/* Radial Bar Chart */}
      <ShowcaseSection
        title="Radial Bar Chart"
        description="Stacked radial bars showing desktop vs mobile with a total center label."
        childrenClassName="w-full max-w-sm"
      >
        <ChartContainer config={radialConfig} className="mx-auto h-64 w-full">
          <RadialBarChart data={radialData} endAngle={180} innerRadius={80} outerRadius={130}>
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan x={viewBox.cx} y={(viewBox.cy ?? 0) - 16} className="fill-foreground text-2xl font-bold">
                          {totalRadial.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy ?? 0) + 4} className="fill-muted-foreground text-sm">
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <RadialBar dataKey="desktop" stackId="a" cornerRadius={5} fill="var(--color-desktop)" className="stroke-transparent stroke-2" />
            <RadialBar dataKey="mobile"  stackId="a" cornerRadius={5} fill="var(--color-mobile)"  className="stroke-transparent stroke-2" />
          </RadialBarChart>
        </ChartContainer>
      </ShowcaseSection>

      {/* Funnel Chart */}
      <ShowcaseSection
        title="Funnel Chart"
        description="Conversion funnel from sent emails down to converted users."
        childrenClassName="w-full max-w-md"
      >
        <ChartContainer config={funnelConfig} className="h-72 w-full">
          <FunnelChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Funnel dataKey="value" data={funnelData} isAnimationActive>
              <LabelList position="right" fill="var(--foreground)" stroke="none" dataKey="name" />
            </Funnel>
          </FunnelChart>
        </ChartContainer>
      </ShowcaseSection>

      {/* Stacked Bar Chart */}
      <ShowcaseSection
        title="Bar Chart — Stacked"
        description="stackId groups bars into a single stacked column per category."
        childrenClassName="w-full max-w-2xl"
      >
        <ChartContainer config={stackedBarConfig} className="h-64 w-full">
          <BarChart data={stackedBarData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="a" stackId="s" fill="var(--color-a)" radius={[0, 0, 0, 0]} />
            <Bar dataKey="b" stackId="s" fill="var(--color-b)" radius={[0, 0, 0, 0]} />
            <Bar dataKey="c" stackId="s" fill="var(--color-c)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </ShowcaseSection>

      {/* Pie Chart — Simple */}
      <ShowcaseSection
        title="Pie Chart — Simple"
        description="Full pie (no inner radius) with label lines showing each slice name."
        childrenClassName="w-full max-w-sm"
      >
        <ChartContainer config={simplePieConfig} className="mx-auto h-64 w-full">
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent nameKey="value" hideLabel />} />
            <Pie data={simplePieData} dataKey="value" nameKey="name" outerRadius={90} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine>
              {simplePieData.map((entry) => (
                <Cell key={entry.name} fill={`var(--color-${entry.name})`} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </ShowcaseSection>

      {/* Sankey */}
      <ShowcaseSection
        title="Sankey Chart"
        description="Flow diagram showing how traffic moves through pages to conversions."
        childrenClassName="w-full max-w-2xl"
      >
        <ChartContainer config={{}} className="h-72 w-full">
          <Sankey
            data={sankeyData}
            nodePadding={20}
            nodeWidth={12}
            link={{ stroke: "var(--chart-1)", strokeOpacity: 0.3 }}
            node={({ x, y, width, height, index, payload }) => (
              <g>
                <rect x={x} y={y} width={width} height={height} rx={3}
                  fill={`var(--chart-${(index % 5) + 1})`} />
                <text x={x < 200 ? x + width + 6 : x - 6} y={y + height / 2}
                  textAnchor={x < 200 ? "start" : "end"} dominantBaseline="middle"
                  className="fill-foreground" style={{ fontSize: 11 }}>
                  {payload.name}
                </text>
              </g>
            )}
          />
        </ChartContainer>
      </ShowcaseSection>

      {/* Sunburst Chart */}
      <ShowcaseSection
        title="Sunburst Chart"
        description="Hierarchical data as concentric rings — inner ring is the parent category."
        childrenClassName="w-full max-w-sm"
      >
        <ChartContainer config={{}} className="mx-auto h-72 w-full">
          <SunburstChart data={sunburstData}>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
          </SunburstChart>
        </ChartContainer>
      </ShowcaseSection>

      {/* Treemap */}
      <ShowcaseSection
        title="Treemap"
        description="Hierarchical data displayed as nested rectangles sized by value."
        childrenClassName="w-full max-w-2xl"
      >
        <ChartContainer config={{}} className="h-64 w-full">
          <Treemap
            data={treemapData}
            dataKey="size"
            content={({ x, y, width, height, index, name }) => {
              if (width < 30 || height < 20) return <g />
              return (
                <g>
                  <rect
                    x={x} y={y} width={width} height={height}
                    style={{ fill: treemapColors[index! % treemapColors.length], stroke: "var(--background)", strokeWidth: 2 }}
                    rx={4}
                  />
                  {width > 60 && height > 30 && (
                    <text x={x + width / 2} y={y + height / 2} textAnchor="middle" dominantBaseline="middle"
                      className="fill-white text-xs font-medium" style={{ fontSize: 12 }}>
                      {name}
                    </text>
                  )}
                </g>
              )
            }}
          />
        </ChartContainer>
      </ShowcaseSection>
    </div>
  )
}
