import Link from "next/link";

import PulseSigil from "@/components/PulseSigil";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-12 sm:px-10">
      <main className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-amber-100/15 bg-[#0f0c0a]/80 p-10 shadow-[0_28px_80px_rgba(0,0,0,0.6)] backdrop-blur-sm sm:p-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,180,108,0.16),transparent_45%),radial-gradient(circle_at_bottom,rgba(83,58,27,0.24),transparent_60%)]" />

        <div className="relative flex flex-col items-center gap-8 text-center">
          <span className="rounded-full border border-amber-200/25 bg-amber-200/5 px-4 py-1 text-xs uppercase tracking-[0.28em] text-amber-100/80">
            Lektio AI
          </span>

          <PulseSigil />

          <h1 className="max-w-2xl font-serif text-4xl leading-tight tracking-wide text-stone-100 sm:text-5xl">
            The Shelves are Being Arranged
          </h1>

          <p className="max-w-2xl text-base leading-7 text-stone-300/90 sm:text-lg">
            Our LLM-powered recommendation engine is still between the stacks,
            learning your taste in unforgettable books. We are under
            construction and opening soon.
          </p>

          <div className="mt-2 flex w-full max-w-xl items-center justify-center gap-3 rounded-2xl border border-amber-100/15 bg-black/25 px-5 py-4 text-sm text-stone-300/85">
            <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.8)]" />
            Quietly indexing genres, eras, moods, and hidden gems...
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full border border-amber-200/30 bg-amber-100/10 px-6 py-3 text-sm font-medium tracking-[0.18em] text-amber-50 transition hover:border-amber-200/55 hover:bg-amber-100/15"
            >
              Preview the login page
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
