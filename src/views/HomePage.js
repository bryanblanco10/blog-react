import { useEffect, useState } from "react";
import { CardBlog } from "../components/CardBlog";
import { ListBlog } from "../components/ListBlog";
import data from "../data.json";

export const HomePage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);
  
  return (
    <>
      <ListBlog>
        <div className="list-blog">
          {items?.map(el => <CardBlog key={el.title} item={el} />)}
        </div>
      </ListBlog>
    </>
  )
}