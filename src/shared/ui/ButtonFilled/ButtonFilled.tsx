import React from "react";
import styles from "./ButtonFilled.module.scss";

export interface ButtonFilledProps {
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

export const ButtonFilled: React.FC<ButtonFilledProps> = ({
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
    console.warn("ButtonFilled: Either label or icon must be provided");
    return null;
  }

  const buttonClass = [
    styles.buttonFilled,
    styles[`buttonFilled--${size}`],
    disabled && styles["buttonFilled--disabled"],
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
    if (disabled) return "rgba(255, 255, 255, 0.5)";
    return "rgba(255, 255, 255, 0.95)"; // Из Figma: fill_0ZJGIL
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
      className={`${buttonClass} ${styles[`buttonFilled--${contentType}`]}`}
      onClick={handleClick}
      disabled={disabled}
      aria-label={ariaLabel || label}
      tabIndex={tabIndex}
      onKeyDown={handleKeyDown}
    >
      <span className={styles.buttonFilledContent}>
        {IconComponent && (
          <span className={styles.buttonFilledIcon}>
            <IconComponent size={getIconSize()} color={getIconColor()} />
          </span>
        )}
        {label && <span className={styles.buttonFilledText}>{label}</span>}
      </span>
    </button>
  );
};
