import { parseName } from "../parsers/general.parser";

describe(parseName.name, () => {
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

  test("throws error for invalid name", () => {
    expect(() => parseName("John Middle Doe Last Extra")).toThrow(
      "Invalid name"
    );
  });

  test("throws error for invalid name", () => {
    expect(() => parseName("John")).toThrow("Invalid name");
  });
});
