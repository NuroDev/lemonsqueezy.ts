import type { RequestInit } from "undici";

export interface SharedModuleOptions {
  apiKey: string;
  page?: number;
  include?: Array<keyof typeof LemonsqueezyDataType>;
}

export interface SharedLemonsqueezyOptions {
  apiVersion?: "v1";
  baseUrl?: string;
}

export interface LemonsqueezyOptions<
  TData extends Record<string, any> = Record<string, any>
> extends Omit<RequestInit, "body">,
    SharedLemonsqueezyOptions,
    SharedModuleOptions {
  data?: TData;
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
  checkouts = "checkouts",
  customers = "customers",
  discounts = "discounts",
  files = "files",
  license_key_instances = "license-key-instances",
  license_keys = "license-keys",
  order_items = "order-items",
  orders = "orders",
  products = "products",
  stores = "stores",
  subscriptions = "subscriptions",
  subscription_invoices = "subscription-invoices",
  users = "users",
  variants = "variants",
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
