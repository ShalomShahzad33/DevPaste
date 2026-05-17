import { useState } from "react";
import { useCreatePaste } from "../hooks/useCreatePaste";

const CreatePasteForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createPasteMutation = useCreatePaste();

  const createPaste = (e: React.FormEvent) => {
    e.preventDefault();

    createPasteMutation.mutate(
      { title, content },
      {
        onSuccess: () => {
          setTitle("");
          setContent("");
        },
      },
    );
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
      <h1 className="text-2xl font-bold text-white mb-6">Create a New Paste</h1>

      <form onSubmit={createPaste} className="space-y-4">
        <input
          type="text"
          placeholder="Paste title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
        />

        <textarea
          placeholder="Write your paste content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={8}
          className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 resize-none"
        />

        <button
          type="submit"
          disabled={createPasteMutation.isPending}
          className="w-full rounded-xl bg-blue-600 hover:bg-blue-500 transition-colors py-3 font-semibold text-white disabled:bg-slate-700 disabled:cursor-not-allowed"
        >
          {createPasteMutation.isPending ? "Creating..." : "Create Paste"}
        </button>
      </form>
    </div>
  );
};

export default CreatePasteForm;
