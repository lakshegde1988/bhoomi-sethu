import Image from "next/image";
import Link from "next/link";
import { PropertyCard } from "@/components/property/property-card";
import { HeroSearch } from "@/components/sections/hero-search";
import { properties, propertyCategories, propertyHighlights } from "@/lib/properties";

const featuredProperties = properties.filter((property) => property.featured).slice(0, 3);
const latestProperties = [...properties].sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 3);

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_28%),linear-gradient(135deg,_#f5fff8_0%,_#eefbf3_32%,_#ffffff_100%)]">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-700">
                Trusted Real Estate for India
              </span>
              <h1 className="mt-6 max-w-xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Find premium land and homes with confidence.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                LandNest is a premium, admin-managed platform connecting buyers with verified properties across India for residential, commercial, and agricultural investments.
              </p>

              <HeroSearch />
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[32px] border border-emerald-100 bg-white p-3 shadow-[0_35px_90px_rgba(5,150,105,0.12)]">
                <div className="relative h-[520px] overflow-hidden rounded-[24px]">
                  <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                    alt="Modern luxury villa"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 left-6 rounded-[24px] border border-emerald-100 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Active in</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">24 Cities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-4">
          {propertyHighlights.map((item) => (
            <div key={item.label} className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.04)]">
              <p className="text-3xl font-bold text-slate-900">{item.value}</p>
              <p className="mt-2 text-sm text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">Featured</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Featured Properties</h2>
          </div>
          <Link href="/properties" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
            Explore all listings →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">Latest</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Latest Properties</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {latestProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">Categories</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Explore by property type</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {propertyCategories.map((category, index) => (
            <Link
              key={category}
              href="/properties"
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:border-emerald-200"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-lg text-emerald-700">
                {index + 1}
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">{category}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Curated options for modern buyers and investors seeking strong long-term value.
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">Why choose us</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">A better, more trusted way to discover property</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Verified listings", text: "Every property is reviewed and overseen by the LandNest admin team before publishing." },
              { title: "Transparent guidance", text: "We help buyers evaluate location, pricing, and site visit logistics with complete clarity." },
              { title: "Fast site visits", text: "Our team handles scheduling so interested buyers can explore opportunities quickly and confidently." },
            ].map((item) => (
              <div key={item.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <div className="h-12 w-12 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-xl">✓</div>
                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
