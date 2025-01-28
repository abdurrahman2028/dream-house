import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../Authentication/Provider/AuthProvider";

const Private = ({ children }) => {
  const { user, loading } = useContext(authContext);
  if (loading) {
    return (
      <div className="bg-gray-800 min-h-screen flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400 dark:bg-violet-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400 dark:bg-violet-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400 dark:bg-violet-600"></div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default Private;
