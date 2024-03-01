import {
  gameboardFactory,
  getRandomIntLessThan,
  shipFactory,
} from "./script.js";

test("check random int function", () => {
  expect(getRandomIntLessThan(1)).toEqual(0);
});

describe("test shipFactory()", () => {
  test("check that ship is an array", () => {
    expect(Array.isArray(shipFactory(3).ship)).toBeTruthy();
  });

  test("returns 'null' if length isNaN", () => {
    expect(shipFactory("2")).toBeNull();
  });

  test("ship length 3 hit at index 0 is [ 1, 0, 0 ]", () => {
    const newShip = shipFactory(3);
    newShip.hit(0);
    expect(newShip.ship.toString()).toBe("1,0,0");
  });

  test("hits on the whole ship return array of all 1", () => {
    const newShip = shipFactory(2);
    newShip.hit(0);
    newShip.hit(1);
    expect(newShip.ship.toString()).toBe("1,1");
  });

  test("hits on the whole ship sink it", () => {
    const newShip = shipFactory(2);
    newShip.hit(0);
    newShip.hit(1);
    expect(newShip.isSunk()).toBeTruthy();
  });

  test("multiple hits on the same spot won't sink the ship", () => {
    const newShip = shipFactory(2);
    newShip.hit(0);
    newShip.hit(0);
    expect(newShip.isSunk()).toBeFalsy();
  });
});

describe("test gameboardFactory()", () => {
  test("placeShip only accepts 'h' or 'v' for orientation, else it throws the specified error", () => {
    const newGameBoard = gameboardFactory();
    expect(() => {
      newGameBoard.placeShip(3, 4, 4, 7);
    }).toThrow("not a valid orientation, can only be 'h' or 'v'");
  });

  test("placeShip outside of the grid throws the specified error", () => {
    const newGameBoard = gameboardFactory();
    expect(() => {
      newGameBoard.placeShip(3, 4, 14, "h");
    }).toThrow("4, 14 is not a valid set of coordinates");
  });
});
