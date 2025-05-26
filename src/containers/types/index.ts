interface Episode {
  id: string;
  name: string;
  episode: string;
}

export type CharacterData = {
  character: {
    id: string;
    name: string;
    species: string;
    status: string;
    gender: string;
    image: string;
    origin: {
      id: string;
      name: string;
      dimension: string;
    };
    location: {
      id: string;
      name: string;
      dimension: string;
    };
    episode: Episode[];
  };
};
