import { ButtonLink } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="border-b border-neutral-200 bg-gradient-to-b from-emerald-50 to-white"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-5 px-4 py-16 text-center sm:px-6 md:py-24">
        <h1
          id="hero-title"
          className="max-w-2xl text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
        >
          مراقبت از پوست، با انتخابی آگاهانه
        </h1>

        <p className="max-w-xl text-base leading-7 text-neutral-600">
          فروشگاه تخصصی محصولات مراقبت از پوست و بدن؛ سرم، تونر، کرم و ضدآفتاب.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href="/products" size="lg">
            مشاهده محصولات
          </ButtonLink>
          <ButtonLink href="/about" size="lg" variant="secondary">
            درباره ما
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}