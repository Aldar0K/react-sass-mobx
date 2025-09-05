import React from "react";
import styles from "./CompanyPage.module.scss";

interface CompanyPageProps {
  className?: string;
}

export const CompanyPage: React.FC<CompanyPageProps> = ({ className = "" }) => {
  const pageClass = [styles.companyPage, className].filter(Boolean).join(" ");

  return (
    <div className={pageClass}>
      <main className={styles.companyPageContent}>
        {/* Каркас: хедер и контентные зоны заполним позже */}
        <header className={styles.companyPageHeader}>
          <div className={styles.companyPageHeaderTitle}>
            <h1>Company</h1>
            <p>Details</p>
          </div>
        </header>
        <section className={styles.companyPageBody}>
          {/* TODO: заполнить блоки согласно макету в следующих шагах */}
        </section>
      </main>
    </div>
  );
};

export default CompanyPage;
