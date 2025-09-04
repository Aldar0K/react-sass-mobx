import { observer } from "mobx-react-lite";
import React from "react";
import type { INavigationItem } from "../model/types";
import styles from "./NavigationItem.module.scss";

interface NavigationItemProps {
  item: INavigationItem;
  onClick: (id: string) => void;
}

export const NavigationItem: React.FC<NavigationItemProps> = observer(
  ({ item, onClick }) => {
    const handleClick = (): void => {
      onClick(item.id);
    };

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
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
          }
        }}
        aria-label={`Navigate to ${item.label}`}
      >
        <IconComponent
          size={20}
          color={item.isActive ? "#FFFFFF" : "#3B3B3B"}
        />
        <span>{item.label}</span>
      </div>
    );
  },
);
