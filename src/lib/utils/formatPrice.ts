/**
 * Formats an integer amount of Toman as Persian grouped currency text.
 */

const priceFormatter = new Intl.NumberFormat("fa-IR", {
  maximumFractionDigits: 0,
});

/** `1250000` → `"۱٬۲۵۰٬۰۰۰"` */
export function formatPrice(amount: number): string {
  return `${priceFormatter.format(amount)} تومان`;
}

/** `1250000` → `"۱٬۲۵۰٬۰۰۰"` (no currency suffix). */
export function formatNumber(value: number): string {
  return priceFormatter.format(value);
}