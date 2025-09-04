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
    // const { navigationStore } = rootStore; // TODO: Будет использоваться для управления активными модулями

    const menuClass = [styles.mainMenu, className].filter(Boolean).join(" ");

    const handleModuleClick = (moduleId: string): void => {
      // TODO: В будущем это будет переключать модули (Companies, Search, etc.)
      console.log(`Main menu module clicked: ${moduleId}`);
    };

    const handleActionClick = (action: string): void => {
      // TODO: Обработка settings и signout
      console.log(`Main menu action: ${action}`);
    };

    return (
      <aside className={menuClass}>
        {/* Modules Section */}
        <div className={styles.mainMenuModules}>
          {/* Oak Tree Logo */}
          <OakTreeLogo
            size={36}
            color="#FFFFFF"
            className={styles.mainMenuLogo}
          />

          {/* Icons List */}
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

        {/* Additional Section */}
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
