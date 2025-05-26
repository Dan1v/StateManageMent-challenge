import { staticImages } from "../../../assets/staticImages";
import styles from "./index.module.scss";
export default function LoaderIcon() {
  return (
    <img
      src={staticImages.loadingIcong}
      className={styles.spinner}
      width={40}
      height={40}
    />
  );
}
