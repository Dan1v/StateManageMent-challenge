export interface CharactersData {
  characters: {
    info: {
      next: number | null;
    };
    results: Character[];
  };
}

export interface Character {
  id: string;
  name: string;
  species: string;
}
