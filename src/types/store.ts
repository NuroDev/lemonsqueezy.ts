import type {
	BaseLemonsqueezyResponse,
	LemonsqueezyDataType,
	SharedLemonsqueezyOptions,
} from './shared';

export interface RetrieveStoreOptions extends SharedLemonsqueezyOptions {
	id: string;
}

export interface LemonsqueezyStore {
	attributes: {
		/**
		 * The URL for the store avatar
		 */
		avatar_url: string;
		/**
		 * The full country name for the store (e.g. `United States`, `United Kingdom`, etc)
		 */
		country_nicename: string;
		/**
		 * The ISO 3166-1 two-letter country code for the store (e.g. `US`, `GB`, etc)
		 *
		 * @see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
		 */
		country: string;
		/**
		 * An ISO-8601 formatted date-time string indicating when the object was created
		 *
		 * @see https://en.wikipedia.org/wiki/ISO_8601
		 */
		created_at: Date;
		/**
		 * The ISO 4217 currency code for the store (e.g. `USD`, `GBP`, etc)
		 *
		 * @see https://en.wikipedia.org/wiki/ISO_4217
		 */
		currency: string;
		/**
		 * The domain of the store in the format `{slug}.lemonsqueezy.com`
		 */
		domain: string;
		/**
		 * The name of the store
		 */
		name: string;
		/**
		 * The current billing plan for the store (e.g. `fresh`, `sweet`)
		 */
		plan: string;
		/**
		 * The slug used to identify the store
		 */
		slug: string;
		/**
		 * A positive integer in cents representing the total revenue of the store in USD in the last 30 days
		 */
		thirty_day_revenue: number;
		/**
		 * A count of the sales made by this store in the last 30 days
		 */
		thirty_day_sales: number;
		/**
		 * A positive integer in cents representing the total all-time revenue of the store in USD
		 */
		total_revenue: number;
		/**
		 * A count of the all-time total sales made by this store
		 */
		total_sales: number;
		/**
		 * An ISO-8601 formatted date-time string indicating when the object was last updated
		 *
		 * @see https://en.wikipedia.org/wiki/ISO_8601
		 */
		updated_at: Date;
		/**
		 * The fully-qualified URL for the store (e.g. `https://{slug}.lemonsqueezy.com)`
		 */
		url: string;
	};
	id: string | number;
	type: LemonsqueezyDataType.STORES;
}

export type RetrieveStoreResult = BaseLemonsqueezyResponse<LemonsqueezyStore>;

export interface ListAllStoresOptions extends SharedLemonsqueezyOptions {}

export interface ListAllStoresResult
	extends BaseLemonsqueezyResponse<
		Array<LemonsqueezyStore>,
		{
			first: string;
			last: string;
		}
	> {
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
