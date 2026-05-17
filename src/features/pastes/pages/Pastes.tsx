import { Logout } from "../../auth/api/logout";
import CreatePasteForm from "../components/createPasteForm";
import PastsList from "./PastsList";

const Pastes = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* HEADER */}
        <div className="flex items-start justify-between mb-10">
          {/* LEFT SIDE */}
          <div>
            <h1 className="text-4xl font-bold">
              Dev<span className="text-blue-600">Paste</span> Dashboard
            </h1>

            <p className="text-slate-400 mt-2">
              Create and manage your personal pastes.
            </p>
          </div>

          {/* RIGHT SIDE - LOGOUT BUTTON */}
          <button
            onClick={Logout}
            className="flex items-center gap-2 px-5 py-2 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:text-red-300 transition font-medium"
          >
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M16 13v-2H7V8l-5 4 5 4v-3z" />
              <path d="M20 3h-9a2 2 0 00-2 2v4h2V5h9v14h-9v-4H9v4a2 2 0 002 2h9a2 2 0 002-2V5a2 2 0 00-2-2z" />
            </svg>
            Logout
          </button>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-8">
          <CreatePasteForm />
          <PastsList />
        </div>
      </div>
    </div>
  );
};

export default Pastes;
