import { IOrganization } from "@/entities/organization";
import { Modal } from "@/shared/ui";
import React from "react";
import { DeleteCompanyForm } from "./DeleteCompanyForm";
import styles from "./DeleteCompanyModal.module.scss";

interface DeleteCompanyModalProps {
  isOpen: boolean;
  organization: IOrganization;
  onClose: () => void;
  onSuccess?: () => void;
}

export const DeleteCompanyModal: React.FC<DeleteCompanyModalProps> = ({
  isOpen,
  organization,
  onClose,
  onSuccess,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={styles.deleteCompanyModal}
    >
      <DeleteCompanyForm
        organization={organization}
        onCancel={onClose}
        onSuccess={onSuccess}
      />
    </Modal>
  );
};

export default DeleteCompanyModal;
