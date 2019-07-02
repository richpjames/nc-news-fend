import React from "react";
import Voter from "./Voter";
import styled from "styled-components";
import CommentBody from "./CommentBody";
import CommentMetaInfo from "./CommentMetaInfo";

const CommentCardWrapper = styled.div`
  margin: 0;
  padding: 1em 0;
  padding-left: 5vw;
  padding-right: 5vw;
  background: #d0fff6;
  border-bottom: solid 1px #bcb6ff;

  :nth-child(odd) {
    background: #cae2fd;
  }
`;

export default function CommentCard({ comment, handleDelete, username }) {
  return (
    <CommentCardWrapper key={comment.body}>
      <CommentBody body={comment.body} />
      <CommentMetaInfo author={comment.author} createdAt={comment.created_at} />
      {comment.author === username && (
        <button onClick={() => handleDelete(comment.comment_id)}>Delete</button>
      )}
      <div>
        {<Voter votes={comment.votes} comment_id={comment.comment_id} />}
      </div>
    </CommentCardWrapper>
  );
}
