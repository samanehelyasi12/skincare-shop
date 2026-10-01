import Link from "next/link";
import { Container } from "./Container";
import { NavLink } from "@/components/navigation/NavLink";
import { mainNav, siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <Container className="flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
        >
          {siteConfig.shortName}
        </Link>

        <nav aria-label="ناوبری اصلی">
          <ul className="flex flex-wrap items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href} label={item.label} />
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}