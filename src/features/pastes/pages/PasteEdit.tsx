import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePasteById } from "../hooks/usePaste";
import { useUpdatePaste } from "../hooks/useUpdatePaste";

const PasteEdit = () => {
  const { id } = useParams();
  const updatePasteMutation = useUpdatePaste();

  const { data, error, isLoading } = usePasteById(id!);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const editPaste = (e: React.SubmitEvent) => {
    e.preventDefault();
    updatePasteMutation.mutate({ id: id!, title, content });
    navigate(`/paste/${id}`);
  };

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setContent(data.content);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4">
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="bg-red-500/10 border border-red-500 rounded-2xl px-6 py-4 text-red-400">
          {error.message}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold">
              Edit <span className="text-blue-500">Paste</span>
            </h1>

            <p className="text-slate-400 mt-2">
              Update your paste content and save changes.
            </p>
          </div>

          <form className="space-y-5" onSubmit={editPaste}>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Title
              </label>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-2xl bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
                placeholder="Enter paste title..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Content
              </label>

              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={12}
                className="w-full rounded-2xl bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 resize-none transition"
                placeholder="Write your paste content..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-blue-600 hover:bg-blue-500 transition-colors py-3 font-semibold text-white shadow-lg shadow-blue-600/20"
            >
              {updatePasteMutation.isPending ? "Saving..." : "Save Changes"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasteEdit;
