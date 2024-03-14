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

const colorInShips = (player, playerAsString) => {
  const fleet = player.navalFleet;
  const shipToColor = fleet.length - 1;
  const shipLocation = fleet[shipToColor].location;

  for (let i = 0; i < shipLocation.length; i++) {
    const spot = shipLocation[i];
    const matchingId = `${spot}-${playerAsString}`;
    const spotInDOM = document.getElementById(matchingId);

    spotInDOM.classList.add("ship");
  }
  return;
};

const generateFireMissileMode = (game) => {
  const humanBoard = document.querySelector("#human");
  const computerBoard = document.querySelector("#computer");
  const heading = document.querySelector("h1");

  const fireHumanMissile = (coordinates) => {
    const coordinateArrayXY = coordinates.split(",");
    
  };

  heading.innerHTML = "Fire Missiles";
  humanBoard.classList.toggle("boardBig");
  humanBoard.classList.toggle("boardSmall");
  computerBoard.classList.toggle("boardSmall");
  computerBoard.classList.toggle("boardBig");
};

const placeComputerShips = (game) => {
  const arrayOfShipsInGame = [];
  const generateShipObject = (shipName, functionName, numberOfSpaces) => {
    arrayOfShipsInGame.push({ shipName, functionName, numberOfSpaces });
  };
  generateShipObject("carrier", game.placeCarrier, 5);
  generateShipObject("battleship", game.placeBattleship, 4);
  generateShipObject("destroyer", game.placeDestroyer, 3);
  generateShipObject("submarine", game.placeSubmarine, 3);
  generateShipObject("patrol boat", game.placePatrolBoat, 2);

  const fleet = game.computer.navalFleet;
  const fleetLength = fleet.length;
  if (fleetLength < arrayOfShipsInGame.length) {
    const currentShip = arrayOfShipsInGame[fleetLength];
    const functionName = currentShip.functionName;
    let orientation;
    getRandomIntLessThan(2) % 1 === 0
      ? (orientation = "h")
      : (orientation = "v");
    const coordinateArrayXY = [];
    coordinateArrayXY.push(game.getRandomIntLessThan(10));
    coordinateArrayXY.push(game.getRandomIntLessThan(10));
    functionName(false, coordinateArrayXY.toString(), orientation);
    placeComputerShips(game);
  } else {
    generateFireMissileMode(game);
  }
};

const humanShipPlacementMode = (game) => {
  const placeShip = (game) => {
    const arrayOfShipsInGame = [];
    const generateShipObject = (shipName, functionName, numberOfSpaces) => {
      arrayOfShipsInGame.push({ shipName, functionName, numberOfSpaces });
    };
    generateShipObject("carrier", game.placeCarrier, 5);
    generateShipObject("battleship", game.placeBattleship, 4);
    generateShipObject("destroyer", game.placeDestroyer, 3);
    generateShipObject("submarine", game.placeSubmarine, 3);
    generateShipObject("patrol boat", game.placePatrolBoat, 2);

    const updateDom = () => {
      const fleetLength = game.human.navalFleet.length;
      if (fleetLength < arrayOfShipsInGame.length) {
        const currentShip = arrayOfShipsInGame[fleetLength];
        const shipName = currentShip.shipName;
        const numberOfSpaces = currentShip.numberOfSpaces;
        const instructionString = `Place your ${shipName} (${numberOfSpaces} spaces)`;
        const h1 = document.querySelector("h1");
        h1.innerHTML = instructionString;
      } else {
        placeComputerShips(game);
      }
    };

    updateDom();

    const button = document.querySelector("button");
    const potentialSpotArray = document.querySelectorAll(".human-boardSpot");
    for (let i = 0; i < potentialSpotArray.length; i++) {
      const spot = potentialSpotArray[i];

      spot.addEventListener("click", () => {
        const fleetLength = game.human.navalFleet.length;
        const currentShip = arrayOfShipsInGame[fleetLength];
        const functionName = currentShip.functionName;
        const spotId = spot.id;
        const orientation = button.id;
        const coordinateArrayXY = spotId.split("-")[0];
        functionName(true, coordinateArrayXY, orientation);
        colorInShips(game.human, "human");

        updateDom();

        return;
      });
    }
  };

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

  placeShip(game);
};

const domManipulation = () => {
  const body = document.querySelector("body");

  const generateMainBody = () => {
    const heading = document.createElement("h1");
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
        humanShipPlacementMode(game);
      }
    });
  };

  generateMainBody();
  generateNameGatheringForm();
};

domManipulation();
