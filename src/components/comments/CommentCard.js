import React from "react";
import Voter from "./Voter";
import { distanceInWords } from "date-fns";

export default function CommentCard({ comment, handleDelete, username }) {
  return (
    <div key={comment.body}>
      {comment.author === username && (
        <button onClick={() => handleDelete(comment.comment_id)}>Delete</button>
      )}
      <p>{comment.body}</p>
      <h4>{comment.author}</h4>
      <p>Votes: {comment.votes}</p>
      <p>{`${distanceInWords(comment.created_at, new Date())} ago`}</p>
      <div>{<Voter votes={comment.votes} article_id={comment.article_id} />}</div>
    </div>
  );
}
