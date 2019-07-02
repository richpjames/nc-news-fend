import React from "react";
import styled from "styled-components";

const BodyWrapper = styled.p`
  border: solid 1px #eccbd9;
  padding: 10px;
`;

export default function CommentBody(props) {
  const { body } = props;
  return <BodyWrapper>{body}</BodyWrapper>;
}
