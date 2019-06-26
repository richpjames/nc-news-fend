import React from "react";
import styled from "styled-components";

const CommentsWrapper = styled.section``;

const CommentDisplay = props => {
  return (
    <>
      <h2>Comments:</h2>
      {props.comments.map(comment => (
        <>
          <p>{comment.body}</p>
          <h4>{comment.author}</h4>
          <p>{comment.votes}</p>
          <p>{comment.created_at}</p>
        </>
      ))}
    </>
  );
};

export default CommentDisplay;
