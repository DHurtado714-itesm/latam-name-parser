import { prepositions } from "../utils/prepositions.constant";
import { ParsedName } from "./general.parser";

export function parseComplexName(nameParts: string[]): ParsedName {
  let firstNameParts = [];
  let lastNameParts = [];
  let isLastName = false;

  for (let i = 0; i < nameParts.length; i++) {
    const part = nameParts[i];

    if (prepositions.includes(part.toLowerCase()) && i > 0) {
      if (nameParts[i - 1].toLowerCase() !== "de") {
        isLastName = true;
      }
    }
    if (isLastName) {
      lastNameParts.push(part);
    } else {
      firstNameParts.push(part);
    }
  }

  return {
    firstName: firstNameParts.join(" "),
    lastName: lastNameParts.join(" "),
  };
}
