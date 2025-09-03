import React from 'react';
import { observer } from 'mobx-react-lite';
import { CompanyIcon, OakTreeLogo } from '@/shared/ui';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = observer(({ className = '' }) => {
  const sidebarClass = [
    styles.sidebar,
    className,
  ].filter(Boolean).join(' ');

  return (
    <aside className={sidebarClass}>
      <div className={styles.sidebar__header}>
        <div className={styles.sidebar__logo}>
          <OakTreeLogo size={36} />
        </div>
        <div className={styles.sidebar__title}>
          <h2 className={styles.sidebar__company}>Oak Tree Cemetery</h2>
          <p className={styles.sidebar__subtitle}>Process Manager</p>
        </div>
      </div>

      <div className={styles.sidebar__divider}></div>

      <nav className={styles.sidebar__nav}>
        <div className={`${styles.sidebar__navItem} ${styles['sidebar__navItem--active']}`}>
          <CompanyIcon size={20} />
          <span>Organizations</span>
        </div>
        <div className={styles.sidebar__navItem}>
          <CompanyIcon size={20} />
          <span>Contractors</span>
        </div>
        <div className={styles.sidebar__navItem}>
          <CompanyIcon size={20} />
          <span>Clients</span>
        </div>
      </nav>

      <div className={styles.sidebar__footer}>
        <p className={styles.sidebar__copyright}>
          All Funeral Services © 2015-2025
        </p>
      </div>
    </aside>
  );
});