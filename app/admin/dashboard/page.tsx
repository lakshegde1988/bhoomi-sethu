import Image from "next/image";
import Link from "next/link";

const stats = [
  { label: "Total Listings", value: "128", trend: "+12%" },
  { label: "Available", value: "94", trend: "+6%" },
  { label: "Sold", value: "19", trend: "-3%" },
  { label: "Enquiries", value: "42", trend: "+18%" },
];

const propertyTable = [
  { id: "LN-1001", title: "Green Horizon Farm Land", type: "Farm Land", status: "Available", price: "₹28.5L" },
  { id: "LN-1004", title: "Sierra Villa Residency", type: "Villa", status: "Available", price: "₹71.5L" },
  { id: "LN-1006", title: "Skyline Residency Flat", type: "Apartment / Flat", status: "Available", price: "₹98L" },
  { id: "LN-1007", title: "Metro Trade Hub", type: "Commercial Property", status: "Under Negotiation", price: "₹1.25Cr" },
];

const enquiries = [
  { name: "Neha Sharma", property: "Emerald Grove Residential Plot", status: "New" },
  { name: "Rohit Mehta", property: "River View Agricultural Estate", status: "Follow-up" },
  { name: "Asha Verma", property: "Sierra Villa Residency", status: "Scheduled Visit" },
];

const navItems = [
  { label: "Dashboard", href: "#dashboard" },
  { label: "Properties", href: "#properties" },
  { label: "Add Property", href: "#add-property" },
  { label: "Edit Property", href: "#edit-property" },
  { label: "Delete Property", href: "#delete-property" },
  { label: "Manage Images", href: "#manage-images" },
  { label: "Customer Enquiries", href: "#customer-enquiries" },
  { label: "Settings", href: "#settings" },
];

export default function AdminDashboardPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">Admin Dashboard</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">BhoomiSethu management hub</h1>
        </div>
        <Link href="/" className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700">
          View site
        </Link>
      </div>

      <div className="grid gap-8 xl:grid-cols-[260px_1fr]">
        <aside className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_18px_60px_rgba(15,23,42,0.04)]">
          <div className="mb-5 flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 font-bold text-white">L</div>
            <div>
              <p className="text-sm font-semibold text-slate-900">BhoomiSethu Admin</p>
              <p className="text-xs text-slate-500">Operations Suite</p>
            </div>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center rounded-2xl px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700"
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
              <h2 className="text-2xl font-bold text-slate-900">Properties</h2>
              <Link href="/admin/dashboard" className="text-sm font-semibold text-emerald-700">Add new property</Link>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm text-slate-600">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500">
                    <th className="pb-3 pr-4 font-medium">Property ID</th>
                    <th className="pb-3 pr-4 font-medium">Title</th>
                    <th className="pb-3 pr-4 font-medium">Type</th>
                    <th className="pb-3 pr-4 font-medium">Status</th>
                    <th className="pb-3 pr-4 font-medium">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {propertyTable.map((property) => (
                    <tr key={property.id} className="border-b border-slate-100 last:border-b-0">
                      <td className="py-3 pr-4 font-semibold text-slate-900">{property.id}</td>
                      <td className="py-3 pr-4">{property.title}</td>
                      <td className="py-3 pr-4">{property.type}</td>
                      <td className="py-3 pr-4"><span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">{property.status}</span></td>
                      <td className="py-3 pr-4 font-semibold text-slate-900">{property.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="add-property" className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-bold text-slate-900">Add Property</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm" placeholder="Property title" />
              <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm" placeholder="Price" />
              <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm" placeholder="City" />
              <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm" placeholder="State" />
              <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm md:col-span-2" placeholder="Address" />
            </div>
            <button type="button" className="mt-5 inline-flex rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">Publish Listing</button>
          </section>

          <section id="edit-property" className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-bold text-slate-900">Edit Property</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm" placeholder="Property ID" />
              <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm" placeholder="Status" />
              <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm md:col-span-2" placeholder="Updated description" />
            </div>
            <button type="button" className="mt-5 inline-flex rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700">Save Changes</button>
          </section>

          <section id="delete-property" className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-bold text-slate-900">Delete Property</h2>
            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center">
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm" placeholder="Enter Property ID to delete" />
              <button type="button" className="inline-flex rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700">Delete</button>
            </div>
          </section>

          <section id="manage-images" className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-bold text-slate-900">Manage Property Images</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {[
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
              ].map((image) => (
                <div key={image} className="relative h-40 overflow-hidden rounded-[22px] border border-slate-200 bg-slate-50">
                  <Image src={image} alt="Property listing" fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
                </div>
              ))}
            </div>
          </section>

          <section id="customer-enquiries" className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-bold text-slate-900">Customer Enquiries</h2>
            <div className="mt-5 space-y-4">
              {enquiries.map((item) => (
                <div key={item.name} className="flex flex-col gap-3 rounded-[22px] border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-semibold text-slate-900">{item.name}</p>
                    <p className="text-sm text-slate-600">{item.property}</p>
                  </div>
                  <span className="inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">{item.status}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="settings" className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-bold text-slate-900">Settings</h2>
            <div className="mt-5 space-y-4">
              {[
                "Publish new listings automatically",
                "Enable site visit scheduling",
                "Require admin approval for featured properties",
              ].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-[20px] border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-medium text-slate-700">{item}</p>
                  <button type="button" className="rounded-full bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white">Enabled</button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
