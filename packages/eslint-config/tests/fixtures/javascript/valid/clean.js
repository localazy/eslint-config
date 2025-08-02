/**
 * A simple function that adds two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
export function add(a, b) {
  return a + b;
}

/**
 * A simple function that multiplies two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The product of a and b.
 */
export function multiply(a, b) {
  return a * b;
}

// Example usage
const result = add(5, 3);
// eslint-disable-next-line no-console
console.log(`Result: ${String(result)}`);

// Using the multiply function
const product = multiply(4, 2);
// eslint-disable-next-line no-console
console.log(`Product: ${String(product)}`);
