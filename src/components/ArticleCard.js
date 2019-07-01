import React from "react";
import { distanceInWords } from "date-fns";
import styled from "styled-components";

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
  `;

  const TitleWrapper = styled.h1`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    background: #e1eff6;
    border-radius: 25px;
  `;

  const MetaInfoWrapper = styled.ul`
    background: #d0fff6;
    width: 50%;
    margin: 1em auto;
    padding: 1em 0;
    list-style: none;
    flex-direction: column;
    min-width: 100px;
  `;

  const MetaDataP = styled.p`
    line-height: 0px;
    min-width: 100px;
  `;

  return (
    <ArticleCardWrapper>
      <TitleWrapper>{title}</TitleWrapper>
      <MetaInfoWrapper>
        <li>
          <h3>by: {author}</h3>
        </li>
        <li>
          <h4>Topic: {topic}</h4>
        </li>
        <li>
          <MetaDataP>Votes: {votes}</MetaDataP>
        </li>
        <br></br>
        <li>
          <MetaDataP>Comments: {commentCount}</MetaDataP>
        </li>
        <br></br>
        <li>
          <MetaDataP>Created:</MetaDataP>
        </li>
        <li>
          <MetaDataP> {`${formattedDate} ago`}</MetaDataP>
        </li>
      </MetaInfoWrapper>
    </ArticleCardWrapper>
  );
}
