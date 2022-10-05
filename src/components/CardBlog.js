import { useNavigate } from "react-router-dom";

export const CardBlog = ({ item }) => {
  const navigate = useNavigate();

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
    </div>
  );
};
