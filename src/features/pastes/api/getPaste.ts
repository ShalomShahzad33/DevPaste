import { supabase } from "../../../utils/supabase";

const ITEMS_PER_PAGE = 3;

export const getPastes = async (page: number) => {
  const from = (page - 1) * ITEMS_PER_PAGE;
  const to = from + ITEMS_PER_PAGE - 1;

  const { data, error, count } = await supabase
    .from("pastes")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) throw new Error();

  return {
    data,
    totalPages: Math.ceil((count || 0) / ITEMS_PER_PAGE),
  };
};

export const getPasteById = async (id: string) => {
  const { data: pastes, error } = await supabase
    .from("pastes")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error();
  return pastes;
};
