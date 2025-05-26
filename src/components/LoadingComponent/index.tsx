import styles from "./index.module.scss";
import LoaderIcon from "./LoadingIcon";

export default function LoadingComponent() {
  return (
    <div className={styles.loadingContainer}>
      <div>
        <LoaderIcon />
      </div>
      <p>Loading</p>
    </div>
  );
}
