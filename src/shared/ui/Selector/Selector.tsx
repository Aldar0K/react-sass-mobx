import { observer } from "mobx-react-lite";
import React, { useEffect, useRef, useState } from "react";
import { ArrowDownIcon } from "../Icons/Icons";
import styles from "./Selector.module.scss";

export interface SelectorOption {
  value: string;
  label: string;
}

export interface SelectorProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectorOption[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export const Selector: React.FC<SelectorProps> = observer(
  ({
    value,
    onChange,
    options,
    placeholder = "Select option",
    disabled = false,
    className = "",
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find((option) => option.value === value);

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
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    const selectorClass = [
      styles["selector"],
      isOpen && styles["selector_open"],
      disabled && styles["selector_disabled"],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={selectorClass} ref={selectRef}>
        <div className={styles["selector__trigger"]} onClick={handleToggle}>
          <span className={styles["selector__text"]}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <span className={styles["selector__icon"]}>
            <ArrowDownIcon size={20} />
          </span>
        </div>

        {isOpen && (
          <div className={styles["selector__dropdown"]}>
            {options.map((option) => (
              <div
                key={option.value}
                className={`${styles["selector__option"]} ${
                  option.value === value
                    ? styles["selector__option_selected"]
                    : ""
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
  },
);
