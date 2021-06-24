// import path from 'path';

import calculateDiff from './genDiff.js';
// import { readFileSync } from 'fs';

import readFile from './formatter.js';

const genDiff = (pathToFile1, pathToFile2) => {
  const data1 = readFile(pathToFile1);
  const data2 = readFile(pathToFile2);
  const calcDiff = calculateDiff(data1, data2);
  return calcDiff;
};
export default genDiff;
