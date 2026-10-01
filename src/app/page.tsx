import { CategoriesPreview } from "@/components/home/CategoriesPreview";
import { HeroSection } from "@/components/home/HeroSection";
import { Container } from "@/components/layout/Container";

/**
 * Store homepage.
 *
 * A Server Component: no state, no event handlers, no browser APIs.
 * Sections are composed here; each one owns its own markup.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />

      <Container>
        <CategoriesPreview />
      </Container>
    </>
  );
}