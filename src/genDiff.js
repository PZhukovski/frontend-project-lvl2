import _ from 'lodash';

const operators = ['-', '+'];

const calculateDiff = (data1, data2) => {
  const key1 = Object.keys(data1);
  const key2 = Object.keys(data2);
  const result = {};
  const keysAll = _.union(key1, key2).sort();
  /* eslint-disable-next-line */
  for (const key of keysAll) {
    if (_.has(data1, key) && !_.has(data2, key)) {
      result[`${operators[0]} ${key}`] = data1[key];
    } else if (!_.has(data1, key) && _.has(data2, key)) {
      result[`${operators[1]} ${key}`] = data2[key];
    } else if (_.has(data1, key) && _.has(data2, key) && data1[key] === data2[key]) {
      result[`  ${key}`] = data1[key];
    } else if (_.has(data1, key) && _.has(data2, key) && data1[key] !== data2[key]) {
      result[`${operators[0]} ${key}`] = data1[key];
      result[`${operators[1]} ${key}`] = data2[key];
    }
  }
  return result;
};
export default calculateDiff;

/* const genDiff = (pathToFile1, pathToFile2, outputFormat) => {
    const data1 = readFile(pathToFile1);
    const data2 = readFile(pathToFile2);
    const ast = genAST(data1, data2);
    return chooseOutputFormat(outputFormat, ast);
}; */
