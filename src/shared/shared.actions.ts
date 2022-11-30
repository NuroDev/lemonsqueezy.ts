import { fetch } from "undici";
import { join } from "node:path";

import type {
  BaseLemonsqueezyResponse,
  LemonsqueezyOptions,
  PaginatedBaseLemonsqueezyResponse,
} from "~/shared";

export async function requestLemonSqueeze<
  TResponse extends
    | BaseLemonsqueezyResponse<any>
    | PaginatedBaseLemonsqueezyResponse<any>
>({
  apiKey,
  apiVersion = "v1",
  baseUrl = "https://api.lemonsqueezy.com",
  data,
  params,
  headers,
  method = "GET",
  path,
}: LemonsqueezyOptions): Promise<TResponse> {
  try {
    const url = new URL(join(apiVersion, path), baseUrl);
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

    const json = (await response.json()) as TResponse;
    if (json.errors && json.errors.length > 0) throw json;

    return json;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
