import stylish from './stylish.js';

import plain from './plain.js';

import json from './json.js';

const formatData = (ast, format) => {
  switch (format) {
    case 'plain':
      return plain(ast);
    case 'json':
      return json(ast);
    case 'stylish':
      return stylish(ast);
    default:
      return `error: ${format} is invalid format`;
  }
};
export default formatData;
