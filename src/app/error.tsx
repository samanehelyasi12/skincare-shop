"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Replace with the real error reporter once one is chosen.
    console.error(error);
  }, [error]);

  return (
    <Container className="flex flex-col items-center gap-5 py-24 text-center">
      <h1 className="text-2xl font-bold tracking-tight text-neutral-900">
        خطایی رخ داد
      </h1>

      <p className="max-w-md text-sm leading-6 text-neutral-600">
        در نمایش این صفحه مشکلی پیش آمد. لطفاً دوباره تلاش کنید.
      </p>

      <Button onClick={reset}>تلاش دوباره</Button>
    </Container>
  );
}