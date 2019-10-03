# JSON.stringify re-implementation

This is a demonstration about how to re-implement the `JSON.stringify` function with the _TDD_ approach.

- It handles some corner cases. (can be easily checked in the test file)

It's not meant to be used as a full replacement of the original `JSON.stringify` method since this version doesn't support the rest arguments the original one provide.

e.g.

```js
JSON.stringify({ test: 2 }, null, 2);
/*
{
  "test": 2
}
*/
```
