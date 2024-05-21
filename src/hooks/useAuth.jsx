import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;

/**
 * useAuth:  is the way to access app authentication information
 *  without having to manually pass props between components
 */