import type { Session, User } from "@supabase/supabase-js";

export type LoginAndSignupFormData = {
  email: string;
  password: string;
};

export type AuthStore = {
  user: null | User;
  session: null | Session;
  loading: boolean;
  setSession: (session: Session | null) => void;
  setLoading: (value: boolean) => void;
  clearAuth: () => void;
};
