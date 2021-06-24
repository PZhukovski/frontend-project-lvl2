import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import genDiff from '../src/index.js';

 const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');



test('genDiff JSON json', () => {
    const firstFilePath = getFixturePath('file1.json');
    const secondFilePath = getFixturePath('file2.json');
    const thirdFilePath = getFixturePath('after.json');
    const thirdFile = readFile(thirdFilePath);
    expect(genDiff(firstFilePath, secondFilePath)).toEqual(thirdFile);
}); 
