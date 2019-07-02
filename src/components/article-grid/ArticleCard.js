import React from "react";
import { distanceInWords } from "date-fns";
import styled from "styled-components";
import Title from "./ArticleTitle";
import MetaInfoForCard from "./MetaInfoForCard";

export default function ArticleCard(props) {
  const { title, author, topic, votes, commentCount, createdAt } = props;

  const formattedDate = distanceInWords(createdAt, new Date());

  const ArticleCardWrapper = styled.section`
    border: 2px solid #eccbd9;
    border-radius: 25px;
    background: #afb3f7;
    width: 100%;
    margin-top: 5vh;
    margin-bottom: 15vh;
    color: #15212e;
    -webkit-box-shadow: 3px 3px 0px 1px #f2dde6;
    -moz-box-shadow: 3px 3px 0px 1px #f2dde6;
    box-shadow: 3px 3px 0px 1px #f2dde6;

    :active {
      background-color: #80ffe8;
    }
  `;

  return (
    <ArticleCardWrapper>
      <Title title={title} />
      <MetaInfoForCard
        author={author}
        topic={topic}
        votes={votes}
        commentCount={commentCount}
        formattedDate={formattedDate}
      />
    </ArticleCardWrapper>
  );
}
