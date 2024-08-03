import { expect, test } from "vitest";
import bubbleSort from "../bubblesort";
import { generateRandomArray } from "../../utils/factory";

test("should be able to sort an array", () => {
  const arr = generateRandomArray(10);
  expect(bubbleSort(arr)).toEqual(arr.sort());
});
