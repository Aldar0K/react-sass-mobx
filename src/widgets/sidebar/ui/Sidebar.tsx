import { rootStore } from "@/app/model/root.store";
import { NavigationItem } from "@/features/navigation";
import { observer } from "mobx-react-lite";
import React from "react";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = observer(
  ({ className = "" }) => {
    const { navigationStore } = rootStore;

    const sidebarClass = [styles.sidebar, className].filter(Boolean).join(" ");

    const handleNavigationClick = (id: string): void => {
      navigationStore.navigateTo(id);
    };

    return (
      <aside className={sidebarClass}>
        <div className={styles.sidebarHeader}>
          <div className={styles.sidebarTitle}>
            <h2 className={styles.sidebarCompany}>Oak Tree Cemetery</h2>
            <p className={styles.sidebarSubtitle}>Process Manager</p>
          </div>
        </div>

        <div className={styles.sidebarDivider}></div>

        <nav className={styles.sidebarNav}>
          {navigationStore.items.map((item) => (
            <NavigationItem
              key={item.id}
              item={item}
              onClick={handleNavigationClick}
            />
          ))}
        </nav>

        <div className={styles.sidebarFooter}>
          <p className={styles.sidebarCopyright}>
            All Funeral Services © 2015-2025
          </p>
        </div>
      </aside>
    );
  },
);
