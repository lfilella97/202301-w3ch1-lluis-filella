import { type CharacterDataStructure } from "../characterDataEstructure/type";

export interface CharacterStructure {
  characterData: CharacterDataStructure;
  isAlive: boolean;
  series: string;
  communicate: () => string;
  die: () => void;
}
