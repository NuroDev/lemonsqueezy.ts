import { Lemonsqueezy } from "~/client";

import type {
  ListAllFilesOptions,
  ListAllFilesResult,
  RetrieveFileOptions,
  RetrieveFileResult,
  SharedModuleOptions,
} from "~/types";

/**
 * List all files
 *
 * @description Returns a paginated list of files
 *
 * @docs https://docs.lemonsqueezy.com/api/files#list-all-files
 *
 * @param {Object} [options]
 *
 * @returns Returns a paginated list of file objects ordered by `sort`
 */
export async function listAllFiles(
  options: ListAllFilesOptions & SharedModuleOptions
): Promise<ListAllFilesResult> {
  const { apiKey, ...rest } = options;

  const client = new Lemonsqueezy(apiKey);

  return await client.listAllFiles(rest);
}

/**
 * Retrieve file
 *
 * @description Retrieves the file with the given ID
 *
 * @docs https://docs.lemonsqueezy.com/api/files#retrieve-a-file
 *
 * @param {String} options.id - The ID of the file to retrieve
 *
 * @returns A file object
 */
export async function retrieveFile(
  options: RetrieveFileOptions & SharedModuleOptions
): Promise<RetrieveFileResult> {
  const { apiKey, ...rest } = options;

  const client = new Lemonsqueezy(apiKey);

  return await client.retrieveFile(rest);
}
