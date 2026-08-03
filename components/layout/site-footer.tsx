import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500 font-bold text-white">
                L
              </div>
              <div>
                <p className="text-lg font-bold text-white">BhoomiSethu</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-300">India Real Estate</p>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-6 text-slate-400">
              Discover trusted land and property opportunities across India with a transparent, admin-managed buying experience.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">Company</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-emerald-300">About us</Link></li>
              <li><Link href="/properties" className="hover:text-emerald-300">Properties</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-300">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">Categories</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/properties" className="hover:text-emerald-300">Farm Land</Link></li>
              <li><Link href="/properties" className="hover:text-emerald-300">Residential Plot</Link></li>
              <li><Link href="/properties" className="hover:text-emerald-300">Villa</Link></li>
              <li><Link href="/properties" className="hover:text-emerald-300">Commercial Property</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>+91 98765 43210</li>
              <li>hello@landnest.in</li>
              <li>12 Green Plaza, Bengaluru</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 BhoomiSethu. All rights reserved.</p>
          <p>Admin-managed property discovery, trusted by land buyers across India.</p>
        </div>
      </div>
    </footer>
  );
}
