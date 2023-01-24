import { Advisor } from "./characters/Advisor/Advisor";
import { Fighter } from "./characters/Fighter/Fighter";
import { King } from "./characters/King/King";
import { Squire } from "./characters/SquireStructure/Squire";
import { type CharacterDataStructure } from "./characters/characterDataEstructure/type";
import { Card } from "./components/Card/Card";

const joffreyData: CharacterDataStructure = {
  name: "Joffrey",
  family: "Baratheon",
  age: 16,
  imageSource: "../img/joffrey.jpg",
};

const jaimeData: CharacterDataStructure = {
  name: "Jaime",
  family: "Lannister",
  age: 45,
  imageSource: "../img/jaime.jpg",
};

const daeneryseData: CharacterDataStructure = {
  name: "Daenerys",
  family: "Targaryen",
  age: 30,
  imageSource: "../img/daenerys.jpg",
};

const tyrionData: CharacterDataStructure = {
  name: "Tyrion",
  family: "Lannister",
  age: 40,
  imageSource: "../img/tyrion.jpg",
};

const bronnData: CharacterDataStructure = {
  name: "Bronn",
  family: "Blackwater",
  age: 54,
  imageSource: "../img/bronn.jpg",
};

export const joffrey: King = new King(joffreyData, 2);
export const jaime = new Fighter(jaimeData, "sword", 7);
export const daenerys = new Fighter(daeneryseData, "Dragons", 10);
export const tyrion = new Advisor(tyrionData, daenerys);
export const bronn = new Squire(bronnData, 0, jaime);

export const characters = [jaime, joffrey, daenerys, tyrion, bronn];

console.table(characters);

const listGenerator = () => {
  const app = document.querySelector(".app")!;
  const ulListItem: HTMLUListElement = document.createElement("ul");
  ulListItem.className = "characters-list row list-unstyled";
  app.appendChild(ulListItem);

  for (let i = 0; i < 5; i++) {
    const liListItem: HTMLLIElement = document.createElement("li");
    ulListItem.appendChild(liListItem);
    liListItem.className = "character col";
    const card = new Card(
      liListItem,
      "div",
      "card character__card",
      characters[i]
    );
  }
};

listGenerator();
