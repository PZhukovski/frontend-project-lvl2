import path from 'path';

import { readFileSync } from 'fs';

const readFile = (pathToFile) => {
  const data = readFileSync(path.resolve(pathToFile), 'utf-8');
  const newData = JSON.parse(data);
  return (newData);
};

export default readFile;
