import React from "react";
import styles from "./ButtonIcon.module.scss";

export interface ButtonIconProps {
  icon: React.ComponentType<{
    size?: number;
    color?: string;
    className?: string;
  }>;
  size?: 28 | 32 | 36; // точные размеры из Figma
  color?: "default" | "red"; // цвет иконки
  isActive?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
  tabIndex?: number;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  icon: IconComponent,
  size = 32,
  color = "default",
  isActive = false,
  disabled = false,
  className = "",
  onClick,
  "aria-label": ariaLabel,
  tabIndex = 0,
  onKeyDown,
}) => {
  const buttonClass = [
    styles.buttonIcon,
    styles[`buttonIcon_${size}px`],
    isActive && styles["buttonIcon_active"],
    disabled && styles["buttonIcon_disabled"],
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
    if (disabled) return "rgba(0, 0, 0, 0.3)";
    if (color === "red") return "#E53E3E";
    return "#3B3B3B";
  };

  const getIconSize = (): number => {
    if (size === 32) return 20;
    return Math.round(size * 0.625);
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
      <span className={styles.buttonIcon__icon}>
        <IconComponent size={getIconSize()} color={getIconColor()} />
      </span>
    </button>
  );
};
