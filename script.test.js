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

  test("shipLocation array is correct length", () => {
    const newShip = shipFactory(2);
    const locationArray = newShip.shipLocation;
    expect(locationArray.length).toEqual(2);
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

  test("placeShip() places a single shipObject correctly", () => {
    const newGameboard = gameboardFactory();
    newGameboard.placeShip(3, 0, 0, "h");
    const onlyShipLocation = newGameboard.navalFleet[0].location.toString();
    const expectedArrayString = [
      [0, 0],
      [1, 0],
      [2, 0],
    ].toString();
    expect(onlyShipLocation).toBe(expectedArrayString);
  });

  test("add 2 ships to the fleet", () => {
    const newGameboard = gameboardFactory();
    newGameboard.placeShip(3, 0, 0, "h");
    newGameboard.placeShip(3, 1, 1, "h");
    const fleetArray = newGameboard.navalFleet;
    expect(fleetArray.length).toEqual(2);
  });

  test("correctly add 2 ships to the fleet", () => {
    const newGameboard = gameboardFactory();
    newGameboard.placeShip(3, 0, 0, "h");
    newGameboard.placeShip(3, 1, 1, "h");
    const fleetArray = newGameboard.navalFleet;
    const expectedCombinedShipArray =
      [
        [0, 0],
        [1, 0],
        [2, 0],
      ].toString() +
      [
        [1, 1],
        [2, 1],
        [3, 1],
      ].toString();
    const returnedCombinedShipArray =
      fleetArray[0].location.toString() + fleetArray[1].location.toString();
    expect(returnedCombinedShipArray).toBe(expectedCombinedShipArray);
  });

  test("placeShip() won't place overlapping ships", () => {
    const newGameboard = gameboardFactory();
    const fleetArray = newGameboard.navalFleet;
    newGameboard.placeShip(1, 1, 1, "h");
    const fleetAfterFirstShip = fleetArray.toString();
    newGameboard.placeShip(1, 1, 1, "v");
    const fleetAfterSecondShip = fleetArray.toString();
    expect(fleetAfterFirstShip).toEqual(fleetAfterSecondShip);
  });

  test("receiveAttack() places a hit on a ship in the correct index", () => {
    const game = gameboardFactory();
    const fleet = game.navalFleet;
    game.placeShip(3, 0, 0, "h");
    game.receiveAttack([1, 0]);
    const expectedHitArray = [0, 1, 0].toString();
    const shipHitArray = fleet[0].ship.ship.toString();
    expect(shipHitArray).toEqual(expectedHitArray);
  });

  test("receiveAttack() adds a missed hit to [missedHits]", () => {
    const game = gameboardFactory();
    game.placeShip(3, 0, 0, "h");
    game.receiveAttack([5, 5]);
    game.receiveAttack([6, 6]);
    const expectedMissedHitArray = [[5, 5].toString(), [6, 6].toString()];
    expect(game.missedHits).toEqual(expectedMissedHitArray);
  });

  test("allShipsAreSunk() returns true if all ships are completely hit", () => {
    const game = gameboardFactory();
    const fleet = game.navalFleet;
    game.placeShip(3, 0, 0, "h");
    game.placeShip(3, 0, 1, "h");
    game.receiveAttack([0, 0]);
    game.receiveAttack([1, 0]);
    game.receiveAttack([2, 0]);
    game.receiveAttack([0, 1]);
    game.receiveAttack([1, 1]);
    game.receiveAttack([2, 1]);
    expect(game.allShipsAreSunk()).toEqual(true);
  });

  test("allShipsAreSunk() returns false if not all ships are completely hit", () => {
    const game = gameboardFactory();
    const fleet = game.navalFleet;
    game.placeShip(3, 0, 0, "h");
    game.placeShip(3, 0, 1, "h");
    game.receiveAttack([0, 0]);
    game.receiveAttack([1, 0]);
    game.receiveAttack([2, 0]);
    game.receiveAttack([0, 1]);
    game.receiveAttack([2, 1]);
    expect(game.allShipsAreSunk()).toEqual(false);
  });
});
