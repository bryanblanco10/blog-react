import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth";

export const LogoutPage = () => {
  const auth = useAuth();
  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  }

  if (!auth.user) {
    return <Navigate to="/login" />
  }

  return (
    <>
      <section className="content">
        <div className="content-login">
          <h1 className="content-profile">¿Seguro que deseas salir?</h1>
          <button className="btn_primary" onClick={logout}>Salir</button>
        </div>
      </section>
    </>
  )
}