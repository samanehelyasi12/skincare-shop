import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center gap-5 py-24 text-center">
      <p className="text-5xl font-bold text-emerald-800">۴۰۴</p>

      <h1 className="text-2xl font-bold tracking-tight text-neutral-900">
        صفحه مورد نظر پیدا نشد
      </h1>

      <p className="max-w-md text-sm leading-6 text-neutral-600">
        ممکن است نشانی را اشتباه وارد کرده باشید یا این صفحه حذف شده باشد.
      </p>

      <ButtonLink href="/">بازگشت به صفحه اصلی</ButtonLink>
    </Container>
  );
}