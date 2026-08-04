import Image from "next/image";

const numbers = [
  { value: "12+", label: "Years experience" },
  { value: "3.4k", label: "Property visits" },
  { value: "96%", label: "Buyer satisfaction" },
  { value: "24", label: "Cities covered" },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-[32px] bg-slate-900 p-8 text-white md:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">About Bhoomi Sethu</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Connecting people with verified properties across India.</h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              We help buyers connect with verified seller opportunities across India while keeping the experience simple, transparent, and admin-led.
            </p>
          </div>
          <div className="relative h-[360px] overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
              alt="Real estate team discussing plot options"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-4">
        {numbers.map((item) => (
          <div key={item.label} className="rounded-[24px] border border-slate-200 bg-white p-6 text-center shadow-[0_20px_60px_rgba(15,23,42,0.04)]">
            <p className="text-3xl font-bold text-slate-900">{item.value}</p>
            <p className="mt-2 text-sm text-slate-600">{item.label}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
          <h2 className="text-2xl font-bold text-slate-900">Our mission</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Bhoomi Sethu exists to simplify property discovery in India by bringing together premium land, residential, and commercial opportunities with a trusted, admin-managed process.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            We focus on trustworthy listings, transparent communication, and expert guidance for site visits—so every buyer can make a confident decision.
          </p>
        </div>

        <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
          <h2 className="text-2xl font-bold text-slate-900">Why buyers trust us</h2>
          <ul className="mt-5 space-y-4 text-base text-slate-600">
            <li className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500" /> Verified inventory with admin oversight</li>
            <li className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500" /> Premium locations across major Indian cities</li>
            <li className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500" /> Dedicated assistance for visits and buyer-seller coordination</li>
            <li className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500" /> Clear and credible property details before every meeting</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
