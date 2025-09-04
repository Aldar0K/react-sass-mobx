import { ClientIcon, CompanyIcon, ContractorIcon } from "@/shared/ui";
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
    icon: ContractorIcon,
    path: "/contractors",
    isActive: false,
  },
  {
    id: "clients",
    label: "Clients",
    icon: ClientIcon,
    path: "/clients",
    isActive: false,
  },
];
