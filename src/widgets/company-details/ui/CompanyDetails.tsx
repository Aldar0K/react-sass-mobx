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
      type: organization.type || ["funeral_home", "logistics_services"],
    });

    const handleEdit = (): void => {
      store.startEditing(getInitialData());
    };

    const handleCancel = (): void => {
      store.cancelEditing();
    };

    const handleFieldChange = (
      field: string,
      value: string | string[],
    ): void => {
      store.updateField(field as keyof ICompanyDetailsData, value);
    };

    const handleSave = async (): Promise<void> => {
      if (!store.editedData) return;

      store.setLoading(true);
      try {
        const updateData = {
          name: organization.name,
          shortName: organization.shortName,
          businessEntity: store.editedData.businessEntity || "",
          contract: {
            no: store.editedData.agreementNumber || organization.contract.no,
            issue_date:
              store.editedData.agreementDate ||
              organization.contract.issue_date,
          },
          type: store.editedData.type,
        };

        // Обновляем данные организации
        const updatedOrganization = await organizationStore.updateOrganization(
          organization.id,
          updateData,
        );

        // Обновляем поля agreementNumber и agreementDate из отправленных данных,
        // так как API не возвращает эти поля в response
        const finalOrganization = {
          ...updatedOrganization,
          agreementNumber: store.editedData.agreementNumber,
          agreementDate: store.editedData.agreementDate,
        };

        // Обновляем данные в store с правильными полями agreement
        organizationStore.setOrganization(finalOrganization);

        store.cancelEditing();
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
