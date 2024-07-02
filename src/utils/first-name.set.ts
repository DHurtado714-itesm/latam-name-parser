import mxFirstNames from "../data/mexico.data.json";
import rdFirstNames from "../data/dominican_republic.data.json";

export const FirstNameSet = new Set([
  ...mxFirstNames.commonFirstNames,
  ...rdFirstNames.commonFirstNames,
]);
