import styles from "./index.module.scss";
import SideBarComponent from "./SideBarComponent";
import { gql, useQuery } from "@apollo/client";
import React from "react";
import type { CharactersData, Character } from "./types";
import { LoadingComponent } from "../../components";

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      info {
        next
      }
      results {
        id
        name
        species
      }
    }
  }
`;

export default function SideBarContainer() {
  const { data, loading, error, fetchMore } = useQuery<CharactersData>(
    GET_CHARACTERS,
    {
      variables: { page: 1 },
    }
  );

  const [characters, setCharacters] = React.useState<Character[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [hasMore, setHasMore] = React.useState(true);

  React.useEffect(() => {
    if (data) {
      setCharacters(data.characters.results);
      setHasMore(!!data.characters.info.next);
    }
  }, [data]);

  const loadMore = () => {
    if (!hasMore) return;

    const nextPage = currentPage + 1;

    fetchMore({
      variables: { page: nextPage },
    }).then((result) => {
      const newCharacters = result.data.characters.results;
      setCharacters((prev) => [...prev, ...newCharacters]);
      setCurrentPage(nextPage);

      if (!result.data.characters.info.next) {
        setHasMore(false);
      }
    });
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById("sidebar-container");
      if (!container) return;

      if (
        container.scrollTop + container.clientHeight >=
        container.scrollHeight - 10
      ) {
        loadMore();
      }
    };

    const container = document.getElementById("sidebar-container");
    container?.addEventListener("scroll", handleScroll);

    return () => container?.removeEventListener("scroll", handleScroll);
  }, [currentPage, hasMore, loadMore]);

  if (error) return <p className={styles.error}>Failed to Load Data</p>;

  return (
    <div className={styles.wrapper}>
      <div id="sidebar-container" className={styles.container}>
        {characters.map((item, index) => (
          <SideBarComponent
            key={index}
            characterId={item.id}
            characterName={item.name}
            speciesName={item.species}
          />
        ))}
        {!loading && <LoadingComponent />}
        {!hasMore && <p className={styles.loader}>No more characters</p>}
      </div>
    </div>
  );
}
