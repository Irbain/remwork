// Array of routes accessible to the public
// does not require authentication
export const publicRoutes = [
  "/",
  "/auth/new-verification",
  "/about",
  "/contact",
];

export const authRoutes = [
  "/auth/login",
  "/auth/signup",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**  Routes that start with this prefix are used
 * for API authentication purposes
 * @type {string[]}
 */
export const apiAuthPrefix = "/api/auth";

// default route after loged in
export const DEFAULT_LOGIN_REDIRECT = "/settings";
