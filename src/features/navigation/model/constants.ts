import { CompanyIcon } from "@/shared/ui";
import type { INavigationItem } from "./types";

export const NAVIGATION_ITEMS: INavigationItem[] = [
  {
    id: "organizations",
    label: "Organizations",
    icon: CompanyIcon,
    path: "/organizations",
    isActive: true, // По умолчанию активен Organizations
  },
  {
    id: "contractors",
    label: "Contractors",
    icon: CompanyIcon,
    path: "/contractors",
    isActive: false,
  },
  {
    id: "clients",
    label: "Clients",
    icon: CompanyIcon,
    path: "/clients",
    isActive: false,
  },
];
