import React, { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className = "",
}) => {
  const handleOverlayClick = useCallback(
    (event: React.MouseEvent): void => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    },
    [onClose],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const modalClass = [styles.modal, className].filter(Boolean).join(" ");

  return createPortal(
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={modalClass}>{children}</div>
    </div>,
    document.body,
  );
};
