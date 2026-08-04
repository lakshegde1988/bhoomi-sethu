import Link from "next/link";

export default function AdminLoginPage() {
  return (
    <main className="mx-auto flex min-h-[80vh] max-w-6xl items-center justify-center px-4 py-10 sm:px-6">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:grid-cols-[1fr_0.9fr]">
        <div className="bg-slate-900 p-8 text-white sm:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">Admin Access</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Secure Bhoomi Sethu property portal</h1>
          <p className="mt-4 max-w-md text-base leading-8 text-slate-300">
            Bhoomi Sethu is operated by the admin team only to maintain quality listings, accurate pricing, and a trusted buyer experience.
          </p>
          <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-5 text-sm text-slate-200">
            <p className="font-semibold text-white">Admin capabilities</p>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li>• Add new listings</li>
              <li>• Update property status</li>
              <li>• Manage property images</li>
              <li>• Maintain listing inventory</li>
            </ul>
          </div>
        </div>

        <div className="p-8 sm:p-10">
          <div className="mb-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">Sign in</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Welcome back</h2>
          </div>

          <form className="space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Email Address</span>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none" placeholder="admin@bhoomisethu.in" />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Password</span>
              <input type="password" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none" placeholder="••••••••" />
            </label>

            <div className="flex items-center justify-between text-sm text-slate-600">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                Remember me
              </label>
              <Link href="/contact" className="text-emerald-700 hover:text-emerald-800">Need help?</Link>
            </div>

            <Link
              href="/admin/dashboard"
              className="inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Login to Dashboard
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
}
