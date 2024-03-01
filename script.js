export function getRandomIntLessThan(number) {
  return Math.floor(Math.random() * number);
}

export function shipFactory(length) {
  if (typeof length !== "number") {
    return null;
  }

  const ship = Array(length);

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

  return { ship, hit, isSunk };
}

export function gameboardFactory() {
  const ships = [];
  const gridSize = 10;

  const checkIfValidPlacement = (length, x, y, orientation) => {
    for (let i = 0; i < ships.length; i++) {}
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
        ship[i][0] = xToUse + i;
        ship[i][1] = yToUse;
      }
    }
  };

  return { ships, placeShip };
}
