"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const effectiveUsername = username.trim() || email.trim();

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to auth service
    console.log({ email, username: effectiveUsername, password, confirmPassword });
  }

  return (
    <div className="flex flex-1 items-center justify-center px-6 py-12 sm:px-10">
      <main className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-amber-100/15 bg-[#0f0c0a]/80 p-10 shadow-[0_28px_80px_rgba(0,0,0,0.6)] backdrop-blur-sm sm:p-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,180,108,0.16),transparent_45%),radial-gradient(circle_at_bottom,rgba(83,58,27,0.24),transparent_60%)]" />

        <div className="relative flex flex-col items-center gap-8 text-center">
          <span className="rounded-full border border-amber-200/25 bg-amber-200/5 px-4 py-1 text-xs uppercase tracking-[0.28em] text-amber-100/80">
            Lektio AI
          </span>

          <div className="space-y-4">
            <h1 className="max-w-2xl font-serif text-4xl leading-tight tracking-wide text-stone-100 sm:text-5xl">
              Claim Your Reading Room
            </h1>
            <p className="text-base leading-7 text-stone-300/90">
              We&#39;ll need some information from you first
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl space-y-5 text-left"
          >
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-xs uppercase tracking-[0.28em] text-amber-100/80"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="reader@lektio.ai"
                className="w-full rounded-2xl border border-amber-100/15 bg-black/25 px-5 py-4 text-base text-stone-100 outline-none transition placeholder:text-stone-500 focus:border-amber-200/45 focus:bg-black/35"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between gap-3">
                <label
                  htmlFor="username"
                  className="text-xs uppercase tracking-[0.28em] text-amber-100/80"
                >
                  Username
                </label>
                <span className="text-xs tracking-[0.2em] text-stone-400/80 uppercase">
                  Optional
                </span>
              </div>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder={email.trim() || "defaults to your email"}
                className="w-full rounded-2xl border border-amber-100/15 bg-black/25 px-5 py-4 text-base text-stone-100 outline-none transition placeholder:text-stone-500 focus:border-amber-200/45 focus:bg-black/35"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-xs uppercase tracking-[0.28em] text-amber-100/80"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full rounded-2xl border border-amber-100/15 bg-black/25 px-5 py-4 text-base text-stone-100 outline-none transition placeholder:text-stone-500 focus:border-amber-200/45 focus:bg-black/35"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="confirmPassword"
                className="text-xs uppercase tracking-[0.28em] text-amber-100/80"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full rounded-2xl border border-amber-100/15 bg-black/25 px-5 py-4 text-base text-stone-100 outline-none transition placeholder:text-stone-500 focus:border-amber-200/45 focus:bg-black/35"
              />
              {confirmPassword && password !== confirmPassword && (
                <p className="text-xs tracking-[0.18em] text-red-400/80 uppercase">
                  Passwords do not match
                </p>
              )}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                disabled={!!confirmPassword && password !== confirmPassword}
                className="inline-flex flex-1 items-center justify-center rounded-full border border-amber-200/35 bg-amber-100/10 px-6 py-3 text-sm font-medium uppercase tracking-[0.24em] text-amber-50 transition hover:border-amber-200/55 hover:bg-amber-100/15 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Create Account
              </button>
            </div>

            <p className="text-center text-xs tracking-[0.18em] text-stone-400/70 uppercase">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-amber-200/70 transition hover:text-amber-200"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}

