import { expect, test } from "vitest";
import { generateRandomArray } from "../../utils/factory";
import linearSearch from "../linearsearch";

test("should find an item within the array",() => {
  const array = generateRandomArray(10);
  const firstArray = array[0];
  expect(linearSearch(array,firstArray)).toEqual(0);
});

test("should return false when item is not found",() => {
  expect(linearSearch([1,2,3],-1)).toBeFalsy();
});
