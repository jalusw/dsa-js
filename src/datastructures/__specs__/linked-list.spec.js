import { describe, expect, test } from "vitest";
import LinkedList from "../linked-list";

describe("Linked List", () => {
  test("initialize", () => {
    expect(new LinkedList()).toMatchObject({
      head: null,
      tail: null
    });
  });

  test("insert a value", () => {
    const linkedList = new LinkedList();
    expect(linkedList.insert(10).head.value).toBe(10);
    expect(linkedList.insert(15).head.value).toBe(15);
  });

  test("append a value", () => {
    const linkedList = new LinkedList();
    expect(linkedList.insert(10).append(50).tail.value).toBe(50);
  });

  
})
