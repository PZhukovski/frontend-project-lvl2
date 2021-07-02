import _ from 'lodash';

const basicIndent = '  ';
const getIndent = (depth) => basicIndent.repeat(depth);
const stringify = (item, depth = 1) => {
  if (!_.isObject(item)) {
    return item;
  }
  const result = Object.entries(item).map(([key, value]) => `${getIndent(depth)}${key}: ${stringify(value, depth + 2)}`);
  return `{\n${result.join('\n')}\n${getIndent(depth - 2)}}`;
};

const format = (data) => {
  const iter = (innerData, depth = 1) => {
    const result = innerData.map((item) => {
      switch (item.status) {
        case 'deleted':
          return `${getIndent(depth)}- ${item.name}: ${stringify(item.value, depth + 3)}`;
        case 'added':
          return `${getIndent(depth)}+ ${item.name}: ${stringify(item.value, depth + 3)}`;
        case 'unchanged':
          return `${getIndent(depth)}  ${item.name}: ${stringify(item.value, depth + 2)}`;
        case 'changed':
          return `${getIndent(depth)}- ${item.name}: ${stringify(item.previousValue, depth + 3)}\n${getIndent(depth)}+ ${item.name}: ${stringify(item.currentValue, depth + 3)}`;
        case 'nested':
          return `${getIndent(depth)}  ${item.name}: ${iter(item.children, depth + 2)}`;
        default:
          return `error: ${item.status} is invalid value for status property`;
      }
    });
    return `{\n${result.join('\n')}\n${getIndent(depth - 1)}}`;
  };
  return iter(data);
};

export default format;
