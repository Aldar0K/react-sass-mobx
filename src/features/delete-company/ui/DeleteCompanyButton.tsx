import { IOrganization } from "@/entities/organization";
import { ButtonIcon, TrashIcon } from "@/shared/ui";
import React, { useState } from "react";
import { DeleteCompanyModal } from "./DeleteCompanyModal";

interface DeleteCompanyButtonProps {
  organization: IOrganization;
  className?: string;
  onSuccess?: () => void;
}

export const DeleteCompanyButton: React.FC<DeleteCompanyButtonProps> = ({
  organization,
  className = "",
  onSuccess,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (): void => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  const handleSuccess = (): void => {
    setIsModalOpen(false);
    onSuccess?.();
  };

  return (
    <>
      <ButtonIcon
        icon={TrashIcon}
        size={32}
        color="red"
        onClick={handleOpenModal}
        aria-label="Delete company"
        className={className}
      />

      <DeleteCompanyModal
        isOpen={isModalOpen}
        organization={organization}
        onClose={handleCloseModal}
        onSuccess={handleSuccess}
      />
    </>
  );
};

export default DeleteCompanyButton;
