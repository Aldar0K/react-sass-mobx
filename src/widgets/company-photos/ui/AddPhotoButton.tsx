import { AddPhotoIcon, ButtonFlattened } from "@/shared/ui";
import React, { useRef } from "react";
import styles from "./AddPhotoButton.module.scss";

interface AddPhotoButtonProps {
  onPhotoAdd: (file: File) => void;
  disabled?: boolean;
}

export const AddPhotoButton: React.FC<AddPhotoButtonProps> = ({
  onPhotoAdd,
  disabled = false,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = (): void => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const file = event.target.files?.[0];
    if (file) {
      onPhotoAdd(file);
      // Reset input value to allow selecting the same file again
      event.target.value = "";
    }
  };

  return (
    <div className={styles.addPhotoButton}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className={styles.addPhotoButton__input}
      />
      <ButtonFlattened
        label="Add"
        icon={AddPhotoIcon}
        onClick={handleClick}
        disabled={disabled}
      />
    </div>
  );
};
