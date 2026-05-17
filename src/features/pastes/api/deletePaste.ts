import { supabase } from "../../../utils/supabase";

export const deletePaste = async (id: string) => {
  const { error } = await supabase.from("pastes").delete().eq("id", id);
  if (error) throw new Error();
};
