import React, { useState, useRef, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { ArrowDownIcon } from '../Icons/Icons';
import styles from './Select.module.scss';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export const Select: React.FC<SelectProps> = observer(({
  value,
  onChange,
  options,
  placeholder = 'Select option',
  disabled = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === value);

  const handleToggle = (): void => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionClick = (optionValue: string): void => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent): void => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const selectClass = [
    styles.select,
    isOpen && styles['select--open'],
    disabled && styles['select--disabled'],
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={selectClass} ref={selectRef}>
      <div className={styles.select__trigger} onClick={handleToggle}>
        <span className={styles.select__text}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className={styles.select__icon}>
          <ArrowDownIcon size={16} />
        </span>
      </div>
      
      {isOpen && (
        <div className={styles.select__dropdown}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`${styles.select__option} ${
                option.value === value ? styles['select__option--selected'] : ''
              }`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
});