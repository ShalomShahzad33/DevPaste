import { useQuery } from "@tanstack/react-query";
import { getPasteById, getPastes } from "../api/getPaste";

export const usePaste = (page: number) => {
  return useQuery({
    queryKey: ["paste", page],
    queryFn: () => getPastes(page),
    staleTime: 1000 * 60,
  });
};

export const usePasteById = (id: string) => {
  return useQuery({
    queryKey: ["paste", id],
    queryFn: () => getPasteById(id),
  });
};
