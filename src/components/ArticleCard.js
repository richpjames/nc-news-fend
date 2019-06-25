import React from "react";
import timestampMaker from "../timestampMaker";

export default function ArticleCard(props) {
  const { title, author, topic, votes, commentCount, createdAt } = props;

  const dateObject = new Date(createdAt);

  return (
    <div>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <h3>{topic}</h3>
      <h4>Votes: {votes}</h4>
      <h4>Comment Count: {commentCount}</h4>
      <p>Date created: {timestampMaker(dateObject)}</p>
    </div>
  );
}
