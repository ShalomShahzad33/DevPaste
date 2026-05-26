import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-175 bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />

      {/* Navbar */}
      <header className="relative z-10 border-b border-slate-800 backdrop-blur-sm bg-slate-950/70">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-2xl font-bold tracking-tight">
            Dev<span className="text-blue-500">Paste</span>
          </h1>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Login */}
            <Link
              to="/login"
              className="px-5 py-2 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 transition-colors font-medium text-slate-200"
            >
              Login
            </Link>

            {/* Signup */}
            <Link
              to="/signup"
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 transition-colors font-medium text-white shadow-lg shadow-blue-600/20"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm mb-6">
              ⚡ Built with React, Supabase & TanStack Query
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight tracking-tight">
              Save Your
              <span className="block text-blue-500">Code Snippets</span>
              Instantly.
            </h1>

            <p className="text-slate-400 text-base sm:text-lg mt-6 max-w-xl leading-7 sm:leading-8">
              DevPaste helps developers store, organize, edit, and manage their
              code snippets in a fast and clean dashboard experience.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/paste"
                className="px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition-colors font-semibold text-lg shadow-lg shadow-blue-600/20"
              >
                Launch Dashboard
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-14 max-w-lg">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <h3 className="text-3xl font-bold text-blue-400">CRUD</h3>
                <p className="text-slate-400 mt-2 text-sm">
                  Full paste management
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <h3 className="text-3xl font-bold text-blue-400">Fast</h3>
                <p className="text-slate-400 mt-2 text-sm">
                  Powered by React Query
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <h3 className="text-3xl font-bold text-blue-400">Secure</h3>
                <p className="text-slate-400 mt-2 text-sm">Supabase backend</p>
              </div>
            </div>
          </div>

          {/* Right Side Mockup */}
          <div className="relative">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl shadow-blue-950/30">
              {/* Fake Window Header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              {/* Mock Paste */}
              <div className="space-y-4">
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold text-lg">React Query Notes</h2>

                    <span className="px-3 py-1 rounded-lg bg-blue-600/10 text-blue-400 text-sm border border-blue-500/20">
                      JavaScript
                    </span>
                  </div>

                  <pre className="text-sm text-slate-400 overflow-hidden whitespace-pre-wrap leading-7">
                    {`useQuery({
  queryKey: ["pastes", page],
  queryFn: fetchPastes,
})`}
                  </pre>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold text-lg">Supabase CRUD</h2>

                    <span className="px-3 py-1 rounded-lg bg-blue-600/10 text-blue-400 text-sm border border-blue-500/20">
                      TypeScript
                    </span>
                  </div>

                  <pre className="text-sm text-slate-400 overflow-hidden whitespace-pre-wrap leading-7">
                    {`const { data } = await supabase
  .from("pastes")
  .select("*")`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Why Developers Use
            <span className="text-blue-500"> DevPaste</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Designed for speed, simplicity, and developer workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-2xl mb-6">
              ⚡
            </div>

            <h3 className="text-2xl font-semibold mb-3">Instant Performance</h3>

            <p className="text-slate-400 leading-7">
              Fast queries and responsive UI powered by TanStack Query caching.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-2xl mb-6">
              🧠
            </div>

            <h3 className="text-2xl font-semibold mb-3">Organize Snippets</h3>

            <p className="text-slate-400 leading-7">
              Keep your important code snippets and references in one place.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-2xl mb-6">
              🔒
            </div>

            <h3 className="text-2xl font-semibold mb-3">Secure Backend</h3>

            <p className="text-slate-400 leading-7">
              Your data is stored securely with Supabase authentication and
              database tools.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-linear-to-r from-blue-600 to-blue-500 rounded-4xl p-8 sm:p-10 md:p-16 text-center shadow-2xl shadow-blue-900/30">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
            Start Building Your
            <br />
            Personal Snippet Library.
          </h2>

          <p className="text-blue-100 text-lg mt-6 max-w-2xl mx-auto leading-8">
            Save, manage, and organize your developer notes in seconds.
          </p>

          <Link
            to="/paste"
            className="inline-flex mt-10 px-8 py-4 rounded-2xl bg-white text-slate-950 hover:bg-slate-100 transition-colors font-bold text-lg"
          >
            Open DevPaste
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800 bg-slate-950/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Credits */}
          <p className="text-slate-400 text-sm">
            Made by{" "}
            <span className="text-white font-medium">Shalom Shahzad</span>
          </p>

          {/* GitHub Link */}
          <a
            href="https://github.com/ShalomShahzad33/DevPaste"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 transition-colors text-sm font-medium text-slate-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.699-2.782.605-3.37-1.343-3.37-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.027 2.748-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481A10.019 10.019 0 0022 12.017C22 6.484 17.523 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View on GitHub
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
