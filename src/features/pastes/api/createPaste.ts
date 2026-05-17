import { supabase } from "../../../utils/supabase";
import type { CreatePasteType } from "../types/paste";

export const createPaste = async ({
  title,
  content,
  user_id,
}: CreatePasteType) => {
  const { data, error } = await supabase
    .from("pastes")
    .insert([{ title, content, user_id }])
    .select();

  if (error) throw error;

  return data;
};
