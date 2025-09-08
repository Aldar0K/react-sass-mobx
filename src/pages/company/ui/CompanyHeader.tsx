import { IOrganization } from "@/entities/organization";
import { DeleteCompanyButton } from "@/features/delete-company";
import { EditCompanyNameButton } from "@/features/edit-company-name";
import { DEFAULT_TEXTS, ICON_SIZES } from "@/shared/constants/app";
import { ArrowLeftIcon, ButtonIcon } from "@/shared/ui";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CompanyHeader.module.scss";

interface CompanyHeaderProps {
  organization: IOrganization;
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
        size={ICON_SIZES.LARGE}
        onClick={handleBack}
        aria-label="Back to companies list"
        className={styles.companyHeader__backButton}
      />

      <div className={styles.companyHeader__left}>
        <div className={styles.companyHeader__title}>
          <h1 className={styles.companyHeader__company}>
            {organization?.name || DEFAULT_TEXTS.COMPANY_NAME}
          </h1>
        </div>
      </div>

      <div className={styles.companyHeader__actions}>
        <EditCompanyNameButton
          organization={organization}
          onSuccess={() => {}}
        />
        <DeleteCompanyButton organization={organization} onSuccess={() => {}} />
      </div>
    </header>
  );
};

export default CompanyHeader;
