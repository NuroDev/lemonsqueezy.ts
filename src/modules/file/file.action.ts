import { requestLemonSqueeze } from "~/shared";

import type {
  ListAllFilesOptions,
  ListAllFilesResult,
  RetrieveFileOptions,
  RetrieveFileResult,
} from "./file.types";
import type { SharedModuleOptions } from "~/shared";

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
  const { variantId, ...rest } = options;

  return requestLemonSqueeze<ListAllFilesResult>({
    params: {
      ...(variantId ? { variant_id: variantId } : {}),
    },
    path: "/files",
    ...rest,
  });
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
  const { id, ...rest } = options;

  return requestLemonSqueeze<RetrieveFileResult>({
    path: `/files/${id}`,
    ...rest,
  });
}
