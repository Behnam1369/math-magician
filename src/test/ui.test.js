/* eslint-disable no-unused-vars */
import React from 'react';
import {
  render, fireEvent, screen, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import operate from '../logic/operate';
import calculate from '../logic/calculate';

// Set up React Testing Library.
// Follow the instructions in the official documentation.
// You don't need to setup Jest (it's included in Create React App).
// Write unit tests for the files operate.js and calculate.js using Jest.
// Create unit tests for all React components:
// Use Jest snapshots to test the components.
// Use React Testing Library to simulate user interaction.
// Run your full tests suite using Jest. All tests should pass.

describe('operate(numberOne, numberTwo, operation)', () => {
  it('should add numbers', () => {
    expect(operate('2', '4', '+')).toBe('6');
    expect(operate('4', '4', '+')).toBe('8');
    expect(operate('5', '4', '+')).toBe('9');
  });
  it('should substract numbers', () => {
    expect(operate('2', '4', '-')).toBe('-2');
    expect(operate('4', '4', '-')).toBe('0');
    expect(operate('5', '4', '-')).toBe('1');
  });
  it('should multiply numbers', () => {
    expect(operate('2', '4', 'x')).toBe('8');
    expect(operate('4', '4', 'x')).toBe('16');
    expect(operate('5', '4', 'x')).toBe('20');
  });
  it('should divide numbers', () => {
    expect(operate('2', '4', '÷')).toBe('0.5');
    expect(operate('4', '4', '÷')).toBe('1');
    expect(operate('5', '4', '÷')).toBe('1.25');
    expect(operate('5', '0', '÷')).toBe('Can\'t divide by 0.');
  });
  it('should calculate division module', () => {
    expect(operate('2', '4', '%')).toBe('2');
    expect(operate('4', '4', '%')).toBe('0');
    expect(operate('5', '4', '%')).toBe('1');
    expect(operate('5', '0', '%')).toBe('Can\'t find modulo as can\'t divide by 0.');
  });
});

describe('calculate(obj, buttonName)', () => {
  it('should react to numbers', () => {
    expect(calculate({ total: null, next: null, operation: null }, '4')).toEqual({ total: null, next: '4', operation: null });
    expect(calculate({ total: null, next: '3', operation: null }, '5')).toEqual({ total: null, next: '35', operation: null });
    expect(calculate({ total: '4', next: null, operation: '+' }, '4')).toEqual({ total: '4', next: '4', operation: '+' });
  });
  it('should react to operatios', () => {
    expect(calculate({ total: null, next: '34', operation: null }, '+')).toEqual({ total: '34', next: null, operation: '+' });
    expect(calculate({ total: null, next: '34', operation: null }, '-')).toEqual({ total: '34', next: null, operation: '-' });
    expect(calculate({ total: null, next: '34', operation: null }, 'x')).toEqual({ total: '34', next: null, operation: 'x' });
    expect(calculate({ total: null, next: '34', operation: null }, '%')).toEqual({ total: '34', next: null, operation: '%' });
    expect(calculate({ total: null, next: '34', operation: null }, '÷')).toEqual({ total: '34', next: null, operation: '÷' });
    expect(calculate({ total: '9', next: '3', operation: '+' }, '-')).toEqual({ total: '12', next: null, operation: '-' });
  });
  it('should multiply numbers', () => {
    expect(calculate({ total: null, next: null, operation: null }, '4')).toEqual({ total: null, next: '4', operation: null });
    expect(calculate({ total: null, next: '3', operation: null }, '5')).toEqual({ total: null, next: '35', operation: null });
    expect(calculate({ total: '4', next: null, operation: '+' }, '4')).toEqual({ total: '4', next: '4', operation: '+' });
  });
  it('should divide numbers', () => {
    expect(operate('2', '4', '÷')).toBe('0.5');
    expect(operate('4', '4', '÷')).toBe('1');
    expect(operate('5', '4', '÷')).toBe('1.25');
    expect(operate('5', '0', '÷')).toBe('Can\'t divide by 0.');
  });
  it('should calculate division module', () => {
    expect(operate('2', '4', '%')).toBe('2');
    expect(operate('4', '4', '%')).toBe('0');
    expect(operate('5', '4', '%')).toBe('1');
    expect(operate('5', '0', '%')).toBe('Can\'t find modulo as can\'t divide by 0.');
  });
});

test('two minus eight should return -6. ', async () => {
  render(<App />);

  fireEvent.click(screen.getByText('Calculator'));
  await waitFor(() => screen.getByText('4'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('-'));
  fireEvent.click(screen.getByText('8'));
  fireEvent.click(screen.getByText('='));

  expect(screen.getByTestId('display')).toHaveValue('-6');
});
