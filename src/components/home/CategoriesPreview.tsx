import { CategoryCard } from "@/components/category/CategoryCard";
import type { Category } from "@/types/category";

/**
 * Placeholder taxonomy used only to render the layout before the Django
 * `/api/categories/` endpoint exists. Replace with `getCategories()` once the
 * backend is live — the card component takes a plain `Category`, so nothing
 * else needs to change.
 */
const placeholderCategories: Category[] = [
  { id: 1, name: "سرم", slug: "serum" },
  { id: 2, name: "تونر", slug: "toner" },
  { id: 3, name: "کرم", slug: "cream" },
  { id: 4, name: "ضدآفتاب", slug: "sunscreen" },
  { id: 5, name: "مراقبت از صورت", slug: "face-care" },
  { id: 6, name: "مراقبت از بدن", slug: "body-care" },
  { id: 7, name: "رژلب", slug: "lipstick" },
];

export function CategoriesPreview() {
  return (
    <section aria-labelledby="categories-title" className="py-14">
      <h2
        id="categories-title"
        className="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl"
      >
        دسته‌بندی محصولات
      </h2>

      <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {placeholderCategories.map((category) => (
          <li key={category.id}>
            <CategoryCard category={category} />
          </li>
        ))}
      </ul>
    </section>
  );
}