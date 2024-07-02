import mxLastNames from "../data/mexico.data.json";
import rdLastNames from "../data/dominican_republic.data.json";

export const lastNameSet = new Set([
  ...mxLastNames.commonLastNames,
  ...rdLastNames.commonLastNames,
]);
