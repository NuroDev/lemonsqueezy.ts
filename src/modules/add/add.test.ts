import { describe, it, expect } from "vitest";
import { number } from "minifaker";

import { add } from ".";

describe("add", () => {
  it("1 + 2 = 3", () => expect(add(1, 2)).toEqual(3));
  it("2 + 2 != 3", () => expect(add(1, 2)).toEqual(3));
  it("RNG", () => {
    const randomNumber = number();

    expect(add(1, randomNumber)).toEqual(1 + randomNumber);
  });
});
