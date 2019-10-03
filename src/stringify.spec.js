import { stringify } from './index';

describe('JSON.stringify', () => {
  const testCase = item => {
    expect(stringify(item)).toBe(JSON.stringify(item));
  };

  describe('primitives', () => {
    it('should parse string', () => {
      testCase('string');
    });

    it('should parse number', () => {
      testCase(123);
    });

    it('should parse boolean', () => {
      testCase(true);
    });

    it('should parse null', () => {
      testCase(null);
    });

    it('should parse function', () => {
      testCase(() => {});
    });

    it('should parse undefined', () => {
      testCase(undefined);
    });
  });

  describe('array', () => {
    it('should parse empty array', () => {
      testCase([]);
    });

    it('should parse array with primitives', () => {
      testCase([123, '456', false]);
    });

    it('should parse array with undefined', () => {
      testCase([123, undefined]);
    });

    it('should parse function in array', () => {
      testCase([() => {}]);
    });
  });

  describe('object', () => {
    it('should parse empty object', () => {
      testCase({});
    });

    it('should parse object with primitives', () => {
      testCase({
        foo: true,
        bar: '456',
        baz: 123,
      });
    });

    it('should handle undefined key in object', () => {
      testCase({
        foo: true,
        bar: 123,
        baz: undefined,
      });
    });

    it('should parse complext object', () => {
      testCase({
        test: [123, 456, { foo: null, bar: undefined }],
        test2: undefined,
        test3: {
          foo: function() {},
          bar: true,
          baz: ['jk', 'abc', undefined, false, null],
          bee: new Date(),
        },
      });
    });

    it('should parse object with undefined key', () => {
      testCase({
        [undefined]: 'hi',
      });
    });
  });

  describe('date', () => {
    it('should parse Date object', () => {
      testCase(new Date());
    });
  });

  describe('regex', () => {
    it('should parse regex', () => {
      testCase(/abc/);
    });

    it('should parse object with regex value', () => {
      testCase({
        test: /123/,
      });
    });
  });
});
