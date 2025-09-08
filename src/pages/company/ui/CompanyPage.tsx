import { rootStore } from "@/app/model/root.store";
import { CompanyContacts } from "@/widgets/company-contacts";
import { CompanyDetails } from "@/widgets/company-details";
import { CompanyPhotos } from "@/widgets/company-photos";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { CompanyHeader } from "./CompanyHeader";
import styles from "./CompanyPage.module.scss";

export const CompanyPage: React.FC = observer(() => {
  const { organizationStore, contactStore } = rootStore;

  useEffect(() => {
    const initializeData = async (): Promise<void> => {
      try {
        await rootStore.authenticate("testuser");
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

  if (!organizationStore.organization) {
    return (
      <div className={styles.companyPage}>
        <main className={styles.companyPage__content}>
          <div className={styles.companyPage__loading}>
            {organizationStore.isLoading
              ? "Loading..."
              : "No organization found"}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.companyPage}>
      <main className={styles.companyPage__content}>
        <CompanyHeader
          organization={organizationStore.organization}
          className={styles.companyPage__header}
        />
        <section className={styles.companyPage__body}>
          <CompanyDetails
            organization={organizationStore.organization}
            className={styles.companyPage__details}
          />
          {contactStore.contact && (
            <CompanyContacts
              contact={contactStore.contact}
              className={styles.companyPage__contacts}
            />
          )}
          <CompanyPhotos
            organizationId={organizationStore.organization.id}
            photos={organizationStore.organization.photos}
            className={styles.companyPage__photos}
          />
        </section>
      </main>
    </div>
  );
});

export default CompanyPage;
