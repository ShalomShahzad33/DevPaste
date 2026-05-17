import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePaste } from "../api/deletePaste";

export const useDeletePaste = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePaste,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["paste"],
      });
    },
  });
};
