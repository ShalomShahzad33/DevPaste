import { supabase } from "../../../utils/supabase";
import type { LoginAndSignupFormData } from "../types/auth.types";

export const signUpWithEmailAndPassword = async ({
  email,
  password,
}: LoginAndSignupFormData) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: "https://shalomdevpaste.vercel.app/paste",
    },
  });
  if (error) throw new Error(error.message);
  return data;
};

export const signInWithGithub = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "https://shalomdevpaste.vercel.app/paste",
    },
  });
  if (error) throw new Error(error.message);
  return data;
};
