import { ArrowLeftIcon, ButtonIcon } from "@/shared/ui";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CompanyHeader.module.scss";

interface CompanyHeaderProps {
  className?: string;
}

export const CompanyHeader: React.FC<CompanyHeaderProps> = ({
  className = "",
}) => {
  const headerClass = [styles.companyHeader, className]
    .filter(Boolean)
    .join(" ");
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  return (
    <header className={headerClass}>
      <div className={styles.companyHeaderLeft}>
        <ButtonIcon
          icon={ArrowLeftIcon}
          size={32}
          onClick={handleBack}
          aria-label="Back to companies list"
        />

        <div className={styles.companyHeaderTitle}>
          <h1 className={styles.companyHeaderCompany}>Company</h1>
          <p className={styles.companyHeaderSubtitle}>Details</p>
        </div>
      </div>
      <div className={styles.companyHeaderActions}>{/* actions later */}</div>
    </header>
  );
};

export default CompanyHeader;
