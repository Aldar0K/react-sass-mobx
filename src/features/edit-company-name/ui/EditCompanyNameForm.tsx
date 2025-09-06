import { rootStore } from "@/app/model/root.store";
import { IOrganization } from "@/entities/organization";
import { ButtonFilled, ButtonOutline, Input } from "@/shared/ui";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import styles from "./EditCompanyNameForm.module.scss";

interface EditCompanyNameFormProps {
  organization: IOrganization;
  onCancel: () => void;
  onSuccess?: () => void;
}

export const EditCompanyNameForm: React.FC<EditCompanyNameFormProps> = observer(
  ({ organization, onCancel, onSuccess }) => {
    const { organizationStore } = rootStore;
    const [companyName, setCompanyName] = useState(organization.name);
    const [error, setError] = useState<string | undefined>(undefined);

    const handleCompanyNameChange = (value: string): void => {
      setCompanyName(value);
      setError(undefined);
    };

    const isSaveDisabled =
      !companyName.trim() ||
      companyName.trim() === organization.name ||
      organizationStore.isLoading;

    const handleSave = async (): Promise<void> => {
      if (!companyName.trim()) {
        setError("Company name is required");
        return;
      }

      if (companyName.trim() === organization.name) {
        onCancel();
        return;
      }

      try {
        await organizationStore.updateOrganization(organization.id, {
          name: companyName.trim(),
        });
        onSuccess?.();
      } catch (error) {
        console.error("Failed to update organization:", error);
        setError("Failed to update company name");
      }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      handleSave();
    };

    return (
      <form className={styles.editCompanyNameForm} onSubmit={handleSubmit}>
        <h2 className={styles.editCompanyNameForm__title}>
          Specify the Organization's name
        </h2>

        <div className={styles.editCompanyNameForm__field}>
          <Input
            value={companyName}
            onChange={handleCompanyNameChange}
            placeholder="Enter company name"
            error={error}
            disabled={organizationStore.isLoading}
          />
        </div>

        <div className={styles.editCompanyNameForm__actions}>
          <ButtonOutline
            type="reset"
            label="Cancel"
            size="normal"
            onClick={onCancel}
            disabled={organizationStore.isLoading}
            className={styles.editCompanyNameForm__cancelButton}
          />
          <ButtonFilled
            type="submit"
            label="Save changes"
            size="normal"
            disabled={isSaveDisabled}
            className={styles.editCompanyNameForm__saveButton}
          />
        </div>
      </form>
    );
  },
);

export default EditCompanyNameForm;
