import { IoIosArrowForward } from "react-icons/io";
import styles from "./index.module.scss";
import { useCharacterStore } from "../../../stores/characterStore";
import { useThemeStore } from "../../../stores/useThemeStore";

interface ISideBarComponent {
  characterId: string;
  characterName?: string;
  speciesName?: string;
  setIsVisible: (value: boolean) => void;
}

export default function SideBarComponent({
  characterName,
  speciesName,
  characterId,
  setIsVisible,
}: ISideBarComponent) {
  const { theme } = useThemeStore();
  const { setSelectedCharacterId } = useCharacterStore();
  return (
    <div
      className={styles.SideBarContainer}
      onClick={() => {
        setSelectedCharacterId(characterId);
        setIsVisible(true);
      }}
    >
      <div className={`${styles.infoContainer}`}>
        <div className={theme === "dark" ? styles.dark : ""}>
          <h3>{characterName}</h3>
          <text>{speciesName}</text>
        </div>
      </div>
      <IoIosArrowForward />
    </div>
  );
}
