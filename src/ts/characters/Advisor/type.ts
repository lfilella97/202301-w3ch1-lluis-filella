import { type Character } from "../Character/Character";
import { type CharacterStructure } from "../Character/type";

export interface AdvisorStructre extends CharacterStructure {
  advises: Character;
}
