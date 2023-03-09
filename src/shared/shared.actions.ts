import { fetch } from "undici";
import { join } from "node:path";

import { LemonsqueezyDataType } from "~/shared";

import type {
  BaseLemonsqueezyResponse,
  LemonsqueezyOptions,
  PaginatedBaseLemonsqueezyResponse,
} from "~/shared";

export async function requestLemonSqueeze<
  TResponse extends
    | BaseLemonsqueezyResponse<any>
    | PaginatedBaseLemonsqueezyResponse<any>,
  TData extends Record<string, any> = Record<string, any>
>({
  apiKey,
  apiVersion = "v1",
  baseUrl = "https://api.lemonsqueezy.com",
  data,
  headers,
  include,
  method = "GET",
  page,
  params,
  path,
}: LemonsqueezyOptions<TData>): Promise<TResponse> {
  try {
    const url = new URL(join(apiVersion, path), baseUrl);

    if (include)
      url.searchParams.append(
        "include",
        include.map((i) => LemonsqueezyDataType[i]).join(",")
      );

    if (page) url.searchParams.append("page", page.toString());

    if (params && method === "GET")
      Object.entries(params).forEach(([key, value]) =>
        url.searchParams.append(key, value)
      );

    const response = await fetch(url.href, {
      headers: {
        Accept: "application/vnd.api+json",
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/vnd.api+json",
        ...headers,
      },
      method,
      ...(data && method !== "GET"
        ? {
            body: JSON.stringify(params),
          }
        : {}),
    });
    if (!response.ok) {
      const errorsJson = (await response.json()) as {
        errors: Array<{
          detail: string;
          status: number;
          title: string;
        }>;
      };
      throw {
        status: response.status,
        message: response.statusText,
        errors: errorsJson.errors,
      };
    }

    const json = (await response.json()) as TResponse;
    if (json.errors && json.errors.length > 0) throw json;

    return json;
  } catch (error) {
    throw error;
  }
}
