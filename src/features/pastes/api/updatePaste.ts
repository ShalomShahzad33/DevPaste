import { supabase } from "../../../utils/supabase";
import type { Paste } from "../types/paste";

export const updatePaste = async ({ id, title, content }: Paste) => {
  const { data, error } = await supabase
    .from("pastes")
    .update({ title, content })
    .eq("id", id)
    .select();

  if (error) throw new Error();
  return data;
};
