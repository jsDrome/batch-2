/* eslint-disable no-magic-numbers */
/* eslint-env jest */

import { add, subtract } from './index';

describe('Add Test Suite', () => {

  test('It should add 2 numbers', () => {
    expect(add(100, 200)).toBe(300);
  });

});

describe('Subtract test suite', () => {

  test('It should subtract 2 numbers', () => {
    expect(subtract(200, 100)).toBe(100);
    expect(subtract(2, 2)).toBe(0);
  });

  test ('It should subtract if the second number is greater than the first number', () => {
    expect(subtract(100, 200)).toBe(100);
  });

});