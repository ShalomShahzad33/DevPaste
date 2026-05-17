import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-black text-blue-500">404</h1>

        <h2 className="text-2xl font-bold mt-4">Page not found</h2>

        <p className="text-slate-400 mt-3">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/paste"
          className="inline-block mt-6 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-medium"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
