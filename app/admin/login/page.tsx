import Link from "next/link";

export default function AdminLoginPage() {
  return (
    <main className="mx-auto flex min-h-[80vh] max-w-md items-center justify-center px-4 py-10 sm:px-6">
      <div className="w-full rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-10">
        <div className="mb-8 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">Admin</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Login</h1>
        </div>

        <form className="space-y-5">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
            <input
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none"
              placeholder="admin@bhoomisethu.in"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Password</span>
            <input
              type="password"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none"
              placeholder="••••••••"
            />
          </label>

          <Link
            href="/admin/dashboard"
            className="inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Login
          </Link>
        </form>
      </div>
    </main>
  );
}
