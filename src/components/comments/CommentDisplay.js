import React from "react";
import styled from "styled-components";
import { distanceInWords } from "date-fns";
import Voter from "./Voter";

const CommentsWrapper = styled.section``;

const CommentDisplay = props => {
  // const formattedDate = distanceInWords(createdAt, new Date());
  return (
    <>
      <h2>Comments:</h2>
      {props.comments.map(comment => (
        <div key={comment.body}>
          <p>{comment.body}</p>
          <h4>{comment.author}</h4>
          <p>{comment.votes}</p>
          <p>{`${distanceInWords(comment.created_at, new Date())} ago`}</p>
          <p>
            {<Voter votes={comment.votes} article_id={comment.article_id} />}
          </p>
        </div>
      ))}
    </>
  );
};

export default CommentDisplay;
