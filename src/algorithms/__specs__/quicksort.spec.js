import { expect, test } from "vitest";
import quickSort from "../quicksort";

test("should be able to sort an array", () => {
  const unsorted = [5, 4, 3, 2, 1];
  expect(quickSort(unsorted)).toEqual([1, 2, 3, 4, 5]);
  expect(quickSort([9,3,1,5,8])).toEqual([1,3,5,8,9]);
});

