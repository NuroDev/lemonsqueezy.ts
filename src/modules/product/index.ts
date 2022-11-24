import { listAllProducts, retrieveProduct } from "./product.action";

export { listAllProducts, retrieveProduct };

export default {
  listAllProducts,
  retrieveProduct,
} as const;
