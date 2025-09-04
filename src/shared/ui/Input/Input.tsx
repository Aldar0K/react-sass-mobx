import { observer } from "mobx-react-lite";
import React from "react";
import styles from "./Input.module.scss";

export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "text" | "email" | "tel" | "date";
  disabled?: boolean;
  error?: string;
  icon?: React.ReactNode;
  className?: string;
}

export const Input: React.FC<InputProps> = observer(
  ({
    value,
    onChange,
    placeholder,
    type = "text",
    disabled = false,
    error,
    icon,
    className = "",
  }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      onChange(event.target.value);
    };

    const containerClass = [
      styles.input,
      error && styles["input--error"],
      icon && styles["input--with-icon"],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={containerClass}>
        <div className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={disabled}
          />
          {icon && <span className={styles.inputIcon}>{icon}</span>}
        </div>
        {error && <span className={styles.inputError}>{error}</span>}
      </div>
    );
  },
);
