import { observer } from "mobx-react-lite";
import React from "react";
import type { INavigationItem } from "../model/types";
import styles from "./NavigationItem.module.scss";

interface NavigationItemProps {
  item: INavigationItem;
  onClick: (id: string) => void;
}

export const NavigationItem: React.FC<NavigationItemProps> = observer(
  ({ item }) => {
    const itemClass = [
      styles.navigationItem,
      item.isActive ? styles.navigationItemActive : "",
    ]
      .filter(Boolean)
      .join(" ");

    const IconComponent = item.icon;

    return (
      <div
        className={itemClass}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
          }
        }}
        aria-label={`Navigate to ${item.label}`}
      >
        <IconComponent
          size={16}
          color={item.isActive ? "rgba(255, 255, 255, 0.95)" : "#3B3B3B"}
        />
        <span>{item.label}</span>
      </div>
    );
  },
);
