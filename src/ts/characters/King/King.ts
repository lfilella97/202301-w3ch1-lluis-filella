import { Character } from "../Character/Character";
import { type CharacterDataStructure } from "../characterDataEstructure/type";
import { type KingStructure } from "./type";

export class King extends Character implements KingStructure {
  constructor(
    characterData: CharacterDataStructure,
    public yearsOfReign: number
  ) {
    super(characterData);
  }

  communicate(): string {
    return `${super.communicate()}Everybody will die`;
  }
}
