import { IOrganization } from "@/entities/organization";
import { Modal } from "@/shared/ui";
import React from "react";
import { EditCompanyNameForm } from "./EditCompanyNameForm";
import styles from "./EditCompanyNameModal.module.scss";

interface EditCompanyNameModalProps {
  isOpen: boolean;
  organization: IOrganization;
  onClose: () => void;
  onSuccess?: () => void;
}

export const EditCompanyNameModal: React.FC<EditCompanyNameModalProps> = ({
  isOpen,
  organization,
  onClose,
  onSuccess,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={styles.editCompanyNameModal}
    >
      <EditCompanyNameForm
        organization={organization}
        onCancel={onClose}
        onSuccess={onSuccess}
      />
    </Modal>
  );
};

export default EditCompanyNameModal;
