import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.section`
  background: #cae2fd;
  padding-top: 0.25vh;
  padding-bottom: 0.25vh;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

const Title = styled.h1`
  width: 70%;
  margin-right: auto;
  margin-left: auto;
`;

export default function ArticleTitleArea(props) {
  const { title } = props;
  const { author } = props;
  return (
    <TitleWrapper>
      <Title>{title}</Title>
      <h2>By {author}</h2>
      <br />
    </TitleWrapper>
  );
}
