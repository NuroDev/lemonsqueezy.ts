import { requestLemonSqueeze } from "~/request";

import type {
  GetUserOptions,
  GetUserResult,
  SharedModuleOptions,
} from "~/types";

/**
 * Get User
 *
 * @description Retrieves the currently authenticated user
 *
 * @docs https://docs.lemonsqueezy.com/api/users#retrieve-the-authenticated-user
 *
 * @param {Object} [options]
 *
 * @returns A user object
 */
export async function getUser(
  options: GetUserOptions & SharedModuleOptions
): Promise<GetUserResult> {
  return requestLemonSqueeze<GetUserResult>({
    path: "/users/me",
    ...options,
  });
}
