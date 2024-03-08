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
      x > 10 ||
      x < 0 ||
      y > 10 ||
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
  // playerTurn boolean

  // fireMissile

  // humanPlayer

  // placeCarrier length = 5

  // placeBattleship length = 4

  // placeDestroyer length = 3

  // placeSubmarine length = 3

  // placePatrolBoat length = 2

  // computer
  
}
