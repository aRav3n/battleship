export function getRandomIntLessThan(number) {
  return Math.floor(Math.random() * number);
}

export function shipFactory(length) {
  if (typeof length !== "number") {
    return null;
  }

  const ship = Array(length);
  const shipLocation = Array(length);

  for (let i = 0; i < length; i++) {
    ship[i] = 0;
  }

  const isSunk = () => {
    const sumOfArray = ship.reduce(
      (accumulator, newNumber) => accumulator + newNumber,
      0
    );
    return sumOfArray === ship.length;
  };

  const hit = (index) => {
    ship[index] = 1;
  };

  return { ship, hit, isSunk, shipLocation };
}

export function gameboardFactory() {
  const missedHits = [];
  const navalFleet = [];
  const gridSize = 10;

  const ableToPlaceThisShip = (fleet, newShip) => {
    const newShipLocation = newShip.location;
    for (let i = 0; i < fleet.length; i++) {
      const fleetShipLocation = fleet[i].location;
      for (let j = 0; j < fleetShipLocation.length; j++) {
        const fleetShipSpot = fleetShipLocation[j];
        for (let k = 0; k < newShipLocation.length; k++) {
          const newShipSpot = newShipLocation[k];
          if (newShipSpot === fleetShipSpot) {
            return false;
          }
        }
      }
    }

    return true;
  };

  const placeShip = (length, x, y, orientation) => {
    if (
      x > 9 ||
      x < 0 ||
      y > 9 ||
      y < 0 ||
      (x + 1) % 1 !== 0 ||
      (y + 1) % 1 !== 0
    ) {
      throw new Error(`${x}, ${y} is not a valid set of coordinates`);
    }

    const shipObject = {};
    let xToUse = x;
    let yToUse = y;
    const newShip = shipFactory(length);
    shipObject.ship = newShip;
    if (orientation !== "h" && orientation !== "v") {
      throw new Error("not a valid orientation, can only be 'h' or 'v'");
    } else {
      const locationArray = [];
      if (orientation === "v" && yToUse > gridSize - length) {
        yToUse = gridSize - length;
      }
      if (orientation === "h" && xToUse > gridSize - length) {
        xToUse = gridSize - length;
      }
      xToUse = Number(xToUse);
      yToUse = Number(yToUse);
      for (let i = 0; i < length; i++) {
        const thisX = xToUse + (orientation === "h" ? i : 0);
        const thisY = yToUse + (orientation === "v" ? i : 0);
        const spot = [];
        spot[0] = thisX;
        spot[1] = thisY;
        const spotString = spot.toString();
        locationArray.push(spotString);
      }

      shipObject.location = locationArray;
      ableToPlaceThisShip(navalFleet, shipObject)
        ? navalFleet.push(shipObject)
        : null;
    }
  };

  const allShipsAreSunk = () => {
    let numberOfShipsHit = 0;
    for (let i = 0; i < navalFleet.length; i++) {
      const navalShip = navalFleet[i];
      const shipHitArray = navalShip.ship.ship;
      const numberOfHits = shipHitArray.reduce(
        (sum, currentValue) => sum + currentValue,
        0
      );
      numberOfHits === shipHitArray.length ? numberOfShipsHit++ : null;
    }
    if (numberOfShipsHit === navalFleet.length) {
      return true;
    }
    return false;
  };

  const receiveAttack = (coordinateArrayXY) => {
    const hitCoordinateString = coordinateArrayXY.toString();
    for (let i = 0; i < navalFleet.length; i++) {
      const navalShip = navalFleet[i];
      const shipObject = navalShip.ship;
      const shipLocationArray = navalShip.location;
      for (let i = 0; i < shipLocationArray.length; i++) {
        const shipCoordinates = shipLocationArray[i];
        if (hitCoordinateString === shipCoordinates) {
          shipObject.hit(i);
          allShipsAreSunk();
          return;
        }
      }
    }
    missedHits.push(hitCoordinateString);
  };

  return { navalFleet, placeShip, receiveAttack, missedHits, allShipsAreSunk };
}

export function player(name) {
  let humanPlayerTurn = true;

  const human = gameboardFactory();

  const computer = gameboardFactory();

  const fireMissile = (coordinateArrayXY) => {
    let target;
    humanPlayerTurn ? (target = computer) : (target = human);
    const x = coordinateArrayXY[0];
    const y = coordinateArrayXY[1];
    const coordinateString = coordinateArrayXY.toString();
    if (
      x > 9 ||
      x < 0 ||
      y > 9 ||
      y < 0 ||
      (x + 1) % 1 !== 0 ||
      (y + 1) % 1 !== 0
    ) {
      throw new Error(`${x}, ${y} is not a valid set of coordinates`);
    } else if (target.missedHits.includes(coordinateString)) {
      return "this spot has already been attacked";
    }

    target.receiveAttack(coordinateArrayXY);
    humanPlayerTurn = !humanPlayerTurn;
  };

  const placeShip = (player, coordinateArrayXY, length, orientation) => {
    const fleet = player.navalFleet;
    const initialFleetSize = fleet.length;
    let x;
    let y;
    if (Array.isArray(coordinateArrayXY)) {
      x = coordinateArrayXY[0];
      y = coordinateArrayXY[1];
    } else {
      const arrayFromString = coordinateArrayXY.split(",");
      x = arrayFromString[0];
      y = arrayFromString[1];
    }
    player.placeShip(length, x, y, orientation);
    if (fleet.length === initialFleetSize) {
      return false;
    }
    return true;
  };

  const placeCarrier = (forHumanPlayer, coordinateArrayXY, orientation) => {
    let player;
    forHumanPlayer ? (player = human) : (player = computer);
    if (placeShip(player, coordinateArrayXY, 5, orientation)) {
      return true;
    }
    return false;
  };

  const placeBattleship = (forHumanPlayer, coordinateArrayXY, orientation) => {
    let player;
    forHumanPlayer ? (player = human) : (player = computer);
    if (placeShip(player, coordinateArrayXY, 4, orientation)) {
      return true;
    }
    return false;
  };

  const placeDestroyer = (forHumanPlayer, coordinateArrayXY, orientation) => {
    let player;
    forHumanPlayer ? (player = human) : (player = computer);
    if (placeShip(player, coordinateArrayXY, 3, orientation)) {
      return true;
    }
    return false;
  };

  const placeSubmarine = (forHumanPlayer, coordinateArrayXY, orientation) => {
    let player;
    forHumanPlayer ? (player = human) : (player = computer);
    if (placeShip(player, coordinateArrayXY, 3, orientation)) {
      return true;
    }
    return false;
  };

  const placePatrolBoat = (forHumanPlayer, coordinateArrayXY, orientation) => {
    let player;
    forHumanPlayer ? (player = human) : (player = computer);
    if (placeShip(player, coordinateArrayXY, 2, orientation)) {
      return true;
    }
    return false;
  };

  return {
    fireMissile,
    placeCarrier,
    placeBattleship,
    placeDestroyer,
    placeSubmarine,
    placePatrolBoat,
    name,
    human,
    computer,
  };
}
