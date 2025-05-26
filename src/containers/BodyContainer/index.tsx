import styles from "./index.module.scss";
import InfoComponent from "./InfoComponent";
import { useCharacterStore } from "../../stores/characterStore";
import { GET_CHARACTER } from "../../graphql/getCharacters";
import { useQuery } from "@apollo/client";
import type { CharacterData } from "../types";
import { SkeletonLoader } from "../../components";

import * as HoverCard from "@radix-ui/react-hover-card";

export default function BodyContainer() {
  const { selectedCharacterId } = useCharacterStore();

  const { data, loading, error } = useQuery<CharacterData>(GET_CHARACTER, {
    variables: { id: selectedCharacterId },
    skip: !selectedCharacterId,
  });
  if (!selectedCharacterId)
    return (
      <div className={styles.nonCharacter}>
        <p>Select a character</p>
      </div>
    );
  if (loading)
    return (
      <div className={styles.BodyContainer}>
        <div className={styles.infoContainer}>
          <div className={styles.title}>
            <h3>General Information</h3>
          </div>
          <div className={styles.generalInformation}>
            <div className={styles.firstInformation}>
              <SkeletonLoader height="47px" />
              <SkeletonLoader height="47px" />
              <SkeletonLoader height="47px" />
              <SkeletonLoader height="47px" />
            </div>
            <div>
              <SkeletonLoader height="200px" width="200px" />
            </div>
          </div>
          <div className={styles.title}>
            <h3>Complementary Information </h3>
          </div>
          <div className={styles.complementaryInfo}>
            <div className={styles.secondInfo}>
              <SkeletonLoader height="47px" />
              <SkeletonLoader height="47px" />
              <SkeletonLoader height="47px" />
            </div>
          </div>
        </div>
      </div>
    );
  if (error) return <p>Error al cargar detalle</p>;
  const { character } = data!;
  return (
    <div className={styles.BodyContainer}>
      <div className={styles.infoContainer}>
        <div className={styles.title}>
          <h3>General Information</h3>
        </div>
        <div className={styles.generalInformation}>
          <div className={styles.firstInformation}>
            <InfoComponent info={character.name} infoName="Name" />
            <InfoComponent info={character.species} infoName="Species" />
            <InfoComponent info={character.status} infoName="Status" />
            <InfoComponent info={character.gender} infoName="Gender" />
          </div>
          <div>
            <img src={character.image} />
          </div>
        </div>
        <div className={styles.title}>
          <h3>Complementary Information </h3>
        </div>
        <div className={styles.complementaryInfo}>
          <div className={styles.secondInfo}>
            <InfoComponent
              info={character.location.name}
              infoName="Location"
              complementaryInfo={character.location.dimension}
            />
            <InfoComponent
              info={character.origin.name}
              infoName="Origin"
              complementaryInfo={character.origin.dimension}
            />
            <div className={styles.episodesContainer}>
              <text>Episodes</text>
              <div className={styles.episodesMap}>
                {character.episode.slice(0, 5).map((episode) => (
                  <HoverCard.Root>
                    <HoverCard.Trigger
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <div key={episode.id} className={styles.episodeItem}>
                        <text>{episode.episode}</text>
                      </div>
                    </HoverCard.Trigger>
                    <HoverCard.Portal>
                      <HoverCard.Content
                        style={{
                          backgroundColor: "white",
                          width: 180,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: 15,
                          border: "1px",
                          borderColor: "black",
                          borderBlockStyle: "groove",
                          flexWrap: "wrap",
                          borderRadius: 5,
                          textAlign: "center",
                        }}
                      >
                        <p style={{ fontSize: "12px" }}>Episode Name: </p>
                        <p style={{ fontSize: "12px" }}>{episode.name}</p>
                        <HoverCard.Arrow />
                      </HoverCard.Content>
                    </HoverCard.Portal>
                  </HoverCard.Root>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
