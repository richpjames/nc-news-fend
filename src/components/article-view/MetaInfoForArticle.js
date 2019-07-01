import React from 'react'
import { distanceInWords } from "date-fns";
import styled from "styled-components";

const MetaInfoWrapper = styled.ul`
  display: flex;
  justify-items: space-between;
  width: 100%;
  background: #d0fff6;
  margin: 0 auto;
  padding: 1em 0;
  list-style: none;
  flex-direction: column;
  min-width: 100px;
  text-align: center;
`;

export default function MetaInfoForArticle(props) {
  
  const {commentCount} = props;
  const {createdAt} = props;
  const {topic} = props;

  const formattedDate = distanceInWords(createdAt, new Date());

  return (
    <MetaInfoWrapper>
      <li>Comments: {commentCount}</li>
      <li>{`Written: ${formattedDate} ago`}</li>
      <li>Topic: {topic}</li>
    </MetaInfoWrapper>
  )
}
