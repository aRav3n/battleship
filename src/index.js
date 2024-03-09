import {
  gameboardFactory,
  getRandomIntLessThan,
  shipFactory,
  player,
} from "./script.js";

import "./style.css";

const domManipulation = () => {
  console.log("domManipulationCalled");
  const body = document.querySelector("body");
  const generateGameboard = () => {
    body.innerHTML = "";
    const heading = document.createElement("h1");
    heading.innerHTML = "BATTLESHIP";
    body.appendChild(heading);
    const gameboards = document.createElement("div");
    gameboards.setAttribute("id", "gameboards");
    const humanBoard = document.createElement("div");
    const computerBoard = document.createElement("div");
    humanBoard.classList.add("gameboard");
    computerBoard.classList.add("gameboard");
    humanBoard.setAttribute("id", "human");
    computerBoard.setAttribute("id", "computer");

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

    makeDivs(computerBoard);
    makeDivs(humanBoard);

    gameboards.appendChild(computerBoard);
    gameboards.appendChild(humanBoard);
    body.appendChild(gameboards);
  };

  generateGameboard();
};

domManipulation();
