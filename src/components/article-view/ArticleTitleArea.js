import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.section``

export default function ArticleTitleArea(props) {
  const {title} = props;
  const {author} = props;
  return(
  <TitleWrapper>
    <h1>{title}</h1>
    <h2>By {author}</h2>
    <br />
  </TitleWrapper>);
}
