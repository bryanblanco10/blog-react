import { useParams } from "react-router-dom";
import data from "../data.json";

export const BlogDetail = () => {
  const { slug } = useParams();
  const item = data.find((el) => el.slug === slug);

  return (
    <>
      <h3 className="title-blog">{ item.title }</h3>
      <div className="content-img">
        <img src={ require(`../assets/${item.img}`) } alt={item.title} />
      </div>
      <p className="paragraph">
        { item.description }
      </p>
    </>
  )
}