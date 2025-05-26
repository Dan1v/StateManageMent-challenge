import { create } from "zustand";

type CharacterStore = {
  selectedCharacterId: string | null;
  setSelectedCharacterId: (id: string) => void;
};

export const useCharacterStore = create<CharacterStore>((set) => ({
  selectedCharacterId: null,
  setSelectedCharacterId: (id) => set({ selectedCharacterId: id }),
}));
