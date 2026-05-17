import { supabase } from "../../../utils/supabase";
import { useAuthStore } from "../store/authStore";

export const Logout = async () => {
  await supabase.auth.signOut();
  useAuthStore.getState().clearAuth();

  window.location.href = "/login";
};
