import { describe, expect, it } from "vitest";

import { formatDate, slugify } from "./utils";

describe("slugify", () => {
  it("Base test", () => {
    const input = "---test----TEst---";
    const expectedOutput = "test-test";
    expect(slugify(input)).toBe(expectedOutput);
  });
});

describe("FormatDate", () => {
  it("Base test", () => {
    const input = "2022-11-25";
    const expectedOutput = "11/25/2022";
    expect(formatDate(input)).toBe(expectedOutput);
  });
});
