import { rootStore } from "@/app/model/root.store";
import type { IUpdateOrganizationRequest } from "@/entities/organization";
import {
  ArrowLeftIcon,
  Button,
  ButtonFilled,
  EditIcon,
  Modal,
  TrashIcon,
} from "@/shared/ui";
import { MainMenu } from "@/widgets/main-menu";
import { OrganizationDetails } from "@/widgets/organization-details/ui/OrganizationDetails";
import { Sidebar } from "@/widgets/sidebar/ui/Sidebar";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import styles from "./OrganizationPage.module.scss";

export const OrganizationPage: React.FC = observer(() => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { organizationStore, contactStore } = rootStore;

  useEffect(() => {
    // Initialize with demo data
    const initializeData = async (): Promise<void> => {
      try {
        await rootStore.authenticate("testuser"); // You'll need to provide the actual username
        await organizationStore.loadOrganization("12");
        if (organizationStore.organization?.contactId) {
          await contactStore.loadContact(
            organizationStore.organization.contactId,
          );
        }
      } catch (error) {
        console.error("Failed to initialize data:", error);
      }
    };

    initializeData();
  }, []);

  const handleUpdateOrganization = async (
    data: IUpdateOrganizationRequest,
  ): Promise<void> => {
    if (organizationStore.organization) {
      await organizationStore.updateOrganization(
        organizationStore.organization.id,
        data,
      );
    }
  };

  const handleDeleteOrganization = async (): Promise<void> => {
    if (organizationStore.organization) {
      await organizationStore.deleteOrganization(
        organizationStore.organization.id,
      );
      setShowDeleteModal(false);
    }
  };

  // TODO: Implement contact editing
  // const handleUpdateContact = async (data: any): Promise<void> => {
  //   if (contactStore.contact) {
  //     await contactStore.updateContact(contactStore.contact.id, data);
  //   }
  // };

  if (!organizationStore.organization) {
    return (
      <div className={styles.organizationPage}>
        <MainMenu />
        <Sidebar />
        <div className={styles.organizationPageContent}>
          <div className={styles.organizationPageLoading}>
            {organizationStore.isLoading
              ? "Loading..."
              : "No organization found"}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.organizationPage}>
      <MainMenu />
      <Sidebar />

      <div className={styles.organizationPageContent}>
        <div className={styles.organizationPageHeader}>
          <ButtonFilled
            icon={ArrowLeftIcon}
            size="normal"
            className={styles.organizationPageBackButton}
            aria-label="Go back"
          />

          <div className={styles.organizationPageTitleSection}>
            <h1 className={styles.organizationPageTitle}>
              {organizationStore.organization.name}
            </h1>
            <div className={styles.organizationPageActions}>
              <ButtonFilled
                icon={EditIcon}
                size="normal"
                aria-label="Edit organization"
              />
              <ButtonFilled
                icon={TrashIcon}
                size="normal"
                onClick={() => setShowDeleteModal(true)}
                aria-label="Delete organization"
              />
            </div>
          </div>
        </div>

        <div className={styles.organizationPageBlocks}>
          <OrganizationDetails
            organization={organizationStore.organization}
            onUpdate={handleUpdateOrganization}
            isLoading={organizationStore.isLoading}
          />

          {contactStore.contact && (
            <div className={styles.organizationPageContactBlock}>
              {/* Contact details will be implemented here */}
              <div className={styles.contactPlaceholder}>
                <h3>Contacts</h3>
                <p>
                  Responsible person: {contactStore.contact.firstname}{" "}
                  {contactStore.contact.lastname}
                </p>
                <p>Phone: {contactStore.contact.phone}</p>
                <p>Email: {contactStore.contact.email}</p>
              </div>
            </div>
          )}

          {organizationStore.organization.photos.length > 0 && (
            <div className={styles.organizationPagePhotosBlock}>
              <h3>Photos</h3>
              <div className={styles.organizationPagePhotos}>
                {organizationStore.organization.photos.map((photo) => (
                  <div
                    key={photo.name}
                    className={styles.organizationPagePhoto}
                  >
                    <img src={photo.thumbpath} alt="" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Modal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <div className={styles.organizationPageDeleteModal}>
          <h2>Remove the Organization?</h2>
          <p>Are you sure you want to remove this Organization?</p>
          <div className={styles.organizationPageDeleteActions}>
            <Button variant="outline" onClick={() => setShowDeleteModal(false)}>
              No
            </Button>
            <Button
              variant="filled"
              onClick={handleDeleteOrganization}
              disabled={organizationStore.isLoading}
            >
              Yes, remove
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
});
