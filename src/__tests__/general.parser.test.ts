import { parseName } from "../parsers/general.parser";

test("parses two-part name", () => {
  const result = parseName("John Doe");
  expect(result).toEqual({ firstName: "John", lastName: "Doe" });
});

test("parses three-part name", () => {
  const result = parseName("John Middle Doe");
  expect(result).toEqual({ firstName: "John Middle", lastName: "Doe" });
});

test("parses four-part name", () => {
  const result = parseName("John Middle Doe Last");
  expect(result).toEqual({ firstName: "John Middle", lastName: "Doe Last" });
});
