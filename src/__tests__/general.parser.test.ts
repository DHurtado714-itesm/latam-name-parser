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
    const result = parseName("Daniel Felipe Hurtado Giraldo");
    expect(result).toEqual({
      firstName: "Daniel Felipe",
      lastName: "Hurtado Giraldo",
    });
  });

  test("parses complex name", () => {
    const result = parseName("Joaquín de Jesús Pérez");
    expect(result).toEqual({
      firstName: "Joaquín de Jesús",
      lastName: "Pérez",
    });
  });

  test("parses complex name", () => {
    const result = parseName("Joaquín de Jesús Pérez Pérez");
    expect(result).toEqual({
      firstName: "Joaquín de Jesús",
      lastName: "Pérez Pérez",
    });
  });

  test("parses complex name", () => {
    const result = parseName("Joaquín Emilio de Jesús Pérez de la Torre");
    expect(result).toEqual({
      firstName: "Joaquín Emilio de Jesús",
      lastName: "Pérez de la Torre",
    });
  });

  test("parses complex name", () => {
    const result = parseName("Emilia de la Torre");
    expect(result).toEqual({
      firstName: "Emilia",
      lastName: "de la Torre",
    });
  });

  test("parses complex name", () => {
    const result = parseName("Emilia de la Torre Pérez");
    expect(result).toEqual({
      firstName: "Emilia",
      lastName: "de la Torre Pérez",
    });
  });

  test("parses complex name", () => {
    const result = parseName("Maria José de Herrera");
    expect(result).toEqual({
      firstName: "Maria José",
      lastName: "de Herrera",
    });
  });

  test("throws error for invalid name", () => {
    expect(() => parseName("John")).toThrow("Invalid name");
  });

  test("throws error for invalid name", () => {
    expect(() => parseName("")).toThrow("Invalid name");
  });
});
