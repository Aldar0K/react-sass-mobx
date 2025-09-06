import { rootStore } from "@/app/model/root.store";
import { IOrganization } from "@/entities/organization";
import { ButtonFilled, ButtonOutline } from "@/shared/ui";
import { observer } from "mobx-react-lite";
import React from "react";
import styles from "./DeleteCompanyForm.module.scss";

interface DeleteCompanyFormProps {
  organization: IOrganization;
  onCancel: () => void;
  onSuccess?: () => void;
}

export const DeleteCompanyForm: React.FC<DeleteCompanyFormProps> = observer(
  ({ organization, onCancel, onSuccess }) => {
    const { organizationStore } = rootStore;

    const handleDelete = async (): Promise<void> => {
      try {
        await organizationStore.deleteOrganization(organization.id);
        console.log("Company deleted successfully");
        onSuccess?.();
      } catch (error) {
        console.error("Failed to delete organization:", error);
        // TODO: показать ошибку пользователю
      }
    };

    return (
      <div className={styles.deleteCompanyForm}>
        <h2 className={styles.deleteCompanyForm__title}>
          Remove the Organization?
        </h2>

        <p className={styles.deleteCompanyForm__description}>
          Are you sure you want to remove this Organozation?
        </p>

        <div className={styles.deleteCompanyForm__actions}>
          <ButtonOutline
            label="No"
            size="normal"
            onClick={onCancel}
            disabled={organizationStore.isLoading}
            className={styles.deleteCompanyForm__cancelButton}
          />
          <ButtonFilled
            label="Yes, remove"
            size="normal"
            onClick={handleDelete}
            disabled={organizationStore.isLoading}
            className={styles.deleteCompanyForm__removeButton}
          />
        </div>
      </div>
    );
  },
);

export default DeleteCompanyForm;
