const calculate = require('../logic/calculate').default;

describe('calculate', () => {
  test('should clear all values when AC is pressed', () => {
    const result = calculate({
      operation: '+',
      next: '75',
      total: '6969',
    }, 'AC');
    expect(result).toStrictEqual({
      operation: null,
      next: null,
      total: null,
    });
  });

  test('zero button should return an object', () => {
    const result = calculate({
      operation: '+',
      next: '0',
      total: null,
    }, '0');
    expect(result).toStrictEqual({});
  });

  test('should append a number when a button is clicked', () => {
    const result = calculate({
      operation: '+',
      next: '20023',
      total: null,
    }, '2');
    expect(result).toStrictEqual({
      next: '200232',
    });
  });

  test('should return a null total when no operation is passed', () => {
    const result = calculate({
      operation: '',
      next: '1634',
      total: null,
    }, '5');
    expect(result).toStrictEqual({
      next: '16345',
      total: null,
    });
  });

  test('should return an empty object when a number already has a decimal point', () => {
    const result = calculate({
      operation: '',
      next: '98.23',
      total: null,
    }, '.');
    expect(result).toStrictEqual({});
  });

  test('should return the correct value when the equals button is clicked', () => {
    const result = calculate({
      operation: '+',
      next: '900',
      total: 300,
    }, '=');
    expect(result).toStrictEqual({
      total: '1200',
      operation: null,
      next: null,
    });
  });

  test('should change the sign when the +/- sign is clicked', () => {
    const result = calculate({
      operation: null,
      next: '420',
      total: null,
    }, '+/-');
    expect(result).toStrictEqual({
      next: '-420',
    });
  });
});
