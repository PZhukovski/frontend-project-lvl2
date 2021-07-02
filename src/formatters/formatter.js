import stylish from './stylish.js';

import plain from './plain.js';

import json from './json.js';

/* const formatData = (data, format) => {
    switch (format) {
      case 'plain':
        return plain(data);
      case 'json':
        return json(data);
      case 'stylish':
        return stylish(data);
      default:
        return `error: ${format} is invalid format`;
    }
  };
export default formatData;  */

const formats = {
  stylish,
  plain,
  json,
};

export default (diff, format) => {
  const getFormatType = formats[format];
  return getFormatType(diff);
};
