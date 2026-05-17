import { create } from "zustand";
import type { AuthStore } from "../types/auth.types";

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  session: null,
  loading: true,
  setSession: (session) =>
    set({
      user: session?.user ?? null,
      session: session ?? null,
    }),
  setLoading: (value) =>
    set({
      loading: value,
    }),
  clearAuth: () => {
    set({
      user: null,
      session: null,
      loading: false,
    });
  },
}));
