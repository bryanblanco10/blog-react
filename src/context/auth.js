import { createContext, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const adminList = ["bryan", "lionel", "meily"];

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = ({ username }) => {
    const isAdmin = adminList.find(el => el === username.toLowerCase());
    setUser({ username, isAdmin });
    navigate("/profile");
  }

  const logout = () => {
    setUser(null);
    navigate("/login");
  }

  const auth = { user, login, logout };

  return (
    <AuthContext.Provider value={auth}>
      { children }
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
}

export const AuthRoute = ({ children }) => {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" />
  }

  return children;
}