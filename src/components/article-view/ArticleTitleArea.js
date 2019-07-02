import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.section`
  background: #cae2fd;
  padding-top: 0.25vh;
  padding-bottom: 0.25vh;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`;

export default function ArticleTitleArea(props) {
  const { title } = props;
  const { author } = props;
  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <h2>By {author}</h2>
      <br />
    </TitleWrapper>
  );
}
