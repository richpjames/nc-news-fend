import React from "react";
import HeaderTopRow from "./HeaderTopRow";
import HeaderBottomRow from "./HeaderBottomRow";
import styled from "styled-components";
import { Link } from "@reach/router";

const HeaderWrapper = styled.header`
  display: grid;
  grid-template-rows: 1fr, 1fr;
  color: white;
  font-family: "Josefin Sans", sans-serif;
`;

export default function Header(props) {
  return (
    <HeaderWrapper>
      <Link to="/">
        <HeaderTopRow />
      </Link>
      <HeaderBottomRow topics={props.topics} />
    </HeaderWrapper>
  );
}
