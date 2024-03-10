import {
  gameboardFactory,
  getRandomIntLessThan,
  shipFactory,
  player,
} from "./gameLogic.js";

import "./style.css";

const makeDivs = (whichBoard, playerString) => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const x = j;
      const y = i;
      const positionArray = [x, y].toString();
      const div = document.createElement("div");
      const idName = `${positionArray}-${playerString}`;
      div.setAttribute("id", idName);
      div.classList.add(`${playerString}-boardSpot`);
      whichBoard.appendChild(div);
    }
  }
};

const initializeGame = (name) => {
  const game = player(name);
  return game;
};

const colorInSpots = (player, playerAsString, classToAdd) => {
  const fleet = player.navalFleet;
  for (let i = 0; i < fleet.length; i++) {
    const shipLocation = fleet[i].location;
    for (let i = 0; i < shipLocation.length; i++) {
      const spot = shipLocation[i];
      const matchingId = `${spot}-${playerAsString}`;
      const spotInDOM = document.getElementById(matchingId);
      spotInDOM.classList.add(classToAdd);
    }
  }
};

const generateFireMissileMode = () => {
  const humanBoard = document.querySelector("#human");
  const computerBoard = document.querySelector("#computer");
};

const placeShip = (game, shipName, functionName, numberOfSpaces) => {
  const potentialSpotArray = document.querySelectorAll(".human-boardSpot");
  const instructionString = `Place your ${shipName} (${numberOfSpaces} spaces)`;
  const h1 = document.querySelector("h1");
  const button = document.querySelector("button");
  h1.innerHTML = instructionString;
  for (let i = 0; i < potentialSpotArray.length; i++) {
    const spot = potentialSpotArray[i];
    spot.addEventListener("click", () => {
      const spotId = spot.id;
      const orientation = button.id;
      const coordinateArrayXY = spotId.split("-")[0];
      functionName(true, coordinateArrayXY, orientation);
      colorInSpots(game.human, "human", "ship");
    });
  }
};

const placeCarrier = (game) => {
  placeShip(game, "carrier", game.placeCarrier, 5);
};

const generateShipPlacementMode = (game) => {
  const body = document.querySelector("body");
  const contentDiv = document.querySelector("#contentContainer");
  contentDiv.innerHTML = "";
  const gameboards = document.createElement("div");
  const humanBoard = document.createElement("id", "human");
  const computerBoard = document.createElement("id", "computer");
  gameboards.setAttribute("id", "gameboards");
  humanBoard.classList.add("gameboard");
  computerBoard.classList.add("gameboard");
  humanBoard.setAttribute("id", "human");
  humanBoard.classList.add("boardBig");
  computerBoard.setAttribute("id", "computer");
  computerBoard.classList.add("boardSmall");

  makeDivs(computerBoard, "computer");
  makeDivs(humanBoard, "human");

  const h = "Horizontal";
  const v = "Vertical";
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.setAttribute("id", "h");
  button.innerHTML = h;
  button.addEventListener("click", () => {
    button.innerHTML === h ? (button.innerHTML = v) : (button.innerHTML = h);
    button.setAttribute("id", button.innerHTML[0].toLowerCase());
  });

  gameboards.appendChild(computerBoard);
  gameboards.appendChild(humanBoard);
  contentDiv.appendChild(button);
  contentDiv.appendChild(gameboards);
  body.appendChild(contentDiv);

  placeCarrier(game);
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
        const game = initializeGame(name);
        generateShipPlacementMode(game);
      }
    });
  };

  generateMainBody();
  generateNameGatheringForm();
};

domManipulation();
