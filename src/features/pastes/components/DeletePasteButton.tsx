import { useDeletePaste } from "../hooks/useDeletePaste";

const DeletePasteButton = ({ id }: { id: string }) => {
  const deletePasteMutation = useDeletePaste();

  const handleDelete = () => {
    deletePasteMutation.mutate(id);
  };

  return (
    <button
      onClick={handleDelete}
      className="px-3 py-1.5 rounded-lg bg-red-600/10 text-red-400 border border-red-500/30 hover:bg-red-600/20 hover:border-red-400 transition-colors text-sm font-medium"
    >
      Delete
    </button>
  );
};

export default DeletePasteButton;
