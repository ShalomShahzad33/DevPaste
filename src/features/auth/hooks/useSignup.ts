import { useMutation } from "@tanstack/react-query";
import { signInWithGithub, signUpWithEmailAndPassword } from "../api/signup";

export const useSignUpWithEmailAndPassword = () => {
  return useMutation({
    mutationFn: signUpWithEmailAndPassword,
  });
};

export const useSignInWithGithub = () => {
  return useMutation({
    mutationFn: signInWithGithub,
  });
};
