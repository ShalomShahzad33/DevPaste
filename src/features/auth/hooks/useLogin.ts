import { useMutation } from "@tanstack/react-query";
import { loginWithPassword } from "../api/Login";

export const useLoginWithPassword = () => {
  return useMutation({
    mutationFn: loginWithPassword,
  });
};
