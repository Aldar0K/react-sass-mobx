import { rootStore } from '@/app/model/root.store';
import type { IUpdateOrganizationRequest } from '@/entities/organization';
import { ArrowLeftIcon, Button, EditIcon, Modal, TrashIcon } from '@/shared/ui';
import { OrganizationDetails } from '@/widgets/organization-details/ui/OrganizationDetails';
import { Sidebar } from '@/widgets/sidebar/ui/Sidebar';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import styles from './OrganizationPage.module.scss';

export const OrganizationPage: React.FC = observer(() => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { organizationStore, contactStore } = rootStore;

  useEffect(() => {
    // Initialize with demo data
    const initializeData = async (): Promise<void> => {
      try {
        await rootStore.authenticate('testuser'); // You'll need to provide the actual username
        await organizationStore.loadOrganization('12');
        if (organizationStore.organization?.contactId) {
          await contactStore.loadContact(organizationStore.organization.contactId);
        }
      } catch (error) {
        console.error('Failed to initialize data:', error);
      }
    };

    initializeData();
  }, []);

  const handleUpdateOrganization = async (data: IUpdateOrganizationRequest): Promise<void> => {
    if (organizationStore.organization) {
      await organizationStore.updateOrganization(organizationStore.organization.id, data);
    }
  };

  const handleDeleteOrganization = async (): Promise<void> => {
    if (organizationStore.organization) {
      await organizationStore.deleteOrganization(organizationStore.organization.id);
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
        <Sidebar />
        <div className={styles.organizationPage__content}>
          <div className={styles.organizationPage__loading}>
            {organizationStore.isLoading ? 'Loading...' : 'No organization found'}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.organizationPage}>
      <Sidebar />
      
      <div className={styles.organizationPage__content}>
        <div className={styles.organizationPage__header}>
          <Button
            variant="outline"
            size="mini"
            icon={<ArrowLeftIcon size={20} />}
            className={styles.organizationPage__backButton}
          />
          
          <div className={styles.organizationPage__titleSection}>
            <h1 className={styles.organizationPage__title}>
              {organizationStore.organization.name}
            </h1>
            <div className={styles.organizationPage__actions}>
              <Button
                variant="outline"
                size="mini"
                icon={<EditIcon size={20} />}
              />
              <Button
                variant="outline"
                size="mini"
                icon={<TrashIcon size={20} />}
                onClick={() => setShowDeleteModal(true)}
              />
            </div>
          </div>
        </div>

        <div className={styles.organizationPage__blocks}>
          <OrganizationDetails
            organization={organizationStore.organization}
            onUpdate={handleUpdateOrganization}
            isLoading={organizationStore.isLoading}
          />

          {contactStore.contact && (
            <div className={styles.organizationPage__contactBlock}>
              {/* Contact details will be implemented here */}
              <div className={styles.contactPlaceholder}>
                <h3>Contacts</h3>
                <p>Responsible person: {contactStore.contact.firstname} {contactStore.contact.lastname}</p>
                <p>Phone: {contactStore.contact.phone}</p>
                <p>Email: {contactStore.contact.email}</p>
              </div>
            </div>
          )}

          {organizationStore.organization.photos.length > 0 && (
            <div className={styles.organizationPage__photosBlock}>
              <h3>Photos</h3>
              <div className={styles.organizationPage__photos}>
                {organizationStore.organization.photos.map((photo) => (
                  <div key={photo.name} className={styles.organizationPage__photo}>
                    <img src={photo.thumbpath} alt="" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Modal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
      >
        <div className={styles.organizationPage__deleteModal}>
          <h2>Remove the Organization?</h2>
          <p>Are you sure you want to remove this Organization?</p>
          <div className={styles.organizationPage__deleteActions}>
            <Button
              variant="outline"
              onClick={() => setShowDeleteModal(false)}
            >
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
