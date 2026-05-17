import CreatePasteForm from "../components/createPasteForm";
import PastsList from "./PastsList";

const Pastes = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold">
              Dev<span className="text-blue-600">Paste</span> Dashboard
            </h1>

            <p className="text-slate-400 mt-2">
              Create and manage your personal pastes.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <CreatePasteForm />
          <PastsList />
        </div>
      </div>
    </div>
  );
};

export default Pastes;
