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
  const navalFleet = [];
  const gridSize = 10;

  const checkIfValidSpot = (x, y) => {
    const spot = [x, y];
    for (let i = 0; i < navalFleet.length; i++) {
      if (navalFleet[i].includes(spot)) {
        return false;
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

    let xToUse = x;
    let yToUse = y;
    const ship = shipFactory(length);
    const shipLocation = Array(length);
    if (orientation !== "h" && orientation !== "v") {
      throw new Error("not a valid orientation, can only be 'h' or 'v'");
    } else if (orientation === "h") {
      if (xToUse > gridSize - length) {
        xToUse = gridSize - length;
      }
      for (let i = 0; i < length; i++) {
        if (!checkIfValidSpot(xToUse + i, yToUse)) {
          return false;
        } else {
          shipLocation.push([xToUse + i, yToUse]);
        }
      }
      navalFleet.push(ship);
    } else {
      if (yToUse > gridSize - length) {
        yToUse = gridSize - length;
      }
      for (let i = 0; i < length; i++) {
        if (!checkIfValidSpot(xToUse, yToUse + i)) {
          return false;
        } else {
          shipLocation.push([xToUse, yToUse + i]);
        }
      }
      navalFleet.push(ship);
    }
  };

  return { navalFleet, placeShip };
}
