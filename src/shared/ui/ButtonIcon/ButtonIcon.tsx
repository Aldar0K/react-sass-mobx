import React from "react";
import styles from "./ButtonIcon.module.scss";

export interface ButtonIconProps {
  icon: React.ComponentType<{
    size?: number;
    color?: string;
    className?: string;
  }>;
  size?: "mini" | "normal";
  variant?: "filled" | "flattened";
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
  size = "mini",
  variant = "filled",
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
    styles[`buttonIcon--${size}`],
    styles[`buttonIcon--${variant}`],
    isActive && styles[`buttonIcon--${variant}--active`],
    disabled && styles["buttonIcon--disabled"],
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
    if (variant === "filled") return "#FFFFFF";
    return "#3B3B3B"; // для flattened варианта
  };

  const getIconSize = (): number => {
    switch (size) {
      case "mini":
        return 16; // 28px button -> 16px icon (из Figma Icon Button)
      case "normal":
        return 20; // 36px button -> 20px icon
      default:
        return 16;
    }
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
      <span className={styles.buttonIconIcon}>
        <IconComponent size={getIconSize()} color={getIconColor()} />
      </span>
    </button>
  );
};
