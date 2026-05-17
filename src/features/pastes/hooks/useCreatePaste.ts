import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPaste } from "../api/createPaste";

export const useCreatePaste = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPaste,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["paste"],
      });
    },
  });
};
