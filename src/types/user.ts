import type {
  BaseLemonsqueezyResponse,
  LemonsqueezyDataType,
  SharedLemonsqueezyOptions,
} from "./shared";

/**
 * @docs https://docs.lemonsqueezy.com/api/users#the-user-object
 */
export interface LemonsqueezyUser {
  attributes: {
    /**
     * A URL to the avatar image for this user. If the user has not uploaded a custom avatar, this will point to their Gravatar URL.
     */
    avatar_url: string;
    /**
     * A randomly generated hex color code for the user. We use this internally as the background color of an avatar if the user has not uploaded a custom avatar.
     */
    color: string;
    /**
     * An ISO-8601 formatted date-time string indicating when the object was created.
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    createdAt: Date;
    /**
     * The email address of the user.
     */
    email: string;
    /**
     * Has the value `true` if the user has uploaded a custom avatar image.
     */
    has_custom_avatar: boolean;
    /**
     * The name of the user.
     */
    name: string;
    /**
     * An ISO-8601 formatted date-time string indicating when the object was last updated.
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    updatedAt: Date;
  };
  id: string | number;
  links: {
    self: string;
  };
  type: LemonsqueezyDataType.USERS;
}

export interface GetUserOptions extends SharedLemonsqueezyOptions {}

export type GetUserResult = BaseLemonsqueezyResponse<LemonsqueezyUser>;
