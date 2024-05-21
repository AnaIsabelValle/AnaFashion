import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children ? children : <Outlet />;
}; 


/*
 * Protects certain application paths and ensures that only authenticated users can access them.
 * Authentication: It uses the useAuth hook to check if the user is authenticated.
 * Redirection: If the user is not authenticated, it automatically redirects to the login page
 * ("/login") using <Navigate to="/login" />.
 * Rendering Protected Content: If the user is authenticated, it renders the protected content 
 * using the React Router Outlet component, which renders the nested content within the protected route.
 */