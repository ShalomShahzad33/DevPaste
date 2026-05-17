import { supabase } from "../../../utils/supabase";
import type { LoginAndSignupFormData } from "../types/auth.types";

export const loginWithPassword = async ({
  email,
  password,
}: LoginAndSignupFormData) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  return data;
};
