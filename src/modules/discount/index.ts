import { listAllDiscounts, retrieveDiscount } from "./discount.action";

export { listAllDiscounts, retrieveDiscount };

export default {
  listAllDiscounts,
  retrieveDiscount,
} as const;
