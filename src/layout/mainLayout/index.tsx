import styles from "./index.module.scss";
import { BodyContainer, SideBarContainer } from "../../containers";
import { useThemeStore } from "../../stores/useThemeStore";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function MainLayout() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.navBarContainer}>
        <div className={styles.navBarbutton}>
          <h1>Ravn Rick & Morty Registry</h1>
        </div>
        <button
          className={styles.toggleTheme}
          onClick={toggleTheme}
          aria-label={
            theme === "light" ? "Cambiar a modo oscuro" : "Cambiar a modo claro"
          }
        >
          {theme === "light" ? (
            <MdDarkMode size={24} color="white" />
          ) : (
            <MdLightMode size={24} color="white" />
          )}
        </button>
      </div>
      <div className={styles.infoContainer}>
        <div
          className={`${styles.sideBarContainer}`}
          // style={{ display: showBody ? "none" : "block" }}
        >
          <SideBarContainer />
        </div>
        <div
          className={styles.bodyContainer}
          // style={{ display: showBody ? "block" : "none" }}
        >
          <BodyContainer />
        </div>
      </div>
    </div>
  );
}
