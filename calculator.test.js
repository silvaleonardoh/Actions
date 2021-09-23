// import { expect, test } from '@jest/globals';
// import * as calculator from './calculator';

const calculator = require('./calculator');

test("Testando Soma 1+1", () => {
    expect(calculator.soma(1, 1)).toBe(2)
});

test("Testar Divisão 10/2", () => {
    expect(calculator.divisao(10, 2)).toBe(5)
});

test("Testar Subtração 100-76", () => {
    expect(calculator.subtracao(100, 76)).toBe(24)
});