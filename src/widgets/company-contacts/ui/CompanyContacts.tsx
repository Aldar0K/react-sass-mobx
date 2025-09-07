import { rootStore } from "@/app/model/root.store";
import { IContact } from "@/entities/contact";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import {
  CompanyContactsStore,
  ICompanyContactsData,
} from "../model/company-contacts.store";
import styles from "./CompanyContacts.module.scss";
import { CompanyContactsEdit } from "./CompanyContactsEdit";
import { CompanyContactsView } from "./CompanyContactsView";

interface CompanyContactsProps {
  contact: IContact;
  className?: string;
}

export const CompanyContacts: React.FC<CompanyContactsProps> = observer(
  ({ contact, className = "" }) => {
    const { contactStore } = rootStore;
    const [store] = React.useState(() => new CompanyContactsStore());

    // Инициализируем данные для редактирования
    const getInitialData = (): ICompanyContactsData => ({
      responsiblePerson: `${contact.firstname} ${contact.lastname}`,
      phoneNumber: contact.phone,
      email: contact.email,
    });

    const handleEdit = (): void => {
      store.startEditing(getInitialData());
    };

    const handleCancel = (): void => {
      store.cancelEditing();
    };

    const handleFieldChange = (field: string, value: string): void => {
      store.updateField(field as keyof ICompanyContactsData, value);
    };

    const handleSave = async (): Promise<void> => {
      if (!store.editedData) return;

      store.setLoading(true);
      try {
        const updateData = {
          firstname: store.editedData.responsiblePerson.split(" ")[0] || "",
          lastname:
            store.editedData.responsiblePerson.split(" ").slice(1).join(" ") ||
            "",
          phone: store.editedData.phoneNumber,
          email: store.editedData.email,
        };

        // Обновляем данные контакта
        const updatedContact = await contactStore.updateContact(
          contact.id,
          updateData,
        );

        // Обновляем данные в store с правильными полями
        const finalContact = {
          ...updatedContact,
          firstname: store.editedData.responsiblePerson.split(" ")[0] || "",
          lastname:
            store.editedData.responsiblePerson.split(" ").slice(1).join(" ") ||
            "",
          phone: store.editedData.phoneNumber,
          email: store.editedData.email,
        };

        // Обновляем данные в store контакта
        contactStore.setContact(finalContact);

        store.cancelEditing();
      } catch (error) {
        console.error("Failed to update contact:", error);
        // TODO: показать ошибку пользователю
      } finally {
        store.setLoading(false);
      }
    };

    // Сбрасываем состояние при смене контакта
    useEffect(() => {
      store.reset();
    }, [contact.id, store]);

    return (
      <div className={`${styles.companyContacts} ${className}`}>
        {store.isEditing ? (
          <CompanyContactsEdit
            contact={{
              ...contact,
              ...(store.editedData
                ? {
                    firstname:
                      store.editedData.responsiblePerson.split(" ")[0] || "",
                    lastname:
                      store.editedData.responsiblePerson
                        .split(" ")
                        .slice(1)
                        .join(" ") || "",
                    phone: store.editedData.phoneNumber,
                    email: store.editedData.email,
                  }
                : {}),
            }}
            onSave={handleSave}
            onCancel={handleCancel}
            onFieldChange={handleFieldChange}
            isLoading={store.isLoading}
          />
        ) : (
          <CompanyContactsView contact={contact} onEdit={handleEdit} />
        )}
      </div>
    );
  },
);

export default CompanyContacts;
