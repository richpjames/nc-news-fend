import React from "react";
import styled from "styled-components";

const LoggedInWrapper = styled.div`
  height: 2px;
  display: inline-block;
`;

export default function LoggedInArea() {
  return (
    <LoggedInWrapper>
      <p>You are logged in as: a user</p>
    </LoggedInWrapper>
  );
}
