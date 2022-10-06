import { useState } from "react";
import { CardBlog } from "../components/CardBlog";
import { ListBlog } from "../components/ListBlog";
import data from "../data.json";

export const HomePage = () => {
  const [items, setItems] = useState(data);

  const deletePost = (title) => {
    const newData = [...data];
    const index = data.findIndex(el => el.title === title);
    newData.splice(index, 1);
    data.splice(index, 1);
    setItems(newData);
  }

  
  return (
    <>
      <ListBlog>
        <div className="list-blog">
          {items?.map(el => <CardBlog key={el.title} item={el} deletePost={deletePost} />)}
        </div>
      </ListBlog>
    </>
  )
}