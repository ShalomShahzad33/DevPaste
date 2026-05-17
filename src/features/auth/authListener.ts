import { supabase } from "../../utils/supabase";
import { useAuthStore } from "./store/authStore";

export const initAuth = async () => {
  const { data } = await supabase.auth.getSession();

  useAuthStore.getState().setSession(data.session);
  useAuthStore.getState().setLoading(false);
};

export const subscribeToAuthChanges = () => {
  const { data: listener } = supabase.auth.onAuthStateChange(
    (_event, session) => {
      useAuthStore.getState().setSession(session);
    },
  );

  return listener.subscription;
};
