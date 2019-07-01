import React from "react";
import styled from "styled-components";

const BodyWrapper = styled.div`
  text-align: left;
  padding-left: 5vw;
  padding-right: 5vw;
`;

export default function ArticleBody(props) {
  const { body } = props;
  return <BodyWrapper>{body}</BodyWrapper>;
}
