import { shipFactory } from "./script.js";

test("check that ship is an array", () => {
  expect(Array.isArray(shipFactory(3).ship)).toBeTruthy();
});

test("returns 'null' if length isNaN", () => {
  expect(shipFactory("a")).toBeNull();
});

test("check ship array length", () => {
  expect(shipFactory(4).ship.length).toEqual(4);
});
