import type { RequestInit } from "node-fetch";

export interface SharedLemonsqueezyOptions {
  apiVersion?: `v${number}`;
  baseUrl?: string;
}

export interface LemonsqueezyOptions
  extends Omit<RequestInit, "body">,
    SharedLemonsqueezyOptions {
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
  FILES = "files",
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
  jsonapi: {
    version: string;
  };
  links: TLinks;
}
