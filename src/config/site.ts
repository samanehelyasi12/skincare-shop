/**
 * Site-wide configuration.
 *
 * Single source of truth for brand copy, navigation and metadata defaults.
 * Import from here rather than re-declaring strings in components.
 */

export const siteConfig = {
  name: "اسکین کر",
  shortName: "اسکین‌کر",
  description:
    "فروشگاه تخصصی محصولات مراقبت از پوست و بدن، سرم، تونر، کرم و ضدآفتاب.",
  locale: "fa_IR",
  /** Fallback used for metadataBase / canonical URLs. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export interface NavItem {
  label: string;
  href: string;
}

/** Primary navigation rendered in the header. */
export const mainNav: NavItem[] = [
  { label: "صفحه اصلی", href: "/" },
  { label: "محصولات", href: "/products" },
  { label: "دسته‌بندی‌ها", href: "/categories" },
  { label: "درباره ما", href: "/about" },
  { label: "تماس با ما", href: "/contact" },
];

export interface SocialLink {
  label: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  { label: "اینستاگرام", href: "https://instagram.com" },
  { label: "تلگرام", href: "https://t.me" },
];

/** Formats accepted by the contact block in the footer. */
export const contactInfo = {
  phone: "",
  email: "",
  address: "",
} as const;