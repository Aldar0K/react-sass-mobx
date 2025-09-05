import { IOrganization } from "@/entities/organization";
import { ArrowLeftIcon, ButtonIcon } from "@/shared/ui";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CompanyHeader.module.scss";

interface CompanyHeaderProps {
  organization?: IOrganization;
  className?: string;
}

export const CompanyHeader: React.FC<CompanyHeaderProps> = ({
  organization,
  className = "",
}) => {
  const headerClass = [styles.companyHeader, className]
    .filter(Boolean)
    .join(" ");
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  return (
    <header className={headerClass}>
      <ButtonIcon
        icon={ArrowLeftIcon}
        size={32}
        onClick={handleBack}
        aria-label="Back to companies list"
        className={styles.companyHeaderBackButton}
      />

      <div className={styles.companyHeaderLeft}>
        <div className={styles.companyHeaderTitle}>
          <h1 className={styles.companyHeaderCompany}>
            {organization?.name || "Company"}
          </h1>
        </div>
      </div>
      <div className={styles.companyHeaderActions}>{/* actions later */}</div>
    </header>
  );
};

export default CompanyHeader;
