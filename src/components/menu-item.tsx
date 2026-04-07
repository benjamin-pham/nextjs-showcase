import { LucideIcon } from "lucide-react";

export interface IMenuItem {
  title: string;
  url?: string;
  icon: LucideIcon;
  subItems?: IMenuItem[];
}

