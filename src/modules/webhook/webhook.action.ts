import crypto from 'crypto';

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
    payload: string,
    header: string,
    secret: string,
) {
    const hmac = crypto.createHmac('sha256', secret);
    const digest = Buffer.from(hmac.update(payload).digest('hex'), 'utf8');
    const signature = Buffer.from(header, 'utf8');

    if (!crypto.timingSafeEqual(digest, signature)) {
        throw new Error('Invalid signature.');
    }
}