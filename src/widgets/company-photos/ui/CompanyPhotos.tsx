import { rootStore } from "@/app/model/root.store";
import { IPhoto } from "@/entities/organization";
import { observer } from "mobx-react-lite";
import React from "react";
import { AddPhotoButton } from "./AddPhotoButton";
import { CompanyPhotoItem } from "./CompanyPhotoItem";
import styles from "./CompanyPhotos.module.scss";

interface CompanyPhotosProps {
  organizationId: string;
  photos: IPhoto[];
  className?: string;
}

export const CompanyPhotos: React.FC<CompanyPhotosProps> = observer(
  ({ organizationId, photos, className }) => {
    const { organizationStore } = rootStore;

    const onPhotoAdd = async (file: File): Promise<void> => {
      try {
        await organizationStore.uploadPhoto(organizationId, file);
      } catch (error) {
        console.error("Error adding photo:", error);
      }
    };

    const onRemove = async (photoName: string): Promise<void> => {
      try {
        await organizationStore.deletePhoto(organizationId, photoName);
      } catch (error) {
        console.error("Error removing photo:", error);
      }
    };

    return (
      <div className={`${styles.companyPhotos} ${className}`}>
        <div className={styles.companyPhotos__header}>
          <h3 className={styles.companyPhotos__title}>Photos</h3>
          <AddPhotoButton
            onPhotoAdd={onPhotoAdd}
            disabled={organizationStore.isLoading}
          />
        </div>

        {photos.length > 0 && (
          <div className={styles.companyPhotos__photos}>
            {photos.map((photo) => (
              <CompanyPhotoItem
                key={photo.name}
                photo={photo}
                onRemove={onRemove}
              />
            ))}
          </div>
        )}
      </div>
    );
  },
);
