import { listAllDiscounts, retrieveDiscount } from "./discount.action";

export { listAllDiscounts, retrieveDiscount };

export type {
  LemonsqueezyDiscount,
  ListAllDiscountsOptions,
  ListAllDiscountsResult,
  RetrieveDiscountOptions,
  RetrieveDiscountResult,
} from "./discount.types";

export default {
  listAllDiscounts,
  retrieveDiscount,
} as const;
