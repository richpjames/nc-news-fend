import React from "react";
import LinksArea from "./ViewAllArticlesLink";
import TopicHeaderArea from "./TopicHeaderArea";
import LoggedInArea from "./LoggedInArea";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: grid;
  grid-template-rows: 1fr, 1fr;
  color: white;
  font-family: "Josefin Sans", sans-serif;
`;
const HeaderTopRow = styled.span`
  display: flex;
  justify-content: space-around;
  background: #0052d4; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #6fb1fc,
    #4364f7,
    #0052d4
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #6fb1fc,
    #4364f7,
    #0052d4
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
const HeaderBottomRow = styled.span`
  background: #0052d4; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #6fb1fc,
    #4364f7,
    #0052d4
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #6fb1fc,
    #4364f7,
    #0052d4
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
const LoggedInLinksWrapper = styled.div`
  display: inline-block;
`;

const IconWrapper = styled.span`
  font-size: 70px;
`;

export default function Header(props) {
  return (
    <HeaderWrapper>
      <HeaderTopRow>
        <h1>NC News</h1>
        <IconWrapper>
          <i class="far fa-newspaper" />
        </IconWrapper>
        <LoggedInLinksWrapper>
          <LoggedInArea />
          <LinksArea />
        </LoggedInLinksWrapper>
      </HeaderTopRow>
      <HeaderBottomRow>
        <TopicHeaderArea topics={props.topics} />
      </HeaderBottomRow>
    </HeaderWrapper>
  );
}
