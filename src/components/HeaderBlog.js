import { NavLink } from "react-router-dom";

export const HeaderBlog = () => {
  return (
    <header>
      <nav>
        <div>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
            end
          >
            Inicio
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/perfil"
          >
            Perfil
          </NavLink>
        </div>
        <div>
          <button>Login</button>
        </div>
      </nav>
    </header>
  );
};
