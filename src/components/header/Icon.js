import React from "react";
import styled from "styled-components";

const IconWrapper = styled.span`
  font-size: 70px;
  margin-top: 2vw;
  @media (max-width: 768px) {
    display: none;
  }
`;

export default function Icon() {
  return (
    <IconWrapper>
      <i className="far fa-newspaper" />
    </IconWrapper>
  );
}
