import React from 'react';
import { observer } from 'mobx-react-lite';
import { OrganizationPage } from '@/pages/organization/ui/OrganizationPage';
import '@/shared/styles/global.scss';
import styles from './styles/App.module.scss';

const App: React.FC = observer(() => {
  return (
    <div className={styles.app}>
      <OrganizationPage />
    </div>
  );
});

export default App;
