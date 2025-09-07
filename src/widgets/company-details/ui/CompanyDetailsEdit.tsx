import { IOrganization } from "@/entities/organization";
import {
  ButtonFlattened,
  CheckIcon,
  CloseIcon,
  Input,
  MultiSelector,
  Selector,
} from "@/shared/ui";
import React from "react";
import {
  mapCompanyTypesToLabels,
  mapLabelsToCompanyTypes,
} from "../lib/mappers";
import styles from "./CompanyDetailsEdit.module.scss";
import { CompanyDetailsField } from "./CompanyDetailsField";

// Business entity options
const BUSINESS_ENTITY_OPTIONS = [
  { value: "Sole Proprietorship", label: "Sole Proprietorship" },
  { value: "Partnership", label: "Partnership" },
  { value: "Limited Liability Company", label: "Limited Liability Company" },
];

// Company type options (читаемые названия)
const COMPANY_TYPE_OPTIONS = [
  { value: "Funeral Home", label: "Funeral Home" },
  { value: "Logistics services", label: "Logistics services" },
  { value: "Burial care Contractor", label: "Burial care Contractor" },
];

interface CompanyDetailsEditProps {
  organization: IOrganization;
  onSave: () => void;
  onCancel: () => void;
  onFieldChange: (field: string, value: string | string[]) => void;
  isLoading?: boolean;
}

// TODO: make it proper form

export const CompanyDetailsEdit: React.FC<CompanyDetailsEditProps> = ({
  organization,
  onSave,
  onCancel,
  onFieldChange,
  isLoading = false,
}) => {
  return (
    <div className={styles.companyDetailsEdit}>
      <div className={styles.companyDetailsEdit__header}>
        <h2 className={styles.companyDetailsEdit__title}>Company Details</h2>
        <div className={styles.companyDetailsEdit__actions}>
          <ButtonFlattened
            label="Save changes"
            icon={CheckIcon}
            onClick={onSave}
            disabled={isLoading}
            className={styles.companyDetailsEdit__saveButton}
          />
          <ButtonFlattened
            label="Cancel"
            icon={CloseIcon}
            onClick={onCancel}
            disabled={isLoading}
            className={styles.companyDetailsEdit__cancelButton}
          />
        </div>
      </div>

      <div className={styles.companyDetailsEdit__list}>
        <div className={styles.companyDetailsEdit__agreementRow}>
          <CompanyDetailsField label="Agreement number:">
            <Input
              value={organization.agreementNumber || "1624/2-24"}
              onChange={(value) => onFieldChange("agreementNumber", value)}
              disabled={isLoading}
              className={styles.companyDetailsEdit__input}
            />
          </CompanyDetailsField>
          <CompanyDetailsField
            label="Date:"
            labelClassName={styles.companyDetailsEdit__label}
          >
            <Input
              value={organization.agreementDate || "03.12.2024"}
              onChange={(value) => onFieldChange("agreementDate", value)}
              disabled={isLoading}
              className={styles.companyDetailsEdit__input}
            />
          </CompanyDetailsField>
        </div>

        <CompanyDetailsField label="Business entity:">
          <Selector
            value={organization.businessEntity || "Partnership"}
            onChange={(value) => onFieldChange("businessEntity", value)}
            options={BUSINESS_ENTITY_OPTIONS}
            disabled={isLoading}
            className={styles.companyDetailsEdit__selector}
          />
        </CompanyDetailsField>

        <CompanyDetailsField label="Company type:">
          <MultiSelector
            values={
              organization.type
                ? mapCompanyTypesToLabels(organization.type)
                : ["Funeral Home", "Logistics services"]
            }
            onChange={(values) =>
              onFieldChange("type", mapLabelsToCompanyTypes(values))
            }
            options={COMPANY_TYPE_OPTIONS}
            disabled={isLoading}
            className={styles.companyDetailsEdit__selector}
          />
        </CompanyDetailsField>
      </div>
    </div>
  );
};

export default CompanyDetailsEdit;
