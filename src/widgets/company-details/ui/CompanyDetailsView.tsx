import { IOrganization } from "@/entities/organization";
import { ButtonFlattened, EditIcon } from "@/shared/ui";
import React from "react";
import { mapCompanyTypesToLabels } from "../lib/mappers";
import { CompanyDetailsField } from "./CompanyDetailsField";
import styles from "./CompanyDetailsView.module.scss";

interface CompanyDetailsViewProps {
  organization: IOrganization;
  onEdit: () => void;
}

export const CompanyDetailsView: React.FC<CompanyDetailsViewProps> = ({
  organization,
  onEdit,
}) => {
  return (
    <div className={styles.companyDetailsView}>
      <div className={styles.companyDetailsView__header}>
        <h2 className={styles.companyDetailsView__title}>Company Details</h2>
        <ButtonFlattened
          label="Edit"
          icon={EditIcon}
          onClick={onEdit}
          className={styles.companyDetailsView__editButton}
        />
      </div>

      <div className={styles.companyDetailsView__list}>
        <CompanyDetailsField label="Agreement:">
          <span className={styles.companyDetailsView__value}>
            {organization.agreementNumber || "1624/2-24"}
          </span>
          <span className={styles.companyDetailsView__separator}>/</span>
          <span className={styles.companyDetailsView__value}>
            {organization.agreementDate || "03.12.2024"}
          </span>
        </CompanyDetailsField>

        <CompanyDetailsField label="Business entity:">
          <span className={styles.companyDetailsView__value}>
            {organization.businessEntity}
          </span>
        </CompanyDetailsField>

        <CompanyDetailsField label="Company type:">
          <span className={styles.companyDetailsView__value}>
            {mapCompanyTypesToLabels(organization.type).join(", ")}
          </span>
        </CompanyDetailsField>
      </div>
    </div>
  );
};

export default CompanyDetailsView;
