import { rootStore } from "@/app/model/root.store";
import { IOrganization } from "@/entities/organization";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import {
  CompanyDetailsStore,
  ICompanyDetailsData,
} from "../model/company-details.store";
import styles from "./CompanyDetails.module.scss";
import { CompanyDetailsEdit } from "./CompanyDetailsEdit";
import { CompanyDetailsView } from "./CompanyDetailsView";

interface CompanyDetailsProps {
  organization: IOrganization;
  className?: string;
}

export const CompanyDetails: React.FC<CompanyDetailsProps> = observer(
  ({ organization, className = "" }) => {
    const { organizationStore } = rootStore;
    const [store] = React.useState(() => new CompanyDetailsStore());

    // Инициализируем данные для редактирования
    const getInitialData = (): ICompanyDetailsData => ({
      agreementNumber: organization.agreementNumber || "1624/2-24",
      agreementDate: organization.agreementDate || "03.12.2024",
      businessEntity: organization.businessEntity || "Partnership",
      companyType:
        organization.companyType || "Funeral Home, Logistics services",
    });

    const handleEdit = (): void => {
      store.startEditing(getInitialData());
    };

    const handleCancel = (): void => {
      store.cancelEditing();
    };

    const handleFieldChange = (field: string, value: string): void => {
      store.updateField(field as keyof ICompanyDetailsData, value);
    };

    const handleSave = async (): Promise<void> => {
      if (!store.editedData) return;

      store.setLoading(true);
      try {
        // Обновляем данные организации
        await organizationStore.updateOrganization(organization.id, {
          agreementNumber: store.editedData.agreementNumber,
          agreementDate: store.editedData.agreementDate,
          businessEntity: store.editedData.businessEntity,
          companyType: store.editedData.companyType,
        });

        store.cancelEditing();
        console.log("Company details updated successfully");
      } catch (error) {
        console.error("Failed to update company details:", error);
        // TODO: показать ошибку пользователю
      } finally {
        store.setLoading(false);
      }
    };

    // Сбрасываем состояние при смене организации
    useEffect(() => {
      store.reset();
    }, [organization.id, store]);

    return (
      <div className={`${styles.companyDetails} ${className}`}>
        {store.isEditing ? (
          <CompanyDetailsEdit
            organization={{
              ...organization,
              ...(store.editedData || {}),
            }}
            onSave={handleSave}
            onCancel={handleCancel}
            onFieldChange={handleFieldChange}
            isLoading={store.isLoading}
          />
        ) : (
          <CompanyDetailsView organization={organization} onEdit={handleEdit} />
        )}
      </div>
    );
  },
);

export default CompanyDetails;
