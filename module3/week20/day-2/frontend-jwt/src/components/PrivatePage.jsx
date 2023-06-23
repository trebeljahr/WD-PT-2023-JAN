import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";

function PrivatePage({ children }) {
  const { isLoading, isLoggedIn } = useContext(AuthContext);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default PrivatePage;
