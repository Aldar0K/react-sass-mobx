import {
  ButtonSideMenu,
  CompanyIcon,
  OakTreeLogo,
  SearchIcon,
  SettingsIcon,
  SignOutIcon,
} from "@/shared/ui";
import { observer } from "mobx-react-lite";
import React from "react";
import styles from "./MainMenu.module.scss";

interface MainMenuProps {
  className?: string;
}

export const MainMenu: React.FC<MainMenuProps> = observer(
  ({ className = "" }) => {
    const menuClass = [styles.mainMenu, className].filter(Boolean).join(" ");

    const handleModuleClick = (moduleId: string): void => {
      console.log(`Main menu module clicked: ${moduleId}`);
    };

    const handleActionClick = (action: string): void => {
      console.log(`Main menu action: ${action}`);
    };

    return (
      <aside className={menuClass}>
        <div className={styles.mainMenuModules}>
          <OakTreeLogo
            size={36}
            color="#FFFFFF"
            className={styles.mainMenuLogo}
          />

          <div className={styles.mainMenuIconsList}>
            <ButtonSideMenu
              icon={CompanyIcon}
              isActive={true}
              onClick={() => handleModuleClick("company")}
              aria-label="Company module"
            />

            <ButtonSideMenu
              icon={SearchIcon}
              onClick={() => handleModuleClick("search")}
              aria-label="Search module"
            />
          </div>
        </div>

        <div className={styles.mainMenuAdditional}>
          <div className={styles.mainMenuSeparator}></div>

          <ButtonSideMenu
            icon={SettingsIcon}
            onClick={() => handleActionClick("settings")}
            aria-label="Settings"
          />

          <ButtonSideMenu
            icon={SignOutIcon}
            onClick={() => handleActionClick("signout")}
            aria-label="Sign out"
          />
        </div>
      </aside>
    );
  },
);
