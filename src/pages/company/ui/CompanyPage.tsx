import { rootStore } from "@/app/model/root.store";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { CompanyHeader } from "./CompanyHeader";
import styles from "./CompanyPage.module.scss";

export const CompanyPage: React.FC = observer(() => {
  const { organizationStore, contactStore } = rootStore;

  useEffect(() => {
    // Initialize with demo data
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

  // const handleUpdateOrganization = async (
  //   data: IUpdateOrganizationRequest,
  // ): Promise<void> => {
  //   if (organizationStore.organization) {
  //     await organizationStore.updateOrganization(
  //       organizationStore.organization.id,
  //       data,
  //     );
  //   }
  // };

  // const handleDeleteOrganization = async (): Promise<void> => {
  //   if (organizationStore.organization) {
  //     await organizationStore.deleteOrganization(
  //       organizationStore.organization.id,
  //     );
  //     setShowDeleteModal(false);
  //   }
  // };

  if (!organizationStore.organization) {
    return (
      <div className={styles.companyPage}>
        <main className={styles.companyPageContent}>
          <div className={styles.companyPageLoading}>
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
      <main className={styles.companyPageContent}>
        <CompanyHeader organization={organizationStore.organization} />
        <section className={styles.companyPageBody}>
          {/* TODO: заполнить блоки согласно макету в следующих шагах */}
        </section>
      </main>
    </div>
  );
});

export default CompanyPage;
