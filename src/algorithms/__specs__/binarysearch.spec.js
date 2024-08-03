import { expect, test } from "vitest";
import binarySearch from "../binarysearch";


test("should find an value within the array",() => {
  expect(binarySearch([1,2,3],3)).toBe(2);
});

test("should return false when value is not found",() => {
  expect(binarySearch([1,2,3],0)).toBeFalsy();

});
