import React from "react";

function Article(props) {
  const date = props.date;
  return (
    <article>
      <h3>{props.title}</h3>
      {date ? <small>{date}</small> : "January 1, 1970"}
      <p>{props.preview}</p>
    </article>
  );
}

export default Article;
