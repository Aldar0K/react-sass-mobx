import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = observer(
  ({ isOpen, onClose, children, className = "" }) => {
    const handleOverlayClick = (event: React.MouseEvent): void => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    useEffect(() => {
      if (isOpen) {
        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";
      }

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "unset";
      };
    }, [isOpen]);

    if (!isOpen) return null;

    const modalClass = [styles.modal, className].filter(Boolean).join(" ");

    return createPortal(
      <div className={styles.modalOverlay} onClick={handleOverlayClick}>
        <div className={modalClass}>{children}</div>
      </div>,
      document.body,
    );
  },
);
