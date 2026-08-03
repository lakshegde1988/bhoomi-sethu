import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { properties } from "@/lib/properties";

export default async function PropertyDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = properties.find((item) => item.id === id);

  if (!property) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-slate-500">
        <Link href="/" className="hover:text-emerald-700">Home</Link>
        <span>/</span>
        <Link href="/properties" className="hover:text-emerald-700">Properties</Link>
        <span>/</span>
        <span className="text-slate-900">{property.title}</span>
      </div>

      <section className="rounded-[32px] bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">{property.type}</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{property.title}</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">
              {property.status}
            </span>
            <p className="text-3xl font-bold text-slate-900">₹{property.price.toLocaleString("en-IN")}</p>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
        <div className="space-y-6">
          <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <div className="relative h-[420px] w-full">
              <Image
                src={property.images[0]}
                alt={property.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {property.images.slice(1).map((image, index) => (
              <div key={index} className="relative h-40 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
                <Image src={image} alt={`${property.title} ${index + 2}`} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
              </div>
            ))}
          </div>

          <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-bold text-slate-900">Description</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">{property.description}</p>
          </div>

          <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-bold text-slate-900">Property Features</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {property.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-bold text-slate-900">Location</h2>
            <div className="mt-5 h-72 rounded-[24px] border border-dashed border-slate-300 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.1),_rgba(255,255,255,0.8)_50%,_rgba(148,163,184,0.12))] p-5">
              <div className="flex h-full items-center justify-center rounded-[20px] border border-slate-200 bg-white/80 text-center">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">Google Map Placeholder</p>
                  <p className="mt-3 text-lg font-semibold text-slate-800">{property.city}, {property.state}</p>
                  <p className="mt-2 text-sm text-slate-500">{property.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <h3 className="text-xl font-bold text-slate-900">Property Summary</h3>
            <dl className="mt-5 space-y-4 text-sm text-slate-600">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <dt>Property ID</dt>
                <dd className="font-semibold text-slate-900">{property.id}</dd>
              </div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <dt>Area</dt>
                <dd className="font-semibold text-slate-900">{property.area} {property.unit}</dd>
              </div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <dt>Location</dt>
                <dd className="text-right font-semibold text-slate-900">{property.city}, {property.state}</dd>
              </div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <dt>District</dt>
                <dd className="font-semibold text-slate-900">{property.district}</dd>
              </div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <dt>Featured</dt>
                <dd className="font-semibold text-slate-900">{property.featured ? "Yes" : "No"}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Created</dt>
                <dd className="font-semibold text-slate-900">{property.createdAt}</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <h3 className="text-xl font-bold text-slate-900">Need a Site Visit?</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Connect with our advisors to arrange a guided property walkthrough and receive seller details.
            </p>
            <div className="mt-5 space-y-3">
              <a
                href={`tel:${property.contactNumber.replace(/\s+/g, "")}`}
                className="inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Contact Seller
              </a>
              <Link
                href={`/contact?property=${property.id}`}
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700"
              >
                Request Visit
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
