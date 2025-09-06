import { IOrganization } from "@/entities/organization";
import {
  ArrowLeftIcon,
  ButtonFilled,
  ButtonIcon,
  ButtonOutline,
} from "@/shared/ui";
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
        <ButtonOutline
          label="Edit"
          size="normal"
          onClick={() => {
            // TODO: implement edit functionality
            console.log("Edit clicked");
          }}
        />
        <ButtonFilled
          label="Delete"
          size="normal"
          onClick={() => {
            // TODO: implement delete functionality
            console.log("Delete clicked");
          }}
        />
      </div>
    </header>
  );
};

export default CompanyHeader;
