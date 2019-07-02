import React from "react";
import { distanceInWords } from "date-fns";
import styled from "styled-components";

const MetaInfoWrapper = styled.ul`
  display: flex;
  justify-items: space-between;
  background: #d0fff6;
  border-top: solid 1px #bcb6ff;
  border-bottom: solid 1px #bcb6ff;
  margin: 0 auto;
  margin-left: auto;
  margin-right: auto;
  padding: 1vh 0;
  list-style: none;
  flex-direction: column;
  min-width: 100px;
  text-align: center;
`;

export default function MetaInfoForArticle(props) {
  const { commentCount } = props;
  const { createdAt } = props;
  const { topic } = props;

  const formattedDate = distanceInWords(createdAt, new Date());

  return (
    <MetaInfoWrapper>
      <li>Comments: {commentCount}</li>
      <li>{`Written: ${formattedDate} ago`}</li>
      <li>Topic: {topic}</li>
    </MetaInfoWrapper>
  );
}
