import React from "react";
import styles from "./ButtonOutline.module.scss";

export interface ButtonOutlineProps {
  label?: string;
  icon?: React.ComponentType<{
    size?: number;
    color?: string;
    className?: string;
  }>;
  size?: "mini" | "normal";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
  tabIndex?: number;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

export const ButtonOutline: React.FC<ButtonOutlineProps> = ({
  label,
  icon: IconComponent,
  size = "normal",
  disabled = false,
  className = "",
  onClick,
  "aria-label": ariaLabel,
  tabIndex = 0,
  onKeyDown,
}) => {
  // Валидация: должен быть передан хотя бы label или icon
  if (!label && !IconComponent) {
    console.warn("ButtonOutline: Either label or icon must be provided");
    return null;
  }

  const buttonClass = [
    styles.buttonOutline,
    styles[`buttonOutline--${size}`],
    disabled && styles["buttonOutline--disabled"],
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
    return "#3B3B3B"; // fill_LPDSCO из Figma
  };

  const getIconSize = (): number => {
    return 16; // Стандартный размер иконки из Figma
  };

  // Определяем тип содержимого для правильного padding
  const hasIcon = !!IconComponent;
  const hasLabel = !!label;
  const contentType =
    hasIcon && hasLabel ? "icon-text" : hasIcon ? "icon-only" : "text-only";

  return (
    <button
      className={`${buttonClass} ${styles[`buttonOutline--${contentType}`]}`}
      onClick={handleClick}
      disabled={disabled}
      aria-label={ariaLabel || label}
      tabIndex={tabIndex}
      onKeyDown={handleKeyDown}
    >
      <span className={styles.buttonOutlineContent}>
        {IconComponent && (
          <span className={styles.buttonOutlineIcon}>
            <IconComponent size={getIconSize()} color={getIconColor()} />
          </span>
        )}
        {label && <span className={styles.buttonOutlineText}>{label}</span>}
      </span>
    </button>
  );
};
