import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

export const CardBlog = ({ item, deletePost }) => {
  const navigate = useNavigate();
  const auth = useAuth();

  const redirect = (slug) => {
    navigate(`/detalle-blog/${slug}`);
  }

  return (
    <div className="card">
      <h3 onClick={() => redirect(item.slug)}>{ item.title }</h3>
      <img
        src={require(`../assets/${item.img}`)}
        alt="blog-bryan"
      />
      <p>
        { item.description }
      </p>
      {auth.user?.isAdmin && <button className="btn_primary" onClick={() => deletePost(item.title)}>Eliminar</button>}
    </div>
  );
};
