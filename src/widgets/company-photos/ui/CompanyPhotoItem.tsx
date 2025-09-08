import React from "react";
import { IPhoto } from "../../../entities/organization/model/types";
import { ButtonFilled } from "../../../shared/ui/ButtonFilled/ButtonFilled";
import { TrashIcon } from "../../../shared/ui/Icons/Icons";
import styles from "./CompanyPhotoItem.module.scss";

interface CompanyPhotoItemProps {
  photo: IPhoto;
  onRemove: (photoName: string) => void;
}

export const CompanyPhotoItem: React.FC<CompanyPhotoItemProps> = ({
  photo,
  onRemove,
}) => {
  const handleRemove = (): void => {
    onRemove(photo.name);
  };

  return (
    <div className={styles.companyPhotoItem}>
      <img
        src={photo.filepath}
        alt={photo.name}
        className={styles.companyPhotoItem__image}
      />
      <ButtonFilled
        icon={TrashIcon}
        size="mini"
        onClick={handleRemove}
        className={styles.companyPhotoItem__removeButton}
      />
    </div>
  );
};
