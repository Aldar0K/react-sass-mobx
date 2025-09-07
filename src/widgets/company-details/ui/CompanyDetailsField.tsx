import React from "react";
import styles from "./CompanyDetailsField.module.scss";

interface CompanyDetailsFieldProps {
  label: string;
  children: React.ReactNode;
  className?: string;
  labelClassName?: string;
}

export const CompanyDetailsField: React.FC<CompanyDetailsFieldProps> = ({
  label,
  children,
  className = "",
  labelClassName = "",
}) => {
  return (
    <div className={`${styles.companyDetailsField} ${className}`}>
      <div className={`${styles.companyDetailsField__label} ${labelClassName}`}>
        {label}
      </div>
      <div className={styles.companyDetailsField__content}>{children}</div>
    </div>
  );
};

export default CompanyDetailsField;
