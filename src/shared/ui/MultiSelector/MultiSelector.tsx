import { observer } from "mobx-react-lite";
import React, { useEffect, useRef, useState } from "react";
import { ArrowDownIcon, CheckIcon } from "../Icons/Icons";
import styles from "./MultiSelector.module.scss";

export interface MultiSelectorOption {
  value: string;
  label: string;
}

export interface MultiSelectorProps {
  values: string[];
  onChange: (values: string[]) => void;
  options: MultiSelectorOption[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export const MultiSelector: React.FC<MultiSelectorProps> = observer(
  ({
    values,
    onChange,
    options,
    placeholder = "Select options",
    disabled = false,
    className = "",
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectorRef = useRef<HTMLDivElement>(null);

    const selectedOptions = options.filter((option) =>
      values.includes(option.value),
    );

    const handleToggle = (): void => {
      if (!disabled) {
        setIsOpen(!isOpen);
      }
    };

    const handleOptionToggle = (optionValue: string): void => {
      const newValues = values.includes(optionValue)
        ? values.filter((value) => value !== optionValue)
        : [...values, optionValue];
      onChange(newValues);
    };

    const handleClickOutside = (event: MouseEvent): void => {
      if (
        selectorRef.current &&
        !selectorRef.current.contains(event.target as Node)
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
      styles["multi-selector"],
      isOpen && styles["multi-selector_open"],
      disabled && styles["multi-selector_disabled"],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const displayText = (() => {
      if (selectedOptions.length === 0) return placeholder;
      if (selectedOptions.length === 1) return selectedOptions[0].label;
      if (selectedOptions.length === 2)
        return selectedOptions.map((option) => option.label).join(", ");
      return `${selectedOptions
        .slice(0, 2)
        .map((option) => option.label)
        .join(", ")}, +${selectedOptions.length - 2}`;
    })();

    return (
      <div className={selectorClass} ref={selectorRef}>
        <div
          className={styles["multi-selector__trigger"]}
          onClick={handleToggle}
        >
          <span className={styles["multi-selector__text"]}>{displayText}</span>
          <span className={styles["multi-selector__icon"]}>
            <ArrowDownIcon size={20} />
          </span>
        </div>

        {isOpen && (
          <div className={styles["multi-selector__dropdown"]}>
            {options.map((option) => {
              const isSelected = values.includes(option.value);
              return (
                <div
                  key={option.value}
                  className={`${styles["multi-selector__option"]} ${
                    isSelected ? styles["multi-selector__option_selected"] : ""
                  }`}
                  onClick={() => handleOptionToggle(option.value)}
                >
                  <div className={styles["multi-selector__checkbox"]}>
                    {isSelected && <CheckIcon />}
                  </div>
                  <span className={styles["multi-selector__option-text"]}>
                    {option.label}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  },
);
