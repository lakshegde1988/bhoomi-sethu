"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { isValidAdminLogin, setAdminSession } from "@/lib/admin-auth";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@bhoomisethu.in");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!isValidAdminLogin(email, password)) {
      setError("Invalid email or password.");
      return;
    }

    setAdminSession();
    router.push("/admin/dashboard");
  };

  return (
    <main className="mx-auto flex min-h-[80vh] max-w-md items-center justify-center px-4 py-10 sm:px-6">
      <div className="w-full rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-10">
        <div className="mb-8 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">Admin</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Login</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none"
              placeholder="admin@bhoomisethu.in"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none"
              placeholder="••••••••"
            />
          </label>

          {error ? (
            <p className="text-sm font-medium text-red-600">{error}</p>
          ) : null}

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
