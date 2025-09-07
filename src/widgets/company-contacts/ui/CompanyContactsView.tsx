import { IContact } from "@/entities/contact";
import { ButtonFlattened, EditIcon } from "@/shared/ui";
import React from "react";
import { formatPhoneNumber } from "../lib/phone-formatter";
import { CompanyContactsField } from "./CompanyContactsField";
import styles from "./CompanyContactsView.module.scss";

interface CompanyContactsViewProps {
  contact: IContact;
  onEdit: () => void;
}

export const CompanyContactsView: React.FC<CompanyContactsViewProps> = ({
  contact,
  onEdit,
}) => {
  return (
    <div className={styles.companyContactsView}>
      <div className={styles.companyContactsView__header}>
        <h3 className={styles.companyContactsView__title}>Contacts</h3>
        <ButtonFlattened
          label="Edit"
          icon={EditIcon}
          onClick={onEdit}
          className={styles.companyContactsView__editButton}
        />
      </div>

      <div className={styles.companyContactsView__list}>
        <CompanyContactsField label="Responsible person:">
          <span className={styles.companyContactsView__value}>
            {contact.firstname} {contact.lastname}
          </span>
        </CompanyContactsField>

        <CompanyContactsField label="Phone number:">
          <span className={styles.companyContactsView__value}>
            {formatPhoneNumber(contact.phone)}
          </span>
        </CompanyContactsField>

        <CompanyContactsField label="E-mail:">
          <span className={styles.companyContactsView__value}>
            {contact.email}
          </span>
        </CompanyContactsField>
      </div>
    </div>
  );
};
