import React from "react";
import TopicHeaderArea from "./TopicHeaderArea";
import styled from "styled-components";

const BottomRowWrapper = styled.span`
  background: #0052d4;
`;

export default function HeaderBottomRow(props) {
  return (
    <BottomRowWrapper>
      <TopicHeaderArea topics={props.topics} />
    </BottomRowWrapper>
  );
}
