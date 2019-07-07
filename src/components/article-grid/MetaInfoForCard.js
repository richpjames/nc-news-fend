import React from "react";
import styled from "styled-components";

const MetaInfoWrapper = styled.ul`
  background: #d0fff6;
  width: 50%;
  margin: 1em auto;
  padding: 1em 0;
  list-style: none;
  flex-direction: column;
  min-width: 100px;
  @media (max-width: 768px) {
    width: 95%;
  }
`;

export default function MetaInfoForCard(props) {
  const { author, topic, votes, commentCount, formattedDate } = props;

  return (
    <MetaInfoWrapper>
      <li>
        <h3>
          <strong>by: </strong>
          {author}
        </h3>
      </li>
      <li>
        <strong>Topic:</strong> {topic}
      </li>
      <li>
        <strong>Votes:</strong> {votes}
      </li>
      <li>
        <strong>Comments:</strong> {commentCount}
      </li>
      <li>
        <strong>Created:</strong>
      </li>
      <li>{`${formattedDate} ago`}</li>
    </MetaInfoWrapper>
  );
}
