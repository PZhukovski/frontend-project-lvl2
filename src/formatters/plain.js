import _ from 'lodash';

const stringify = (item) => {
  if (_.isNull(item)) {
    return item;
  }
  if (typeof item === 'string') {
    return `'${item}'`;
  }
  if (typeof item === 'object') {
    return '[complex value]';
  }
  return item;
};

const format = (data) => {
  const iter = (innerData, path = '') => {
    const result = innerData.filter((item) => !(item.status === 'unchanged')).map((item) => {
      const fullPath = `${path}${item.name}`;
      switch (item.status) {
        case 'deleted':
          return `Property '${fullPath}' was removed`;
        case 'added':
          return `Property '${fullPath}' was added with value: ${stringify(item.value)}`;
        case 'changed':
          return `Property '${fullPath}' was updated. From ${stringify(item.previousValue)} to ${stringify(item.currentValue)}`;
        case 'nested':
          return iter(item.children, `${fullPath}.`);
        default:
          return `error: ${item.status} is invalid value for status property`;
      }
    });
    return result.join('\n');
  };
  return iter(data);
};
export default format;
