import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Sidebar } from '@/widgets/sidebar/ui/Sidebar';
import { OrganizationDetails } from '@/widgets/organization-details/ui/OrganizationDetails';
import { Button, EditIcon, TrashIcon, ArrowLeftIcon, Modal } from '@/shared/ui';
import { rootStore } from '@/app/model/root.store';
// import styles from './OrganizationPage.module.scss';

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

  const handleUpdateOrganization = async (data: any): Promise<void> => {
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
      <div className="organization-page">
        <Sidebar />
        <div className="organization-page__content">
          <div className="organization-page__loading">
            {organizationStore.isLoading ? 'Loading...' : 'No organization found'}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="organization-page">
      <Sidebar />
      
      <div className="organization-page__content">
        <div className="organization-page__header">
          <Button
            variant="outline"
            size="mini"
            icon={<ArrowLeftIcon size={20} />}
            className="organization-page__back-button"
          />
          
          <div className="organization-page__title-section">
            <h1 className="organization-page__title">
              {organizationStore.organization.name}
            </h1>
            <div className="organization-page__actions">
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

        <div className="organization-page__blocks">
          <OrganizationDetails
            organization={organizationStore.organization}
            onUpdate={handleUpdateOrganization}
            isLoading={organizationStore.isLoading}
          />

          {contactStore.contact && (
            <div className="organization-page__contact-block">
              {/* Contact details will be implemented here */}
              <div className="contact-placeholder">
                <h3>Contacts</h3>
                <p>Responsible person: {contactStore.contact.firstname} {contactStore.contact.lastname}</p>
                <p>Phone: {contactStore.contact.phone}</p>
                <p>Email: {contactStore.contact.email}</p>
              </div>
            </div>
          )}

          {organizationStore.organization.photos.length > 0 && (
            <div className="organization-page__photos-block">
              <h3>Photos</h3>
              <div className="organization-page__photos">
                {organizationStore.organization.photos.map((photo) => (
                  <div key={photo.name} className="organization-page__photo">
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
        <div className="organization-page__delete-modal">
          <h2>Remove the Organization?</h2>
          <p>Are you sure you want to remove this Organization?</p>
          <div className="organization-page__delete-actions">
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
