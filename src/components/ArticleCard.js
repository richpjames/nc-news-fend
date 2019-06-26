import React from "react";
import timestampMaker from "../timestampMaker";
import styled from "styled-components";

export default function ArticleCard(props) {
  const { title, author, topic, votes, commentCount, createdAt } = props;

  const dateObject = new Date(createdAt);

  const ArticleCardWrapper = styled.div`
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

  const TitleWrapper = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    background: #e1eff6;
    border-radius: 25px;
  `;

  return (
    <ArticleCardWrapper>
      <TitleWrapper>
        <h1>{title}</h1>
      </TitleWrapper>
      <h2>by: {author}</h2>
      <h3>Topic: {topic}</h3>
      <h4>Votes: {votes}</h4>
      <h4>Comment Count: {commentCount}</h4>
      <p>Created: {timestampMaker(dateObject)}</p>
    </ArticleCardWrapper>
  );
}
