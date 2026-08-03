import Link from "next/link";

export function HeroSearch() {
  return (
    <div className="mt-8 rounded-[28px] border border-white/40 bg-white/70 p-4 shadow-[0_30px_80px_rgba(16,185,129,0.12)] backdrop-blur-md sm:p-5">
      <div className="grid gap-3 md:grid-cols-[1.2fr_0.8fr_0.6fr_auto]">
        <label className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">Location</span>
          <input
            aria-label="Location"
            placeholder="Search city or district"
            className="mt-1 w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
          />
        </label>

        <label className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">Property Type</span>
          <select className="mt-1 w-full bg-transparent text-sm text-slate-700 focus:outline-none">
            <option>Any Type</option>
            <option>Farm Land</option>
            <option>Residential Plot</option>
            <option>Villa</option>
            <option>Apartment / Flat</option>
            <option>Commercial Property</option>
          </select>
        </label>

        <label className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">Budget</span>
          <select className="mt-1 w-full bg-transparent text-sm text-slate-700 focus:outline-none">
            <option>Any Budget</option>
            <option>₹25L - ₹50L</option>
            <option>₹50L - ₹1Cr</option>
            <option>₹1Cr - ₹5Cr</option>
            <option>₹5Cr +</option>
          </select>
        </label>

        <Link
          href="/properties"
          className="inline-flex h-full items-center justify-center rounded-2xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
        >
          Search
        </Link>
      </div>
    </div>
  );
}
