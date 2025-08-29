import React from "react";
import { useRouter } from "@tanstack/react-router";

export default function BackButton({
  fallbackTo = "/",
}: {
  fallbackTo?: string;
}) {
  const router = useRouter();

  const onClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      const before =
        router.state.location.pathname +
        router.state.location.search +
        router.state.location.hash;

      router.history.back();

      // Fallback: se a URL não mudou após um tick, vai para a rota de fallback.
      setTimeout(() => {
        const after =
          router.state.location.pathname +
          router.state.location.search +
          router.state.location.hash;

        if (after === before) {
          router.navigate({ to: fallbackTo, replace: true });
        }
      }, 60);
    },
    [router, fallbackTo],
  );

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Voltar"
      className="
        relative mx-auto inline-flex items-center justify-center cursor-pointer select-none
        px-4 py-2 uppercase tracking-wide transition duration-150
        text-zinc-200 hover:text-white focus-visible:text-white
        [text-shadow:0_2px_12px_rgba(255,255,255,0.25)]
        hover:[text-shadow:0_2px_18px_rgba(255,255,255,0.65)]
        focus-visible:[text-shadow:0_2px_20px_rgba(255,255,255,0.90)]
        focus-visible:outline-none
        active:scale-[0.98]
      "
    >
      Voltar
    </button>
  );
}
