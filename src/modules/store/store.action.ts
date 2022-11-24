import { requestLemonSqueeze } from "~/request";

import type {
  ListAllStoresOptions,
  ListAllStoresResult,
  RetrieveStoreOptions,
  RetrieveStoreResult,
  SharedModuleOptions,
} from "~/types";

/**
 * List all stores
 *
 * @description Returns a paginated list of stores
 *
 * @docs https://docs.lemonsqueezy.com/api/stores#list-all-stores
 *
 * @param {Object} [options]
 *
 * @returns Returns a paginated list of `store` objects ordered by name
 */
export async function listAllStores(
  options: ListAllStoresOptions & SharedModuleOptions
): Promise<ListAllStoresResult> {
  return requestLemonSqueeze<ListAllStoresResult>({
    path: "/stores",
    ...options,
  });
}

/**
 * Retrieve store
 *
 * @description Retrieves the store with the given ID
 *
 * @docs https://docs.lemonsqueezy.com/api/stores#retrieve-a-store
 *
 * @param {String} options.id - The ID of the store to retrieve
 *
 * @returns A store object
 */
export async function retrieveStore(
  options: RetrieveStoreOptions & SharedModuleOptions
): Promise<RetrieveStoreResult> {
  const { id, ...rest } = options;

  return requestLemonSqueeze<RetrieveStoreResult>({
    path: `/stores/${id}`,
    ...rest,
  });
}
