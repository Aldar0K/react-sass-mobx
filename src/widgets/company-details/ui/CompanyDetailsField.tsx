import React from "react";
import styles from "./CompanyDetailsField.module.scss";

interface CompanyDetailsFieldProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export const CompanyDetailsField: React.FC<CompanyDetailsFieldProps> = ({
  label,
  children,
  className = "",
}) => {
  return (
    <div className={`${styles.companyDetailsField} ${className}`}>
      <div className={styles.companyDetailsField__label}>{label}</div>
      <div className={styles.companyDetailsField__content}>{children}</div>
    </div>
  );
};

export default CompanyDetailsField;
