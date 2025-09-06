import { IOrganization } from "@/entities/organization";
import { ButtonOutline, Input } from "@/shared/ui";
import React from "react";
import styles from "./CompanyDetailsEdit.module.scss";
import { CompanyDetailsField } from "./CompanyDetailsField";

interface CompanyDetailsEditProps {
  organization: IOrganization;
  onSave: () => void;
  onCancel: () => void;
  onFieldChange: (field: string, value: string) => void;
  isLoading?: boolean;
}

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
          <ButtonOutline
            label="Save changes"
            size="mini"
            icon={() => (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 4.5L10.5 7L13.5 4.5"
                  stroke="#3B3B3B"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            onClick={onSave}
            disabled={isLoading}
            className={styles.companyDetailsEdit__saveButton}
          />
          <ButtonOutline
            label="Cancel"
            size="mini"
            icon={() => (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3.5 3.5L12.5 12.5M12.5 3.5L3.5 12.5"
                  stroke="#3B3B3B"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            onClick={onCancel}
            disabled={isLoading}
            className={styles.companyDetailsEdit__cancelButton}
          />
        </div>
      </div>

      <div className={styles.companyDetailsEdit__list}>
        <CompanyDetailsField label="Agreement number:">
          <Input
            value={organization.agreementNumber || "1624/2-24"}
            onChange={(value) => onFieldChange("agreementNumber", value)}
            disabled={isLoading}
            className={styles.companyDetailsEdit__input}
          />
        </CompanyDetailsField>

        <CompanyDetailsField label="Date:">
          <Input
            value={organization.agreementDate || "03.12.2024"}
            onChange={(value) => onFieldChange("agreementDate", value)}
            disabled={isLoading}
            className={styles.companyDetailsEdit__input}
          />
        </CompanyDetailsField>

        <CompanyDetailsField label="Business entity:">
          <div className={styles.companyDetailsEdit__select}>
            <Input
              value={organization.businessEntity || "Partnership"}
              onChange={(value) => onFieldChange("businessEntity", value)}
              disabled={isLoading}
              className={styles.companyDetailsEdit__selectInput}
            />
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className={styles.companyDetailsEdit__selectIcon}
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </CompanyDetailsField>

        <CompanyDetailsField label="Company type:">
          <div className={styles.companyDetailsEdit__select}>
            <Input
              value={
                organization.companyType || "Funeral Home, Logistics services"
              }
              onChange={(value) => onFieldChange("companyType", value)}
              disabled={isLoading}
              className={styles.companyDetailsEdit__selectInput}
            />
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className={styles.companyDetailsEdit__selectIcon}
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </CompanyDetailsField>
      </div>
    </div>
  );
};

export default CompanyDetailsEdit;
