import React from "react";
import styles from "./ButtonSideMenu.module.scss";

export interface ButtonSideMenuProps {
  icon: React.ComponentType<{
    size?: number;
    color?: string;
    className?: string;
  }>;
  isActive?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
  tabIndex?: number;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

export const ButtonSideMenu: React.FC<ButtonSideMenuProps> = ({
  icon: IconComponent,
  isActive = false,
  disabled = false,
  className = "",
  onClick,
  "aria-label": ariaLabel,
  tabIndex = 0,
  onKeyDown,
}) => {
  const buttonClass = [
    styles.buttonSideMenu,
    isActive && styles["buttonSideMenu--active"],
    disabled && styles["buttonSideMenu--disabled"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleClick = (): void => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (!disabled && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      onClick?.();
    }
    onKeyDown?.(e);
  };

  const getIconColor = (): string => {
    if (disabled) return "rgba(255, 255, 255, 0.3)";
    return "#FFFFFF"; // fill_75I1NT из Figma
  };

  const getIconSize = (): number => {
    return 20; // layout_KMH9KH из Figma: 20x20px
  };

  return (
    <button
      className={buttonClass}
      onClick={handleClick}
      disabled={disabled}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
      onKeyDown={handleKeyDown}
    >
      <span className={styles.buttonSideMenuIcon}>
        <IconComponent size={getIconSize()} color={getIconColor()} />
      </span>
    </button>
  );
};
