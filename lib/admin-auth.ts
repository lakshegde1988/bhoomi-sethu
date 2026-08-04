export const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "admin@bhoomisethu.in";
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "admin123";

export function isValidAdminLogin(email: string, password: string) {
  return (
    email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase() &&
    password === ADMIN_PASSWORD
  );
}

export function setAdminSession() {
  document.cookie = "bhoomi_admin_session=authenticated; path=/; max-age=43200; sameSite=lax";
}

export function clearAdminSession() {
  document.cookie = "bhoomi_admin_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

export function hasAdminSession() {
  return document.cookie
    .split("; ")
    .some((cookie) => cookie.startsWith("bhoomi_admin_session="));
}
