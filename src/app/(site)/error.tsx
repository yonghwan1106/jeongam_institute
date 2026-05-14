"use client";

import { useEffect } from "react";

export default function SiteError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="paper-texture py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <div className="mb-4 flex justify-center">
          <span className="hanja text-3xl text-dancheong-red">誤</span>
        </div>
        <h1 className="font-display text-3xl font-bold text-ink mb-4">
          페이지를 불러오지 못했습니다
        </h1>
        <p className="text-ink-mute leading-relaxed mb-8">
          일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
        </p>
        <button
          onClick={() => reset()}
          className="rounded-sm bg-ink px-6 py-3 font-medium text-hanji-warm hover:bg-dancheong-red transition-colors"
        >
          다시 시도
        </button>
      </div>
    </section>
  );
}
