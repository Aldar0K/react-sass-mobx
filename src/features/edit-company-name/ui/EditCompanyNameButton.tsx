import { IOrganization } from "@/entities/organization";
import { ButtonIcon, EditIcon } from "@/shared/ui";
import React, { useState } from "react";
import { EditCompanyNameModal } from "./EditCompanyNameModal";

interface EditCompanyNameButtonProps {
  organization: IOrganization;
  className?: string;
  onSuccess?: () => void;
}

export const EditCompanyNameButton: React.FC<EditCompanyNameButtonProps> = ({
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
        icon={EditIcon}
        size={32}
        onClick={handleOpenModal}
        aria-label="Edit company name"
        className={className}
      />

      <EditCompanyNameModal
        isOpen={isModalOpen}
        organization={organization}
        onClose={handleCloseModal}
        onSuccess={handleSuccess}
      />
    </>
  );
};

export default EditCompanyNameButton;
