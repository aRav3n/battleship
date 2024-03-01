import { shipFactory } from "./script.js";

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
})
