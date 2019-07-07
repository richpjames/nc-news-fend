import React from "react";
import LoggedInArea from "./LoggedInArea";
import styled from "styled-components";
import Icon from "./Icon";

const TopRowWrapper = styled.span`
  display: flex;
  justify-content: space-around;
  height: 10vw;
  min-height: 110px;
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

  h1 {
    padding-top: 1.5vw;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 2em;
    }
  }
`;

export default function HeaderTopRow() {
  return (
    <TopRowWrapper>
      <h1>NC News</h1>
      <Icon />
      <LoggedInArea />
    </TopRowWrapper>
  );
}
