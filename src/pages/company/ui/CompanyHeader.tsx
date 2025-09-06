import { IOrganization } from "@/entities/organization";
import { ArrowLeftIcon, ButtonIcon, EditIcon, TrashIcon } from "@/shared/ui";
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
        className={styles.companyHeader__backButton}
      />

      <div className={styles.companyHeader__left}>
        <div className={styles.companyHeader__title}>
          <h1 className={styles.companyHeader__company}>
            {organization?.name || "Company Name"}
          </h1>
        </div>
      </div>

      <div className={styles.companyHeader__actions}>
        <ButtonIcon
          icon={EditIcon}
          size={32}
          onClick={() => {
            // TODO: implement edit functionality
            console.log("Edit clicked");
          }}
          aria-label="Edit company"
        />
        <ButtonIcon
          icon={TrashIcon}
          size={32}
          color="red"
          onClick={() => {
            // TODO: implement delete functionality
            console.log("Delete clicked");
          }}
          aria-label="Delete company"
        />
      </div>
    </header>
  );
};

export default CompanyHeader;
