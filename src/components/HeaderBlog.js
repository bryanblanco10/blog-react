import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth";

export const HeaderBlog = () => {
  const auth = useAuth();
  return (
    <header>
      <nav>
        <div>
          {routes.slice(0, 2).map((route) => {
            if (route.private && !auth.user) return null;

            return (
              <NavLink
                key={route.text}
                className={({ isActive }) => (isActive ? "active" : "")}
                to={route.path}
                end
              >
                {route.text}
              </NavLink>
            );
          })}
        </div>
        <div>
          {routes.slice(2, 4).map((route) => {
            if (route.private && !auth.user) return null;

            if (!route.private && auth.user) return null;

            return (
              <NavLink
                key={route.text}
                className={({ isActive }) => (isActive ? "active" : "")}
                to={route.path}
              >
                {route.text}
              </NavLink>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

const routes = [
  {
    path: "/",
    text: "Inicio",
    private: false,
  },
  {
    path: "/profile",
    text: "Perfil",
    private: true,
  },
  {
    path: "/logout",
    text: "Logout",
    private: true,
  },
  {
    path: "/login",
    text: "Login",
    private: false,
  },
];
