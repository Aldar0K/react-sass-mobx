import React from "react";
import styles from "./ButtonFlattened.module.scss";

export interface ButtonFlattenedProps {
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

export const ButtonFlattened: React.FC<ButtonFlattenedProps> = ({
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
    console.warn("ButtonFlattened: Either label or icon must be provided");
    return null;
  }

  const buttonClass = [
    styles.buttonFlattened,
    styles[`buttonFlattened--${size}`],
    disabled && styles["buttonFlattened--disabled"],
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
    return "#3B3B3B"; // цвет иконки для flattened кнопки
  };

  const getIconSize = (): number => {
    return 16; // Стандартный размер иконки
  };

  // Определяем тип содержимого для правильного padding
  const hasIcon = !!IconComponent;
  const hasLabel = !!label;
  const contentType =
    hasIcon && hasLabel ? "icon-text" : hasIcon ? "icon-only" : "text-only";

  return (
    <button
      className={`${buttonClass} ${styles[`buttonFlattened--${contentType}`]}`}
      onClick={handleClick}
      disabled={disabled}
      aria-label={ariaLabel || label}
      tabIndex={tabIndex}
      onKeyDown={handleKeyDown}
    >
      <span className={styles.buttonFlattenedContent}>
        {IconComponent && (
          <span className={styles.buttonFlattenedIcon}>
            <IconComponent size={getIconSize()} color={getIconColor()} />
          </span>
        )}
        {label && <span className={styles.buttonFlattenedText}>{label}</span>}
      </span>
    </button>
  );
};
