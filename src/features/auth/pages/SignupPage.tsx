import React from "react";
import { Link } from "react-router-dom";

function SignupPage() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-6 text-white">
      <div className="grid w-full max-w-[1120px] gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="hidden h-full flex-col justify-between rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 shadow-2xl ring-1 ring-white/10 lg:flex lg:max-h-[calc(100vh-48px)]">
          <div className="space-y-6">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
              <span className="uppercase tracking-[0.3em] text-slate-400">
                Quantum Terminal
              </span>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                Live
              </span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5 shadow-[0_35px_120px_-50px_rgba(15,23,42,0.8)]">
              <div className="mb-5 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-500">
                <span>Market View</span>
                <span className="rounded-full bg-slate-800/90 px-2.5 py-1 text-slate-300">
                  Secure
                </span>
              </div>
              <div className="h-44 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950" />
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl bg-slate-950/85 p-5 ring-1 ring-white/10">
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>Portfolio</span>
                <span className="rounded-full bg-sky-500/10 px-2 py-1 text-xs text-sky-300">
                  Active
                </span>
              </div>
              <p className="mt-4 text-3xl font-semibold text-white">$16.2M</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-slate-950/85 p-4 ring-1 ring-white/10">
                <p className="text-sm text-slate-400">Available Credit</p>
                <p className="mt-3 text-2xl font-semibold text-white">$98.4K</p>
              </div>
              <div className="rounded-2xl bg-slate-950/85 p-4 ring-1 ring-white/10">
                <p className="text-sm text-slate-400">Trade Flow</p>
                <p className="mt-3 text-2xl font-semibold text-white">+12.8%</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 text-slate-300">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
              Institutional Terminal System
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Secure access for verified finance professionals. Sign up to
              manage accounts, review positions, and track performance in real
              time.
            </p>
          </div>
        </section>

        <section className="rounded-2xl bg-slate-900/95 p-6 shadow-2xl ring-1 ring-white/10 backdrop-blur sm:p-8">
          <div className="mb-8 space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.3em] text-slate-300">
              <svg
                className="h-4 w-4 text-sky-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
              Secured Finance
            </span>
            <h1 className="text-2xl font-semibold text-white sm:text-3xl">
              Create your secured finance account
            </h1>
            <p className="max-w-xl text-sm leading-6 text-slate-400">
              Register with your institutional email to access the Secured
              Finance Terminal.
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label
                className="mb-2 block text-sm font-medium text-slate-300"
                htmlFor="name"
              >
                Full Name
              </label>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3">
                <span className="text-slate-400">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M4 21v-2a4 4 0 0 1 3-3.87" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </span>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                />
              </div>
            </div>

            <div>
              <label
                className="mb-2 block text-sm font-medium text-slate-300"
                htmlFor="email"
              >
                Institutional Email
              </label>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3">
                <span className="text-slate-400">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16v16H4z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@firm-domain.com"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                />
              </div>
            </div>

            <div>
              <label
                className="mb-2 block text-sm font-medium text-slate-300"
                htmlFor="password"
              >
                Secure Password
              </label>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3">
                <span className="text-slate-400">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </span>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••••••"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                />
              </div>
            </div>

            <div>
              <label
                className="mb-2 block text-sm font-medium text-slate-300"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3">
                <span className="text-slate-400">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                    <path d="M12 12v-2" />
                    <path d="M16.24 7.76A6 6 0 0 1 19 12" />
                    <path d="M4.93 4.93A10 10 0 0 0 12 2" />
                  </svg>
                </span>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••••••"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              Create Account
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
            <span className="relative mx-auto inline-flex bg-slate-900 px-4 text-sm text-slate-500">
              Or continue with
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <button className="flex h-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/80 text-sm font-medium text-slate-200 transition hover:border-sky-400 hover:text-white">
              Google
            </button>
            <button className="flex h-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/80 text-sm font-medium text-slate-200 transition hover:border-sky-400 hover:text-white">
              LinkedIn
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="font-semibold text-sky-400 hover:text-sky-300"
            >
              Sign In
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}

export default SignupPage;
