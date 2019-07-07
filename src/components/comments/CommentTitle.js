import React from "react";
import styled from "styled-components";

const CommentTitleWrapper = styled.div`
  background: #cae2fd;
  padding-top: 2vh;
  padding-bottom: 2vh;
  margin-left: auto;
  margin-right: auto;
  border-bottom: solid 1px #bcb6ff;
  display: block;
`;

export default function CommentTitle() {
  return (
    <CommentTitleWrapper>
      <h2>Comments:</h2>
    </CommentTitleWrapper>
  );
}
