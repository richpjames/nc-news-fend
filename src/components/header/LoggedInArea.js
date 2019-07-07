import React from "react";
import styled from "styled-components";

const LoggedInWrapper = styled.div`
  height: 20px;
  float: right;
  @media (max-width: 768px) {
    font-size: 0.75em;
  }
`;

export default function LoggedInArea() {
  return (
    <LoggedInWrapper>
      <p>You are logged in as: jessjelly</p>
    </LoggedInWrapper>
  );
}
