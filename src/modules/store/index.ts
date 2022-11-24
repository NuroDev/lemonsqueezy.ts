import { listAllStores, retrieveStore } from "./store.action";

export { listAllStores, retrieveStore };

export type {
  LemonsqueezyStore,
  ListAllStoresOptions,
  ListAllStoresResult,
  RetrieveStoreOptions,
  RetrieveStoreResult,
} from "./store.types";

export default {
  listAllStores,
  retrieveStore,
} as const;
