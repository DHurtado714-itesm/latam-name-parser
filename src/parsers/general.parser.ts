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

  switch (nameParts.length) {
    case 2:
      return parseTwoParts(nameParts);
    case 3:
      return parseThreeParts(nameParts);
    case 4:
      return parseFourParts(nameParts);
    default:
      throw new Error("Invalid name");
  }
}
