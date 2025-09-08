import { ButtonFlattened, CheckIcon, CloseIcon, Input } from "@/shared/ui";
import React from "react";
import styles from "./CompanyContactsEdit.module.scss";
import { CompanyContactsField } from "./CompanyContactsField";

interface CompanyContactsEditProps {
  contact: {
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
  };
  onSave: () => void;
  onCancel: () => void;
  onFieldChange: (field: string, value: string) => void;
  isLoading: boolean;
}

export const CompanyContactsEdit: React.FC<CompanyContactsEditProps> = ({
  contact,
  onSave,
  onCancel,
  onFieldChange,
  isLoading,
}) => {
  return (
    <div className={styles.companyContactsEdit}>
      <div className={styles.companyContactsEdit__header}>
        <h3 className={styles.companyContactsEdit__title}>Contacts</h3>
        <div className={styles.companyContactsEdit__actions}>
          <ButtonFlattened
            label="Save changes"
            icon={CheckIcon}
            onClick={onSave}
            disabled={isLoading}
            className={styles.companyContactsEdit__saveButton}
          />
          <ButtonFlattened
            label="Cancel"
            icon={CloseIcon}
            onClick={onCancel}
            disabled={isLoading}
            className={styles.companyContactsEdit__cancelButton}
          />
        </div>
      </div>

      <div className={styles.companyContactsEdit__list}>
        <CompanyContactsField label="Responsible person:">
          <Input
            value={`${contact.firstname} ${contact.lastname}`.trim()}
            onChange={(value) => onFieldChange("responsiblePerson", value)}
            placeholder="Enter full name"
            disabled={isLoading}
            className={styles.companyContactsEdit__input}
          />
        </CompanyContactsField>

        <CompanyContactsField label="Phone number:">
          <Input
            value={contact.phone}
            onChange={(value) => onFieldChange("phoneNumber", value)}
            placeholder="Enter phone number"
            disabled={isLoading}
            className={styles.companyContactsEdit__input}
          />
        </CompanyContactsField>

        <CompanyContactsField label="E-mail:">
          <Input
            value={contact.email}
            onChange={(value) => onFieldChange("email", value)}
            placeholder="Enter email"
            disabled={isLoading}
            className={styles.companyContactsEdit__input}
          />
        </CompanyContactsField>
      </div>
    </div>
  );
};
