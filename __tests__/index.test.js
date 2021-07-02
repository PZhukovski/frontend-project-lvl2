/* eslint-disable no-underscore-dangle */
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
// import { dirname } from 'path';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const typeFiles = ['json', 'yml'];
test.each(typeFiles)('genDiff check', (typeFile) => {
  const firstFilePath = getFixturePath(`file1.${typeFile}`);
  const secondFilePath = getFixturePath(`file2.${typeFile}`);
  // const thirdFilePath = getFixturePath('after.json');
  const stylishData = readFile('stylish.result');
  const jsonData = readFile('json.result');
  const plainData = readFile('plain.result');
  expect(genDiff(firstFilePath, secondFilePath, 'stylish')).toEqual(stylishData);
  expect(genDiff(firstFilePath, secondFilePath, 'json')).toEqual(jsonData);
  expect(genDiff(firstFilePath, secondFilePath, 'plain')).toEqual(plainData);
});
