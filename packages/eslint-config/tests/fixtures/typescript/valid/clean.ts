/**
 * Interface for a User object
 */
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}

/**
 * Type for user role
 */
type UserRole = 'admin' | 'user' | 'guest';

/**
 * Creates a new user with the given properties
 *
 * @param name - The user's name
 * @param email - The user's email
 * @param age - The user's age (optional)
 * @returns A new User object
 */
function createUser(name: string, email: string, age?: number): User {
  return {
    id: Math.floor(Math.random() * 1000),
    name,
    email,
    ...(age !== undefined && { age }),
  };
}

/**
 * Assigns a role to a user
 *
 * @param user - The user to assign a role to
 * @param role - The role to assign
 * @returns The user with the assigned role
 */
function assignRole(user: User, role: UserRole): User & { role: UserRole } {
  return {
    ...user,
    role,
  };
}

// Example usage
const newUser = createUser('John Doe', 'john@example.com', 30);
const userWithRole = assignRole(newUser, 'admin');

// Using proper template literals with type checking
const greeting = `Hello, ${userWithRole.name}!`;

// Export for module usage
export { assignRole, createUser, greeting, type User, type UserRole };
