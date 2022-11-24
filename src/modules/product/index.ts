import { listAllProducts, retrieveProduct } from "./product.action";

export { listAllProducts, retrieveProduct };

export type {
  LemonsqueezyProduct,
  ListAllProductsOptions,
  ListAllProductsResult,
  RetrieveProductOptions,
  RetrieveProductResult,
} from "./product.types";

export default {
  listAllProducts,
  retrieveProduct,
} as const;
