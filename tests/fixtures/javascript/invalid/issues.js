// This file contains intentional ESLint issues

// Unused variable
const unusedVar = 'This variable is never used';

// Unreachable code
function unreachableCode() {
  return true;
  // This code will never be executed
  unreachableCode();
}

// No-console violation (intentional for testing)
console.log('This is a console log that might be flagged');

// Duplicate variable declaration
let duplicate = 1;
let duplicate = 2;

// Export the function to avoid unused function warning
export { duplicate, unreachableCode };
