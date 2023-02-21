import React from "react";

function About(props) {
  const image = props.image;
  return (
    <aside>
      {image ? (
        <img src={image} alt="blog logo"></img>
      ) : (
        <img src="https://via.placeholder.com/215" alt="blog logo"></img>
      )}
      <p>{props.about}</p>
    </aside>
  );
}

export default About;
