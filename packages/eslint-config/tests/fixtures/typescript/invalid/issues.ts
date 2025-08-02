// @ts-nocheck
// This file contains intentional TypeScript ESLint issues

// Missing type annotation
const missingType = 'This variable is missing a type annotation';

// Using any type (which is often discouraged)
const anyType: any = 'This variable uses the any type';

// Unused type (defined but never used)
type UnusedType = string | number;

// Inconsistent type imports (not using 'import type')
import { useState } from 'react';

// Function with implicit any parameters
function implicitAny(param) {
  return param;
}

// Interface with optional properties that could be undefined
interface BadInterface {
  id: number;
  name?: string; // This is fine, but accessing without checking is not
}

// Using an interface property without checking if it's defined
function useBadInterface(obj: BadInterface): string {
  // Should check if name is defined before using it
  return obj.name.toUpperCase();
}

// Using non-null assertion when it's not guaranteed
function nonNullAssertion(value: string | null): string {
  return value!.toUpperCase();
}

// Using deprecated method
class DeprecatedClass {
  /**
   * @deprecated Use newMethod() instead
   */
  oldMethod(): void {
    console.log('This method is deprecated');
  }

  newMethod(): void {
    console.log('Use this method instead');
  }
}

const instance = new DeprecatedClass();
instance.oldMethod(); // Using deprecated method

// Incorrect promise handling
async function badPromiseHandling(): Promise<string> {
  const result = await fetch('https://example.com');
  return result.json(); // Missing await
}

// Export to avoid unused warnings
export { DeprecatedClass, badPromiseHandling, implicitAny, nonNullAssertion, useBadInterface };
