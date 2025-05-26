import { renderUnknownIcon } from "../../../components/RenderWithIcon";
import styles from "./index.module.scss";
import * as HoverCard from "@radix-ui/react-hover-card";
interface IInfoComponent {
  infoName: string;
  info?: string;
  complementaryInfo?: string;
}

export default function InfoComponent({
  info,
  infoName,
  complementaryInfo,
}: IInfoComponent) {
  return (
    <div className={styles.infoContainer}>
      <text>{infoName}</text>
      {info && (
        <>
          {complementaryInfo ? (
            <HoverCard.Root>
              <HoverCard.Trigger
                style={{
                  cursor: "pointer",
                }}
              >
                <p>{renderUnknownIcon(info)}</p>
              </HoverCard.Trigger>
              <HoverCard.Portal>
                <HoverCard.Content
                  style={{
                    backgroundColor: "white",
                    width: 140,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 15,
                    border: 1,
                    borderColor: "black",
                    borderBlockStyle: "groove",
                    flexWrap: "wrap",
                    borderRadius: 5,
                    textAlign: "center",
                  }}
                >
                  <p style={{ fontSize: "12px" }}>Dimension: </p>
                  <p style={{ fontSize: "12px" }}>{complementaryInfo}</p>
                  <HoverCard.Arrow />
                </HoverCard.Content>
              </HoverCard.Portal>
            </HoverCard.Root>
          ) : (
            <p>{renderUnknownIcon(info)}</p>
          )}
        </>
      )}
    </div>
  );
}
