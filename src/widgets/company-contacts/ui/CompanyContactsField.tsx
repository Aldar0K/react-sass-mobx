import React from "react";
import styles from "./CompanyContactsField.module.scss";

interface CompanyContactsFieldProps {
  label: string;
  children: React.ReactNode;
  className?: string;
  labelClassName?: string;
}

export const CompanyContactsField: React.FC<CompanyContactsFieldProps> = ({
  label,
  children,
  className = "",
  labelClassName = "",
}) => {
  return (
    <div className={`${styles.companyContactsField} ${className}`}>
      <div className={`${styles.companyContactsField__label} ${labelClassName}`}>
        {label}
      </div>
      <div className={styles.companyContactsField__content}>{children}</div>
    </div>
  );
};

export default CompanyContactsField;
