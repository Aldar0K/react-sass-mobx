import React from "react";
import styles from "./ButtonIcon.module.scss";

export interface ButtonIconProps {
  icon: React.ComponentType<{
    size?: number;
    color?: string;
    className?: string;
  }>;
  size?: 28 | 32 | 36; // точные размеры из Figma
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
    styles[`buttonIcon--${size}px`],
    isActive && styles["buttonIcon--active"],
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
    if (disabled) return "rgba(0, 0, 0, 0.3)";
    return "#3B3B3B"; // стандартный цвет иконки
  };

  const getIconSize = (): number => {
    // Стандартная иконка 20px для кнопки 32px
    if (size === 32) return 20;
    // Для других размеров пропорционально
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
      <span className={styles.buttonIconIcon}>
        <IconComponent size={getIconSize()} color={getIconColor()} />
      </span>
    </button>
  );
};
