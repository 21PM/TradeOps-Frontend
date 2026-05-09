import React from "react";
import { Link } from "react-router-dom";

function SiginPage() {
  return (
    <main className="min-h-100vh bg-slate-950 flex items-center justify-center px-4 py-6 text-white">
      <div className="grid w-full max-w-[1120px] gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="hidden h-full flex-col justify-between rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900  shadow-2xl ring-1 ring-white/10 lg:flex lg:max-h-[calc(100vh-48px)]">
          <img src="" />
        </section>

        <section className="rounded-2xl bg-slate-900/95 p-6 shadow-2xl ring-1 ring-white/10 backdrop-blur sm:p-8">
          <div className="mb-8 space-y-3">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.3em] text-slate-300">
              Secured Finance
            </span>
            <h1 className="text-2xl font-semibold text-white sm:text-3xl">
              Access the Secured Finance Terminal
            </h1>
          </div>

          <form className="space-y-4">
            <div>
              <label
                className="mb-2 block text-sm font-medium text-slate-300"
                htmlFor="email"
              >
                Institutional Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@firm-domain.com"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between text-sm text-slate-400">
                <label
                  className="font-medium text-slate-300"
                  htmlFor="password"
                >
                  Secure Password
                </label>
                <button
                  type="button"
                  className="text-slate-400 transition hover:text-white"
                >
                  Forgot Password?
                </button>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••••••"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              Sign In
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
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-sky-400 hover:text-sky-300"
            >
              Register
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}

export default SiginPage;
