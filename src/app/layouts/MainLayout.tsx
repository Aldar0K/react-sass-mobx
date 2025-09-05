import { MainMenu } from "@/widgets/main-menu";
import { Sidebar } from "@/widgets/sidebar";
import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss";

export const MainLayout: React.FC = () => {
  return (
    <div className={styles.mainLayout}>
      <MainMenu />
      <Sidebar />
      <div className={styles.mainLayoutContent}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
