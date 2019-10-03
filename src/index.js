const is = type => item => typeof item === type;
const isFunction = is('function');
const isUndef = is('undefined');

const stringify = item => {
  switch (typeof item) {
    case 'string':
      return `"${item}"`;
    case 'number':
    case 'boolean':
      return item.toString();
    case 'object':
      if (item === null) {
        return 'null';
      } else if (Array.isArray(item)) {
        const parsedItems = item.map(i =>
          // undefined or function in array literal should be parsed to 'null'
          isUndef(i) || isFunction(i) ? 'null' : stringify(i),
        );
        return `[${parsedItems.join(',')}]`;
      } else if (item instanceof Date) {
        return stringify(item.toISOString());
      } else {
        const parsedItems = Object.entries(item)
          .filter(
            // object with values undefined || function should be passed
            ([_, value]) => !(isFunction(value) || isUndef(value)),
          )
          .map(([key, value]) => `"${key}":${stringify(value)}`);
        return `{${parsedItems.join(',')}}`;
      }
    case 'function':
    case 'undefined':
      return undefined;
  }
};

export { stringify };
