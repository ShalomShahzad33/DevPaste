import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePaste } from "../api/updatePaste";

export const useUpdatePaste = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatePaste,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["paste"],
      });
    },
  });
};
