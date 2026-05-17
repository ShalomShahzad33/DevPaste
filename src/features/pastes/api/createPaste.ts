import { supabase } from "../../../utils/supabase";
import type { CreatePasteType } from "../types/paste";

export const createPaste = async ({ title, content }: CreatePasteType) => {
  const { data, error } = await supabase
    .from("pastes")
    .insert([{ title, content }])
    .select();

  if (error) throw error;

  return data;
};
