const { expect, test } = require("@jest/globals");
const { mergeSort } = require('./mergeSort');

describe('mergeSort', () => {

  describe('base cases', () => {

    describe('numeric sort', () => {
      test('one vales', () => {
        const input = [1];
        const expected = [1];

        expect(mergeSort(input)).toEqual(expected);
      });

      describe('two values', () => {
        
        test('in order', () => {
          const input = [1, 2];
          const expected = [1, 2];

          expect(mergeSort(input)).toEqual(expected);
        });

        test('in reverse order', () => {
          const input = [2, 1];
          const expected = [1, 2];

          expect(mergeSort(input)).toEqual(expected);
        });

      });

      test('even number of values', () => {
          const input = [2, 3, 1, 4];
          const expected = [1, 2, 3, 4];

          expect(mergeSort(input)).toEqual(expected);
      });

      test('odd number of values', () => {
          const input = [2, 1, 4];
          const expected = [1, 2, 4];

          expect(mergeSort(input)).toEqual(expected);
      });
    });

    describe('lexical sort', () => {
      test('one vales', () => {
        const input = ['a'];
        const expected = ['a'];

        expect(mergeSort(input)).toEqual(expected);
      });

      describe('two values', () => {
        
        test('in order', () => {
          const input = ['a', 'b'];
          const expected = ['a', 'b'];

          expect(mergeSort(input)).toEqual(expected);
        });

        test('in reverse order', () => {
          const input = ['b', 'a'];
          const expected = ['a', 'b'];

          expect(mergeSort(input)).toEqual(expected);
        });

      });

      test('even number of values', () => {
          const input = ['b', 'c', 'a', 'd'];
          const expected = ['a', 'b', 'c', 'd'];

          expect(mergeSort(input)).toEqual(expected);
      });

      test('odd number of values', () => {
          const input = ['b', 'a', 'd'];
          const expected = ['a', 'b', 'd'];

          expect(mergeSort(input)).toEqual(expected);
      });
    });
  });
});