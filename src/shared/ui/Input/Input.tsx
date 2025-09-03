import { observer } from 'mobx-react-lite';
import React from 'react';
import styles from './Input.module.scss';

export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: 'text' | 'email' | 'tel' | 'date';
  disabled?: boolean;
  error?: string;
  icon?: React.ReactNode;
  className?: string;
}

export const Input: React.FC<InputProps> = observer(({
  value,
  onChange,
  placeholder,
  type = 'text',
  disabled = false,
  error,
  icon,
  className = '',
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value);
  };

  const containerClass = [
    styles.input,
    error && styles['input--error'],
    icon && styles['input--with-icon'],
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClass}>
      <div className={styles.input__container}>
        <input
          className={styles.input__field}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
        />
        {icon && (
          <span className={styles.input__icon}>
            {icon}
          </span>
        )}
      </div>
      {error && (
        <span className={styles.input__error}>
          {error}
        </span>
      )}
    </div>
  );
});