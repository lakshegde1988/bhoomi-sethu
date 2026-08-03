"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PropertyCard } from "@/components/property/property-card";
import { properties, propertyCategories } from "@/lib/properties";

const itemsPerPage = 6;

export default function PropertiesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [page, setPage] = useState(1);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(search.toLowerCase()) ||
        property.city.toLowerCase().includes(search.toLowerCase()) ||
        property.state.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || property.type === category;
      const matchesStatus = status === "All" || property.status === status;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [search, category, status]);

  const totalPages = Math.max(1, Math.ceil(filteredProperties.length / itemsPerPage));
  const shownProperties = filteredProperties.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handleReset = () => {
    setSearch("");
    setCategory("All");
    setStatus("All");
    setPage(1);
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 rounded-[28px] bg-slate-900 p-8 text-white">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">Property Directory</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Find the right land or property in India</h1>
          </div>
          <Link href="/contact" className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-200">
            Schedule a Visit
          </Link>
        </div>
      </div>

      <section className="mb-8 rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
        <div className="grid gap-4 md:grid-cols-4">
          <label className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Search</span>
            <input
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setPage(1);
              }}
              placeholder="City, state, title"
              className="mt-1 w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
            />
          </label>

          <label className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Category</span>
            <select
              value={category}
              onChange={(event) => {
                setCategory(event.target.value);
                setPage(1);
              }}
              className="mt-1 w-full bg-transparent text-sm text-slate-700 focus:outline-none"
            >
              <option value="All">All</option>
              {propertyCategories.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </label>

          <label className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Status</span>
            <select
              value={status}
              onChange={(event) => {
                setStatus(event.target.value);
                setPage(1);
              }}
              className="mt-1 w-full bg-transparent text-sm text-slate-700 focus:outline-none"
            >
              <option value="All">All</option>
              <option value="Available">Available</option>
              <option value="Sold">Sold</option>
              <option value="Under Negotiation">Under Negotiation</option>
            </select>
          </label>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700"
          >
            Reset Filters
          </button>
        </div>
      </section>

      <div className="mb-6 flex items-center justify-between text-sm text-slate-600">
        <p>
          Showing <span className="font-semibold text-slate-900">{shownProperties.length}</span> of <span className="font-semibold text-slate-900">{filteredProperties.length}</span> results
        </p>
      </div>

      {shownProperties.length > 0 ? (
        <>
          <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {shownProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </section>

          <div className="mt-10 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition disabled:cursor-not-allowed disabled:opacity-50 hover:border-emerald-200 hover:text-emerald-700"
            >
              Previous
            </button>
            <span className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
              {page} / {totalPages}
            </span>
            <button
              type="button"
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition disabled:cursor-not-allowed disabled:opacity-50 hover:border-emerald-200 hover:text-emerald-700"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div className="rounded-[28px] border border-dashed border-slate-300 bg-white p-10 text-center">
          <h2 className="text-2xl font-bold text-slate-900">No listings match your search</h2>
          <p className="mt-3 text-slate-600">Try adjusting filters or exploring other property categories.</p>
        </div>
      )}
    </main>
  );
}
