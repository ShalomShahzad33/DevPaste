import type React from "react";
import { useState } from "react";
import {
  useSignInWithGithub,
  useSignUpWithEmailAndPassword,
} from "../hooks/useSignup";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpMutation = useSignUpWithEmailAndPassword();
  const signInWithGithubMutation = useSignInWithGithub();

  const handleSignUp = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    signUpMutation.mutate({
      email,
      password,
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-black tracking-tight">
              Create Your <span className="text-blue-500">Account</span>
            </h1>

            <p className="text-slate-400 mt-3">
              Start saving and managing your developer pastes.
            </p>
          </div>

          {/* SUCCESS MESSAGE */}
          {signUpMutation.isSuccess ? (
            <div className="bg-green-500/10 border border-green-500 rounded-2xl p-6 text-center">
              <h2 className="text-2xl font-bold text-green-400 mb-3">
                Account Created 🎉
              </h2>
              <Link
                to="/login"
                className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-4"
              >
                login to your account now
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSignUp} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-2xl bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-2xl bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={signUpMutation.isPending}
                className="w-full rounded-2xl bg-blue-600 hover:bg-blue-500 transition-colors py-3 font-semibold text-white shadow-lg shadow-blue-600/20 disabled:bg-slate-700 disabled:text-slate-400 disabled:cursor-not-allowed disabled:shadow-none"
              >
                {signUpMutation.isPending ? "Creating Account..." : "Sign Up"}
              </button>

              {/* Divider */}
              <div className="relative flex items-center justify-center">
                <div className="absolute w-full border-t border-slate-700" />

                <span className="relative bg-slate-900 px-4 text-sm text-slate-400">
                  OR CONTINUE WITH
                </span>
              </div>

              {/* GitHub Button */}
              <button
                type="button"
                onClick={() => signInWithGithubMutation.mutate()}
                disabled={signInWithGithubMutation.isPending}
                className="w-full flex items-center justify-center gap-3 rounded-2xl border border-slate-700 bg-slate-800 hover:bg-slate-700 transition-colors py-3 font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {/* GitHub Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.523 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>

                {signInWithGithubMutation.isPending
                  ? "Redirecting..."
                  : "Continue with GitHub"}
              </button>

              {/* Error */}
              {signUpMutation.error && (
                <div className="bg-red-500/10 border border-red-500 rounded-2xl p-4 text-red-400 text-sm">
                  {JSON.stringify(signUpMutation.error.message, null, 2)}
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
