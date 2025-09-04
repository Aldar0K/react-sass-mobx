export interface INavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{
    size?: number;
    color?: string;
    className?: string;
  }>;
  path: string;
  isActive?: boolean;
}

export type NavigationSection = "organizations" | "contractors" | "clients";
