import React from "react";
import { distanceInWords } from "date-fns";
import styled from "styled-components";

const MetaInfoWrapper = styled.div`
  border: solid 1px #bcb6ff;
  margin: 10px;
`;

export default function CommentMetaInfo(props) {
  const { author, createdAt } = props;
  const dateCreated = `${distanceInWords(createdAt, new Date())} ago`;
  console.log(props.createdAt);
  return (
    <MetaInfoWrapper>
      <p>By: {author}</p>
      <p>{dateCreated}</p>
    </MetaInfoWrapper>
  );
}
