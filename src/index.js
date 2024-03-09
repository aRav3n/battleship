import {
  gameboardFactory,
  getRandomIntLessThan,
  shipFactory,
  player,
} from "./script.js";

import "./style.css";

const makeDivs = (whichBoard) => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const x = i;
      const y = j;
      const positionArray = [x, y].toString();
      const div = document.createElement("div");
      const idName = `${positionArray}-${whichBoard}`;
      div.setAttribute("id", idName);
      whichBoard.appendChild(div);
    }
  }
};

const generateShipPlacementMode = () => {
  const gameboards = document.createElement("div");
  gameboards.setAttribute("id", "gameboards");
  const humanBoard = document.createElement("div");
  const computerBoard = document.createElement("div");
  humanBoard.classList.add("gameboard");
  computerBoard.classList.add("gameboard");
  humanBoard.setAttribute("id", "human");
  computerBoard.setAttribute("id", "computer");

  makeDivs(computerBoard);
  makeDivs(humanBoard);

  gameboards.appendChild(computerBoard);
  gameboards.appendChild(humanBoard);
  body.appendChild(gameboards);
};

const initializeGame = (name) => {
  const game = player(name);
  const contentDiv = document.querySelector("#contentContainer");
  contentDiv.innerHTML = "";
};

const domManipulation = () => {
  const body = document.querySelector("body");

  const generateMainBody = () => {
    const heading = document.createElement("h1");
    heading.innerHTML = "BATTLESHIP";
    body.appendChild(heading);
    const contentContainer = document.createElement("div");
    contentContainer.setAttribute("id", "contentContainer");
    body.appendChild(contentContainer);
  };

  const generateNameGatheringForm = () => {
    const contentDiv = document.querySelector("#contentContainer");
    contentDiv.innerHTML = "";

    const form = document.createElement("form");
    const textLabel = document.createElement("label");
    const textInput = document.createElement("input");
    const button = document.createElement("button");

    textLabel.setAttribute("for", "nameInput");
    textLabel.innerHTML = "What's your name, sailor?";

    textInput.setAttribute("type", "text");
    textInput.setAttribute("id", "nameInput");
    textInput.setAttribute("name", "nameInput");

    button.setAttribute("type", "button");
    button.innerHTML = "Do battle!";

    textLabel.appendChild(textInput);

    form.appendChild(textLabel);
    form.appendChild(button);

    contentDiv.appendChild(form);

    button.addEventListener("click", () => {
      const name = textInput.value;
      if (name.length === 0) {
        generateNameGatheringForm();
        const contentDiv = document.querySelector("#contentContainer");
        const warningP = document.createElement("p");
        warningP.innerHTML = "Your name can't be blank";
        contentDiv.appendChild(warningP);
      } else {
        initializeGame(name);
      }
    });
  };

  generateMainBody();
  generateNameGatheringForm();
};

domManipulation();
