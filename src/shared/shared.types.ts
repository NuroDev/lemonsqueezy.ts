import type { RequestInit } from "undici";

export interface SharedModuleOptions {
  apiKey: string;
}

export interface SharedLemonsqueezyOptions {
  apiVersion?: `v${number}`;
  baseUrl?: string;
}

export interface LemonsqueezyOptions
  extends Omit<RequestInit, "body">,
    SharedLemonsqueezyOptions,
    SharedModuleOptions {
  data?: Record<string, any>;
  params?: Record<string, any>;
  method?:
    | "CONNECT"
    | "DELETE"
    | "GET"
    | "HEAD"
    | "OPTIONS"
    | "PATCH"
    | "POST"
    | "PUT"
    | "TRACE";
  path: string;
}

export enum LemonsqueezyDataType {
  CHECKOUTS = "checkouts",
  DISCOUNTS = "discounts",
  FILES = "files",
  LICENSE_KEY_INSTANCES = "license-key-instances",
  LICENSE_KEYS = "license-keys",
  ORDER_ITEMS = "order-items",
  ORDERS = "orders",
  PRODUCTS = "products",
  STORES = "stores",
  SUBSCRIPTIONS = "subscriptions",
  USERS = "users",
  VARIANTS = "variants",
}

export interface BaseLemonsqueezyResponse<
  TData,
  TLinks = {
    self: string;
  }
> {
  data: TData;
  errors?: Array<{
    detail: string;
    status: string | number;
    title: string;
  }>;
  jsonapi: {
    version: string;
  };
  links: TLinks;
}

export interface PaginatedBaseLemonsqueezyResponse<
  TData,
  TLinks = {
    first: string;
    last: string;
  }
> extends BaseLemonsqueezyResponse<TData, TLinks> {
  meta: {
    page: {
      currentPage: number;
      from: number;
      lastPage: number;
      perPage: number;
      to: number;
      total: number;
    };
  };
}
