import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.h1`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  background: #b0d4fd;
  font-size: 1.5em;
  font-family: "Josefin Sans", sans-serif;
  padding: 0.2em;
`;

export default function ArticleTitle(props) {
  const { title } = props;
  return <TitleWrapper>{title}</TitleWrapper>;
}
