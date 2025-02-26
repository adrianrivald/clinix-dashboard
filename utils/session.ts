const API_URL = process.env.NEXT_PUBLIC_API_URL
const STORAGE_KEY = 'session';
const USER_KEY = 'user_info';

export function getSession() {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem(STORAGE_KEY);
  }
  
}

export function setSession(newSession: string) {
  window.localStorage.setItem(STORAGE_KEY, newSession);
}

export function flushStorage() {
  window.localStorage.removeItem(STORAGE_KEY);
  window.localStorage.removeItem(USER_KEY);
}
export async function flushSession() {
  // use `fetch` instead of `http` from `utils` to prevent circular dependency
  await window.fetch(`${API_URL}/logout`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${typeof window !== "undefined" ? getSession() : ""}`,
    },
  });

  flushStorage();
}
