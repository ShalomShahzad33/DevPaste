import { useParams } from "react-router-dom";
import { usePasteById } from "../hooks/usePaste";
import CodeHighlighter from "../components/CodeHighlighter";

const PasteDetail = () => {
  const { id } = useParams();
  const { data, error, isLoading } = usePasteById(id!);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* Loading */}
        {isLoading && (
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            Loading...
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-500/10 border border-red-500 rounded-2xl p-6 text-red-400">
            {error.message}
          </div>
        )}

        {/* Content */}
        {data && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">
            <h1 className="text-4xl font-bold mb-6">{data.title}</h1>
            <CodeHighlighter code={data.content} language="javascript" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PasteDetail;
