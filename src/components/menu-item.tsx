import { BookUser, Circle, KeyRound, LayoutDashboard, LucideIcon, PackageSearch, SquareKanban } from "lucide-react";

export interface IMenuItem {
  title: string;
  url?: string;
  icon: LucideIcon;
  subItems?: IMenuItem[];
}

export const menuItems: IMenuItem[] = [
  {
    title: "Home",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Atoms",
    icon: SquareKanban,
    subItems: [
      {
        title: "Accordion",
        url: "/showcase/atoms/accordion",
        icon: Circle,
      },
      {
        title: "Alert",
        url: "/showcase/atoms/alert",
        icon: Circle,
      },
      {
        title: "Alert Dialog",
        url: "/showcase/atoms/alert-dialog",
        icon: Circle,
      },
      {
        title: "Aspect Ratio",
        url: "/showcase/atoms/aspect-ratio",
        icon: Circle,
      },
      {
        title: "Avatar",
        url: "/showcase/atoms/avatar",
        icon: Circle,
      },
      {
        title: "Badge",
        url: "/showcase/atoms/badge",
        icon: Circle,
      },
      {
        title: "Breadcrumb",
        url: "/showcase/atoms/breadcrumb",
        icon: Circle,
      },
      {
        title: "Button",
        url: "/showcase/atoms/button",
        icon: Circle,
      },
      {
        title: "Button Group",
        url: "/showcase/atoms/button-group",
        icon: Circle,
      },
      {
        title: "Calendar",
        url: "/showcase/atoms/calendar",
        icon: Circle,
      },
      {
        title: "Card",
        url: "/showcase/atoms/card",
        icon: Circle,
      },
      {
        title: "Carousel",
        url: "/showcase/atoms/carousel",
        icon: Circle,
      },
      {
        title: "Chart",
        url: "/showcase/atoms/chart",
        icon: Circle,
      },
    ]
  },
  {
    title: "Molecules",
    icon: SquareKanban,
    subItems: [
      {
        title: "Data Table",
        url: "/showcase/molecules/data-table",
        icon: Circle,
      }

    ]
  },
  {
    title: "Organisms",
    icon: SquareKanban,
    subItems: [
      {
        title: "Data Table",
        url: "/showcase/organisms/data-table",
        icon: Circle,
      }
    ]
  }
]