import { program } from 'commander';

import genDiff from './index.js';

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format: "stylish", "plain", "json"', 'stylish')
  .action((filepath1, filepath2) => {
    /* eslint-disable-next-line */
    console.log(genDiff(filepath1, filepath2, program.format));
  });
export default () => program.parse(process.argv);
