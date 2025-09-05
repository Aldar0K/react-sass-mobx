import React from "react";
import { CompanyHeader } from "./CompanyHeader";
import styles from "./CompanyPage.module.scss";

export const CompanyPage: React.FC = () => {
  return (
    <div className={styles.companyPage}>
      <main className={styles.companyPageContent}>
        <CompanyHeader />
        <section className={styles.companyPageBody}>
          {/* TODO: заполнить блоки согласно макету в следующих шагах */}
        </section>
      </main>
    </div>
  );
};

export default CompanyPage;
