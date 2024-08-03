import { expect, test } from "vitest";
import { generateRandomArray } from "../../utils/factory";
import mergeSort from "../mergesort";

test("should sort an array",() => {
  const array = generateRandomArray();
  expect(mergeSort(array)).toEqual(array.sort());
});
