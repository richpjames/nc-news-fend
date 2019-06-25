import React from "react";
import LinksArea from "./ViewAllArticlesLink";
import TopicHeaderArea from "./TopicHeaderArea";
import LoggedInArea from "./LoggedInArea";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-around;
`;

export default function Header(props) {
  return (
    <HeaderWrapper>
      <TopicHeaderArea topics={props.topics} />
      <h1>NC News</h1>
      <LoggedInArea />
      <LinksArea />
    </HeaderWrapper>
  );
}
