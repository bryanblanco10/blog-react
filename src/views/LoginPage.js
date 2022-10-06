import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth";

export const LoginPage = () => {
  const auth = useAuth();

  const [username, setUsername] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth.login({ username });
  };

  if (auth.user) {
    return <Navigate to="/profile" />;
  }

  return (
    <>
      <section className="content">
        <div className="content-login">
          <div className="content-tilte">
            <h3>Inicio de sesión</h3>
          </div>
          <div className="content-form">
            <form onSubmit={login}>
              <div role="group">
                <label className="label_input">
                  Usuario
                </label>
                <input
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <button className="btn_primary" type="submit">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
