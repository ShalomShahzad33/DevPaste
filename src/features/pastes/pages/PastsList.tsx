import { useState } from "react";
import { Link } from "react-router-dom";

import { usePaste } from "../hooks/usePaste";
import EditPasteButton from "../components/EditPasteButton";
import DeletePasteButton from "../components/DeletePasteButton";

import type { Paste } from "../types/paste";

const PastsList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isLoading } = usePaste(currentPage);

  return (
    <div className="space-y-4 flex flex-col">
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

      {/* List */}
      {data?.data.map((paste: Paste) => (
        <div
          key={paste.id}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-blue-500 transition-colors"
        >
          <h2 className="text-xl font-semibold mb-2">{paste.title}</h2>

          <p className="text-slate-400 line-clamp-3 mb-4">{paste.content}</p>

          <div className="flex items-center justify-between">
            <Link
              to={`/paste/${paste.id}`}
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              View Details →
            </Link>

            <div className="flex gap-3">
              <EditPasteButton id={paste.id!} />
              <DeletePasteButton id={paste.id!} />
            </div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 pt-6 flex-wrap">
        {/* Previous */}
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-xl border border-slate-700 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        {/* Pages */}
        {Array.from({ length: data?.totalPages || 1 }, (_, i) => i + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-xl transition ${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "border border-slate-700 bg-slate-900 text-slate-300 hover:bg-slate-800"
              }`}
            >
              {page}
            </button>
          ),
        )}

        {/* Next */}
        <button
          onClick={() =>
            setCurrentPage((p) => Math.min(p + 1, data?.totalPages || 1))
          }
          disabled={currentPage === data?.totalPages}
          className="px-4 py-2 rounded-xl border border-slate-700 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PastsList;
