import React, { useState } from "react";
import { useLoginWithPassword } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useLoginWithPassword();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await loginMutation.mutateAsync({
      email,
      password,
    });

    navigate("/paste");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6">
      <div className="w-full max-w-md">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-black">
              Welcome <span className="text-blue-500">Back</span>
            </h1>
            <p className="text-slate-400 mt-3">Login to continue to DevPaste</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm text-slate-300 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-2xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-2xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loginMutation.isPending}
              className="w-full py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-semibold text-white shadow-lg shadow-blue-600/20 disabled:bg-slate-700 disabled:cursor-not-allowed"
            >
              {loginMutation.isPending ? "Logging in..." : "Login"}
            </button>

            {/* Error */}
            {loginMutation.error && (
              <div className="text-red-400 text-sm bg-red-500/10 border border-red-500 rounded-2xl p-3">
                {loginMutation.error.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
