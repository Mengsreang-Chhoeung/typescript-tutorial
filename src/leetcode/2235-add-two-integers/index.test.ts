import { sum } from '.';

test('Case 1', () => {
  const result = sum(12, 5);
  expect(result).toBe(17);
});

test('Case 2', () => {
  const result = sum(-10, 4);
  expect(result).toBe(-6);
});
