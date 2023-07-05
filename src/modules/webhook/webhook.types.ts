import { LemonsqueezyLicenseKey } from "../licenseKey";
import { LemonsqueezyOrder } from "../order";
import { LemonsqueezySubscription } from "../subscription";
import { LemonsqueezySubscriptionInvoice } from "../subscriptionInvoice";

export type LemonsqueezyWebhookPayload = string | Uint8Array;

enum LemonsqueezyEventNames {
  OrderCreated = "order_created",
  OrderRefunded = "order_refunded",
  SubscriptionCreated = "subscription_created",
  SubscriptionUpdated = "subscription_updated",
  SubscriptionCancelled = "subscription_cancelled",
  SubscriptionResumed = "subscription_resumed",
  SubscriptionExpired = "subscription_expired",
  SubscriptionPaused = "subscription_paused",
  SubscriptionUnpaused = "subscription_unpaused",
  SubscriptionPaymentSuccess = "subscription_payment_success",
  SubscriptionPaymentFailed = "subscription_payment_failed",
  SubscriptionPaymentRecovered = "subscription_payment_recovered",
  LicenseKeyCreated = "license_key_created",
  LicenseKeyUpdated = "license_key_updated",
}

export type LemonsqueezyWebhookPayloadJson = {
  meta: {
    event_name: LemonsqueezyEventNames;
    custom_data?: Record<string, unknown>;
  };
  data: any;
};

type OrderCreatedEvent = {
  type: LemonsqueezyEventNames.OrderCreated;
  custom_data?: Record<string, unknown>;
  data: LemonsqueezyOrder;
};

type OrderRefundedEvent = {
  type: LemonsqueezyEventNames.OrderRefunded;
  custom_data?: Record<string, unknown>;
  data: LemonsqueezyOrder;
};

type SubscriptionCreatedEvent = {
  type: LemonsqueezyEventNames.SubscriptionCreated;
  custom_data?: Record<string, unknown>;
  data: LemonsqueezySubscription;
};

type SubscriptionUpdatedEvent = {
  type: LemonsqueezyEventNames.SubscriptionUpdated;
  custom_data?: Record<string, unknown>;
  data: LemonsqueezySubscription;
};

type SubscriptionCancelledEvent = {
  type: LemonsqueezyEventNames.SubscriptionCancelled;
  custom_data?: Record<string, unknown>;
  data: LemonsqueezySubscription;
};

type SubscriptionResumedEvent = {
  type: LemonsqueezyEventNames.SubscriptionResumed;
  custom_data?: Record<string, unknown>;
  data: LemonsqueezySubscription;
};

type SubscriptionExpiredEvent = {
  type: LemonsqueezyEventNames.SubscriptionExpired;
  custom_data?: Record<string, unknown>;
  data: LemonsqueezySubscription;
};

type SubscriptionPausedEvent = {
  type: LemonsqueezyEventNames.SubscriptionPaused;
  custom_data?: Record<string, unknown>;
  data: LemonsqueezySubscription;
};

type SubscriptionUnpausedEvent = {
  type: LemonsqueezyEventNames.SubscriptionUnpaused;
  custom_data?: Record<string, unknown>;
  data: LemonsqueezySubscription;
};

type SubscriptionPaymentSuccessEvent = {
  type: LemonsqueezyEventNames.SubscriptionPaymentSuccess;
  custom_data?: Record<string, unknown>;
  data: LemonsqueezySubscriptionInvoice;
};

type SubscriptionPaymentFailedEvent = {
  type: LemonsqueezyEventNames.SubscriptionPaymentFailed;
  custom_data?: Record<string, unknown>;
  data: LemonsqueezySubscriptionInvoice;
};

type SubscriptionPaymentRecoveredEvent = {
  type: LemonsqueezyEventNames.SubscriptionPaymentRecovered;
  custom_data?: Record<string, unknown>;
  data: LemonsqueezySubscriptionInvoice;
};

type LicenseKeyCreatedEvent = {
  type: LemonsqueezyEventNames.LicenseKeyCreated;
  custom_data?: Record<string, unknown>;
  data: LemonsqueezyLicenseKey;
};

type LicenseKeyUpdatedEvent = {
  type: LemonsqueezyEventNames.LicenseKeyUpdated;
  custom_data?: Record<string, unknown>;
  data: LemonsqueezyLicenseKey;
};

export type LemonsqueezyWebhookEvent =
  | OrderCreatedEvent
  | OrderRefundedEvent
  | SubscriptionCreatedEvent
  | SubscriptionUpdatedEvent
  | SubscriptionCancelledEvent
  | SubscriptionResumedEvent
  | SubscriptionExpiredEvent
  | SubscriptionPausedEvent
  | SubscriptionUnpausedEvent
  | SubscriptionPaymentSuccessEvent
  | SubscriptionPaymentFailedEvent
  | SubscriptionPaymentRecoveredEvent
  | LicenseKeyCreatedEvent
  | LicenseKeyUpdatedEvent;
