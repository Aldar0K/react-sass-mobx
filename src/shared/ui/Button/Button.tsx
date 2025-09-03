import { observer } from 'mobx-react-lite';
import React from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'filled' | 'outline';
  size?: 'normal' | 'mini';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = observer(({
  children,
  type = 'button',
  variant = 'filled',
  size = 'normal',
  icon,
  iconPosition = 'left',
  disabled = false,
  loading = false,
  className = '',
  onClick,
}) => {
  const handleClick = (): void => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  const buttonClass = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClass}
      disabled={disabled || loading}
      onClick={handleClick}
    >
      {icon && iconPosition === 'left' && (
        <span className={`${styles.button__icon} ${styles['button__icon--left']}`}>
          {icon}
        </span>
      )}
      {children && (
        <span className={styles.button__text}>
          {children}
        </span>
      )}
      {icon && iconPosition === 'right' && (
        <span className={`${styles.button__icon} ${styles['button__icon--right']}`}>
          {icon}
        </span>
      )}
    </button>
  );
});