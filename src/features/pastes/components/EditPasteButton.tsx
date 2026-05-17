import { useNavigate } from "react-router-dom";

const EditPasteButton = ({ id }: { id: string }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/paste/${id}/edit`);
  };

  return (
    <button
      onClick={handleClick}
      className="px-3 py-1.5 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/30 hover:bg-blue-600/20 hover:border-blue-400 transition-colors text-sm font-medium"
    >
      Edit
    </button>
  );
};

export default EditPasteButton;
