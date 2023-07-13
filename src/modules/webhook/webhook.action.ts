import crypto from "crypto";
import {
  LemonsqueezyWebhookEvent,
  LemonsqueezyWebhookPayload,
  LemonsqueezyWebhookPayloadJson,
} from "./webhook.types";

function verifySignature(
  payload: LemonsqueezyWebhookPayload,
  header: string,
  secret: string
) {
  const hmac = crypto.createHmac("sha256", secret);
  const digest = Buffer.from(hmac.update(payload).digest("hex"), "utf8");
  const signature = Buffer.from(header, "utf8");

  return crypto.timingSafeEqual(digest, signature);
}

/**
 * Construct event
 *
 * @description Constructs an event object
 *
 * @param {String} payload - Raw text body received from Lemonsqueezy
 * @param {String} header - Value of the `X-Signature` header received from Lemonsqueezy
 * @param {String} secret - Your Lemonsqueezy webhook signing secret
 *
 * @returns An event object
 */
export function constructEvent(
  payload: LemonsqueezyWebhookPayload,
  header: string,
  secret: string
): LemonsqueezyWebhookEvent {
  if (!verifySignature(payload, header, secret)) {
    throw new Error("Invalid signature.");
  }

  const jsonPayload: LemonsqueezyWebhookPayloadJson =
    payload instanceof Uint8Array
      ? JSON.parse(new TextDecoder("utf8").decode(payload))
      : JSON.parse(payload);

  const { meta, data } = jsonPayload;

  const event: LemonsqueezyWebhookEvent = {
    type: meta.event_name,
    custom_data: meta.custom_data,
    data,
  };

  return event;
}
