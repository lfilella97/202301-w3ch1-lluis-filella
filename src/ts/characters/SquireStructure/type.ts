import { type CharacterStructure } from "../Character/type";
import { type Fighter } from "../Fighter/Fighter";

export interface SquireStructure extends CharacterStructure {
  serves: Fighter;
  kissAssLevel: number;
}
