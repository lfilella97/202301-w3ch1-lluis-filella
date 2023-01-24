import { type CharacterStructure } from "../Character/type";

export interface FighterStructure extends CharacterStructure {
  weapon: string;
  dexterity: number;
}
