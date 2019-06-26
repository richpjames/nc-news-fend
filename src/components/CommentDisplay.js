import React from "react";
import timestampMaker from "../timestampMaker";
import styled from "styled-components";

  const CommentWrapper = styled.section``


const CommentDisplay = props => {
  return(
    <CommentWrapper>

     <h2>Comments: </h2>

  props.comments.map(comment => {
    <p>{comment.body}</p>
    <h4>{comment.author}</h4>
    <p>{comment.votes}</p>
    <p>{comment.created_at}</p>
 })
   </CommentWrapper>

)
}

export default CommentDisplay;