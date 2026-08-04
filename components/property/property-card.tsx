import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/lib/properties";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.1)]">
      <div className="relative h-60 overflow-hidden">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
          <span className="inline-flex rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-700">
            {property.type}
          </span>
          {property.featured && (
            <span className="inline-flex rounded-full bg-emerald-600 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
              Featured
            </span>
          )}
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-emerald-700">{property.location}</p>
            <h3 className="mt-2 text-xl font-bold text-slate-900">{property.title}</h3>
          </div>
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
            {property.status}
          </span>
        </div>

        <p className="text-sm leading-6 text-slate-600">{property.address}</p>

        <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2 text-sm text-slate-600">
          <span>{property.area} {property.unit}</span>
          <span>{property.city}</span>
        </div>

        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500">Starting at</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">
              ₹{property.price.toLocaleString("en-IN")}
            </p>
          </div>
          <Link
            href={`/properties/${property.id}`}
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
