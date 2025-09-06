import React from "react";
import styles from "./ButtonFlattened.module.scss";

export interface ButtonFlattenedProps {
  type?: "button" | "submit" | "reset";
  label?: string;
  icon?: React.ComponentType<{
    size?: number;
    color?: string;
    className?: string;
  }>;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
  tabIndex?: number;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

export const ButtonFlattened: React.FC<ButtonFlattenedProps> = ({
  type = "button",
  label,
  icon: IconComponent,
  disabled = false,
  className = "",
  onClick,
  "aria-label": ariaLabel,
  tabIndex = 0,
  onKeyDown,
}) => {
  if (!label && !IconComponent) {
    console.warn("ButtonFlattened: Either label or icon must be provided");
    return null;
  }

  const buttonClass = [
    styles["button-flattened"],
    disabled && styles["button-flattened_disabled"],
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
    if (disabled) return "rgba(59, 59, 59, 0.5)";
    return "#3b3b3b";
  };

  const getIconSize = (): number => {
    return 16;
  };

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={handleClick}
      disabled={disabled}
      aria-label={ariaLabel || label}
      tabIndex={tabIndex}
      onKeyDown={handleKeyDown}
    >
      {IconComponent && (
        <span className={styles["button-flattened__icon"]}>
          <IconComponent size={getIconSize()} color={getIconColor()} />
        </span>
      )}
      {label && (
        <span className={styles["button-flattened__text"]}>{label}</span>
      )}
    </button>
  );
};
