import { Lemonsqueezy } from "~/client";

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
  const { apiKey, ...rest } = options;

  const client = new Lemonsqueezy(apiKey);

  return await client.getUser(rest);
}
