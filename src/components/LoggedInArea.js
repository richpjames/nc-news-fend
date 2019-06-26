import React from "react";
import styled from "styled-components";

const loggedInWrapper = styled.div`
  height: 2px;
  display: inline-block;
`;

export default function LoggedInArea() {
  return (
    <loggedInWrapper>
      <p>You are logged in as: a user</p>
    </loggedInWrapper>
  );
}
