import React from "react";
import blogData from "../data/blog";
import Article from "./Article";

const postData = blogData.posts;
console.log(postData);

function ArticleList({ title, date, preview }) {
  const listLoop = postData.map((element) => {
    return (
      <Article
        key={element.id}
        title={element.title}
        date={element.date}
        preview={element.preview}
      />
    );
  });
  return <main>{listLoop}</main>;
}

export default ArticleList;
