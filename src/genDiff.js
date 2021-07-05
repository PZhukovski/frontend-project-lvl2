import _ from 'lodash';

const calculateDiff = (data1, data2) => {
  const key1 = Object.keys(data1);
  const key2 = Object.keys(data2);
  const uniqKeys = _.union(key1, key2);
  const dataKeys = _.sortBy(uniqKeys);
  const add = (key) => {
    if (!_.has(data1, key)) {
      return { name: key, status: 'added', value: data2[key] };
    }
    if (!_.has(data2, key)) {
      return { name: key, status: 'deleted', value: data1[key] };
    }
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return { name: key, status: 'nested', children: calculateDiff(data1[key], data2[key]) };
    }
    if (data1[key] === data2[key]) {
      return { name: key, status: 'unchanged', value: data1[key] };
    }
    return {
      name: key, status: 'changed', previousValue: data1[key], currentValue: data2[key],
    };
  };
  return dataKeys.map((key) => add(key));
};

/* eslint-disable-next-line */

export default calculateDiff;
