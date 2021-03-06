import React from "react";
import styled from "styled-components";

const BodyWrapper = styled.div`
  text-align: left;
  padding-left: 10vw;
  padding-right: 10vw;
  margin-top: 4vh;
  margin-bottom: 4vh;
`;

export default function ArticleBody(props) {
  const { body } = props;
  return <BodyWrapper>{body}</BodyWrapper>;
}
