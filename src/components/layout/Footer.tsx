import Link from "next/link";
import { Container } from "./Container";
import { mainNav, siteConfig, socialLinks } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-neutral-200 bg-neutral-50">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <p className="text-base font-bold text-neutral-900">
            {siteConfig.name}
          </p>
          <p className="mt-2 text-sm leading-6 text-neutral-600">
            {siteConfig.description}
          </p>
        </div>

        <nav aria-label="پیوندهای فوتر">
          <h2 className="text-sm font-semibold text-neutral-900">دسترسی سریع</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-neutral-600 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold text-neutral-900">
            ارتباط با ما
          </h2>
          <ul className="mt-3 flex flex-col gap-2">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-600 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container className="border-t border-neutral-200 py-4">
        <p className="text-center text-xs text-neutral-500">
          © {year} {siteConfig.name}
        </p>
      </Container>
    </footer>
  );
}