const { generateFibonacciSequence, getFibonacciNumber } = require('./fibo');

test('generateFibonacciSequence generates correct sequence', () => {
    const result = generateFibonacciSequence(5);
    expect(result).toEqual([0, 1, 1, 2, 3]);
});

test('getFibonacciNumber returns correct Fibonacci number', () => {
    const result = getFibonacciNumber(5);
    expect(result).toBe(3);
});
