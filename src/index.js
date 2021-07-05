import calculateDiff from './genDiff.js';
import readFile from './parsers.js';
import formatData from './formatters/formatter.js';

const genDiff = (pathToFile1, pathToFile2, format = 'stylish') => {
  const data1 = readFile(pathToFile1);
  const data2 = readFile(pathToFile2);
  const ast = calculateDiff(data1, data2);
  return formatData(ast, format);
};
export default genDiff;
