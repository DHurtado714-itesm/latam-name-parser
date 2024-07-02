import { prepositions } from "../utils/prepositions.constant";
import { parseComplexName } from "./complex-names.parser";

export interface ParsedName {
  firstName: string;
  lastName: string;
}

function parseTwoParts(nameParts: string[]): ParsedName {
  const [firstName, lastName] = nameParts;
  return { firstName, lastName };
}

function parseThreeParts(nameParts: string[]): ParsedName {
  const [firstName, middleName, lastName] = nameParts;
  return { firstName: `${firstName} ${middleName}`, lastName };
}

function parseFourParts(nameParts: string[]): ParsedName {
  const [firstName, middleName, firstLastName, secondLastName] = nameParts;
  return {
    firstName: `${firstName} ${middleName}`,
    lastName: `${firstLastName} ${secondLastName}`,
  };
}

export function parseName(name: string): ParsedName {
  const nameParts = name.split(" ");

  if (nameParts.length < 2 || nameParts.length > 8) {
    throw new Error("Invalid name");
  }

  if (nameParts.includes("de") && nameParts.includes("la")) {
    return parseComplexName(nameParts);
  }

  switch (nameParts.length) {
    case 2:
      return parseTwoParts(nameParts);
    case 3:
      return parseThreeParts(nameParts);
    case 4:
      return parseFourParts(nameParts);
    default:
      return parseComplexName(nameParts);
  }
}
