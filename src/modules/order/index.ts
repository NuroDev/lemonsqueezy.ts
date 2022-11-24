import { listAllOrders, retrieveOrder } from "./order.action";

export { listAllOrders, retrieveOrder };

export default {
  listAllOrders,
  retrieveOrder,
} as const;
