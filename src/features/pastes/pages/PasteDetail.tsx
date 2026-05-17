import { useParams } from "react-router-dom";
import { usePasteById } from "../hooks/usePaste";

const PasteDetail = () => {
  const { id } = useParams();

  const { data, error, isLoading } = usePasteById(id!);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-10">
        {isLoading && (
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            Loading...
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500 rounded-2xl p-6 text-red-400">
            {error.message}
          </div>
        )}

        {data && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">
            <h1 className="text-4xl font-bold mb-6">{data.title}</h1>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
              <p className="text-slate-300 whitespace-pre-wrap leading-7">
                {data.content}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasteDetail;
