import Link from "next/link"
import { type ReactNode } from "react"

const NAV_LINKS = [
  { href: "/organisms/data-table", label: "DataTable (organism)" },
  { href: "/molecules/data-table", label: "DataTable (molecules)" },
]

export default function ShowcaseLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-56 shrink-0 border-r bg-muted/20 p-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Showcase
        </p>
        <nav className="flex flex-col gap-0.5">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-md px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  )
}
