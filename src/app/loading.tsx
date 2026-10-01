import { Container } from "@/components/layout/Container";

export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="در حال بارگذاری"
      className="py-20"
    >
      <Container className="flex flex-col items-center gap-3">
        <span className="size-8 animate-spin rounded-full border-2 border-neutral-200 border-t-emerald-800" />
        <p className="text-sm text-neutral-500">در حال بارگذاری…</p>
      </Container>
    </div>
  );
}