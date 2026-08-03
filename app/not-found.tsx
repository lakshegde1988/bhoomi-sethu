import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
      <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">404</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">Property not found</h1>
        <p className="mt-4 text-base leading-8 text-slate-600">
          The listing you are looking for may have moved or is no longer available. Explore our property directory to discover active opportunities.
        </p>
        <Link href="/properties" className="mt-6 inline-flex rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
          Browse Properties
        </Link>
      </div>
    </main>
  );
}
