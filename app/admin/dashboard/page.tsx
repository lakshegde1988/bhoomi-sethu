"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  properties as initialProperties,
  propertyCategories,
  type Property,
  type PropertyStatus,
  type PropertyType,
} from "@/lib/properties";
import { clearAdminSession, hasAdminSession } from "@/lib/admin-auth";

type AdminFormData = {
  title: string;
  type: PropertyType;
  price: string;
  area: string;
  unit: Property["unit"];
  city: string;
  state: string;
  location: string;
  address: string;
  description: string;
  images: string;
  status: PropertyStatus;
  featured: boolean;
};

const defaultFormData: AdminFormData = {
  title: "",
  type: "Farm Land",
  price: "",
  area: "",
  unit: "Sqft",
  city: "",
  state: "",
  location: "",
  address: "",
  description: "",
  images: "",
  status: "Available",
  featured: false,
};

export default function AdminDashboardPage() {
  const router = useRouter();
  const [properties, setProperties] = useState<Property[]>(initialProperties);
  const [formData, setFormData] = useState(defaultFormData);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    if (!hasAdminSession()) {
      router.push("/admin/login");
    }
  }, [router]);

  const stats = useMemo(
    () => [
      { label: "Total Listings", value: String(properties.length), trend: "+12%" },
      { label: "Available", value: String(properties.filter((item) => item.status === "Available").length), trend: "+8%" },
      { label: "Sold", value: String(properties.filter((item) => item.status === "Sold").length), trend: "-2%" },
      { label: "Featured", value: String(properties.filter((item) => item.featured).length), trend: "+9%" },
    ],
    [properties],
  );

  const handleFieldChange = <K extends keyof AdminFormData>(field: K, value: AdminFormData[K]) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);
    if (!files.length) return;

    const uploadedUrls = files.map((file) => URL.createObjectURL(file));
    setFormData((current) => ({
      ...current,
      images: [...(current.images ? current.images.split(",") : []), ...uploadedUrls]
        .map((value) => value.trim())
        .filter(Boolean)
        .join(", "),
    }));
  };

  const resetForm = () => {
    setFormData(defaultFormData);
    setEditingId(null);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const imageUrls = formData.images
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    const propertyPayload: Property = {
      id: editingId ?? `BS-${Math.floor(Math.random() * 10000)}`,
      title: formData.title,
      type: formData.type,
      price: Number(formData.price),
      area: Number(formData.area),
      unit: formData.unit,
      city: formData.city,
      state: formData.state,
      location: formData.location || `${formData.city}, ${formData.state}`,
      address: formData.address,
      description: formData.description,
      features: ["Well connected", "Good potential", "Ready for inspection"],
      images: imageUrls.length ? imageUrls : ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"],
      contactNumber: "+91 98765 43210",
      whatsappNumber: "+91 98765 43210",
      status: formData.status,
      featured: formData.featured,
      createdAt: new Date().toISOString().slice(0, 10),
    };

    setProperties((current) => {
      if (editingId) {
        return current.map((item) => (item.id === editingId ? { ...item, ...propertyPayload } : item));
      }
      return [propertyPayload, ...current];
    });

    resetForm();
  };

  const handleEdit = (property: Property) => {
    setEditingId(property.id);
    setFormData({
      title: property.title,
      type: property.type,
      price: String(property.price),
      area: String(property.area),
      unit: property.unit,
      city: property.city,
      state: property.state,
      location: property.location,
      address: property.address,
      description: property.description,
      images: property.images.join(", "),
      status: property.status,
      featured: property.featured,
    });
  };

  const handleDelete = (id: string) => {
    setProperties((current) => current.filter((item) => item.id !== id));
    if (editingId === id) {
      resetForm();
    }
  };

  const handleStatusUpdate = (id: string, status: PropertyStatus) => {
    setProperties((current) => current.map((item) => (item.id === id ? { ...item, status } : item)));
  };

  const handleLogout = () => {
    clearAdminSession();
    router.push("/admin/login");
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">Admin Dashboard</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Bhoomi Sethu management hub</h1>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/" className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700">
            View site
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-700 transition hover:bg-red-100"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-[260px_1fr]">
        <aside className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_18px_60px_rgba(15,23,42,0.04)]">
          <div className="mb-5 flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 font-bold text-white">B</div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Bhoomi Sethu Admin</p>
              <p className="text-xs text-slate-500">Operations Suite</p>
            </div>
          </div>
          <nav className="space-y-2 text-sm">
            {[
              { label: "Dashboard", href: "#dashboard" },
              { label: "Manage Listings", href: "#properties" },
              { label: "Add / Edit", href: "#form" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-2xl px-3 py-2.5 font-medium text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        <div className="space-y-8">
          <section id="dashboard" className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">Dashboard Overview</h2>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">Live</span>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">{item.label}</p>
                  <div className="mt-3 flex items-end justify-between">
                    <p className="text-3xl font-bold text-slate-900">{item.value}</p>
                    <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">{item.trend}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="properties" className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">Property Inventory</h2>
              <span className="text-sm font-semibold text-emerald-700">{properties.length} listings</span>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm text-slate-600">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500">
                    <th className="pb-3 pr-4 font-medium">ID</th>
                    <th className="pb-3 pr-4 font-medium">Title</th>
                    <th className="pb-3 pr-4 font-medium">Type</th>
                    <th className="pb-3 pr-4 font-medium">Status</th>
                    <th className="pb-3 pr-4 font-medium">Price</th>
                    <th className="pb-3 pr-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {properties.map((property) => (
                    <tr key={property.id} className="border-b border-slate-100 last:border-b-0">
                      <td className="py-3 pr-4 font-semibold text-slate-900">{property.id}</td>
                      <td className="py-3 pr-4">{property.title}</td>
                      <td className="py-3 pr-4">{property.type}</td>
                      <td className="py-3 pr-4">
                        <select
                          value={property.status}
                          onChange={(event) => handleStatusUpdate(property.id, event.target.value as PropertyStatus)}
                          className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-semibold text-slate-700 focus:border-emerald-400 focus:outline-none"
                        >
                          <option value="Available">Available</option>
                          <option value="Sold">Sold</option>
                        </select>
                      </td>
                      <td className="py-3 pr-4 font-semibold text-slate-900">₹{property.price.toLocaleString("en-IN")}</td>
                      <td className="py-3 pr-4">
                        <div className="flex gap-2">
                          <button type="button" onClick={() => handleEdit(property)} className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-700 hover:border-emerald-200 hover:text-emerald-700">Edit</button>
                          <button type="button" onClick={() => handleDelete(property.id)} className="rounded-full bg-red-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-red-700">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <form id="form" onSubmit={handleSubmit} className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <div className="mb-5 flex items-center justify-between gap-3">
              <h2 className="text-2xl font-bold text-slate-900">{editingId ? "Edit Property" : "Add Property"}</h2>
              {editingId && (
                <button type="button" onClick={resetForm} className="text-sm font-semibold text-emerald-700">Cancel edit</button>
              )}
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Title</span>
                <input value={formData.title} onChange={(event) => handleFieldChange("title", event.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none" placeholder="Property title" required />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Property Type</span>
                <select value={formData.type} onChange={(event) => handleFieldChange("type", event.target.value as PropertyType)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none">
                  {propertyCategories.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Price</span>
                <input type="number" value={formData.price} onChange={(event) => handleFieldChange("price", event.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none" placeholder="2500000" required />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Area</span>
                <input type="number" value={formData.area} onChange={(event) => handleFieldChange("area", event.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none" placeholder="1800" required />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Unit</span>
                <select value={formData.unit} onChange={(event) => handleFieldChange("unit", event.target.value as Property["unit"])} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none">
                  <option value="Sqft">Sqft</option>
                  <option value="Acres">Acres</option>
                  <option value="Guntas">Guntas</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Status</span>
                <select value={formData.status} onChange={(event) => handleFieldChange("status", event.target.value as PropertyStatus)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none">
                  <option value="Available">Available</option>
                  <option value="Sold">Sold</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">City</span>
                <input value={formData.city} onChange={(event) => handleFieldChange("city", event.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none" placeholder="Bengaluru" required />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">State</span>
                <input value={formData.state} onChange={(event) => handleFieldChange("state", event.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none" placeholder="Karnataka" required />
              </label>

              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm font-medium text-slate-700">Location</span>
                <input value={formData.location} onChange={(event) => handleFieldChange("location", event.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none" placeholder="Bengaluru, Karnataka" />
              </label>

              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm font-medium text-slate-700">Address</span>
                <input value={formData.address} onChange={(event) => handleFieldChange("address", event.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none" placeholder="Nearest landmark and route" required />
              </label>

              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm font-medium text-slate-700">Description</span>
                <textarea rows={5} value={formData.description} onChange={(event) => handleFieldChange("description", event.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none" placeholder="Describe the property, location benefits, and key features" required />
              </label>

              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm font-medium text-slate-700">Images</span>
                <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="w-full rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm file:mr-3 file:rounded-full file:border-0 file:bg-emerald-600 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white" />
                <p className="mt-2 text-xs text-slate-500">Upload multiple images. URLs can also be comma-separated in the field below.</p>
                <input value={formData.images} onChange={(event) => handleFieldChange("images", event.target.value)} className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none" placeholder="https://example.com/1.jpg, https://example.com/2.jpg" />
              </label>

              <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 md:col-span-2">
                <input type="checkbox" checked={formData.featured} onChange={(event) => handleFieldChange("featured", event.target.checked)} className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                Mark as featured property
              </label>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
                {editingId ? "Save Changes" : "Publish Listing"}
              </button>
              <button type="button" onClick={resetForm} className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700">
                Clear Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
