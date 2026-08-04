export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[30px] bg-slate-900 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">Contact</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Talk to the Bhoomi Sethu team</h1>
          <div className="mt-8 space-y-5 text-slate-300">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Company</p>
              <p className="mt-2 text-lg font-semibold text-white">Bhoomi Sethu</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Phone</p>
              <p className="mt-2 text-lg font-semibold text-white">+91 98765 43210</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">WhatsApp</p>
              <p className="mt-2 text-lg font-semibold text-white">+91 98765 43210</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Email</p>
              <p className="mt-2 text-lg font-semibold text-white">hello@bhoomisethu.in</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Office Address</p>
              <p className="mt-2 text-lg font-semibold text-white">12 Green Plaza, Bengaluru, Karnataka 560001</p>
            </div>
          </div>
        </div>

        <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
          <h2 className="text-2xl font-bold text-slate-900">Request a callback</h2>
          <form className="mt-6 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Full Name</span>
                <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none" placeholder="Your name" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Phone Number</span>
                <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none" placeholder="+91 98xxxxxx" />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Email Address</span>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none" placeholder="you@example.com" />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Property Interest</span>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none" placeholder="Farm Land, Plot, Flat, etc." />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Message</span>
              <textarea rows={5} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none" placeholder="Tell us about the property you are interested in." />
            </label>

            <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700">
              Submit Enquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
