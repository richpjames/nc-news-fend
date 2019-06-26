//get request on mount
import React, { Component } from "react";
import { getArticleById, getComments } from "../Api";
import styled from "styled-components";
import timestampMaker from "../timestampMaker";
import CommentDisplay from "./CommentDisplay"

const SingleArticleWrapper = styled.section`
padding-left: 10vw;
  padding-right: 10vw;
  padding-top: 2vh;
  background: #e1eff6;
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15vh;
  margin-bottom: 15vh;
  font-family: "Roboto", sans-serif;
  border: 2px solid #6fb1fc;
  border-radius: 25px;
  `;

const BodyWrapper = styled.div`
text-align: left;
`
const MetaInfoWrapper = styled.ul`
display: flex;
justify-items: space-between;
width: 100%;
`

export default class SingleArticle extends Component {
  state = {
    article: {},
    comments: [],
    hasError: false,
    loading: true
  };
  render() {
    const { author, body, comment_count, created_at, title, topic, votes } = this.state.article;
    const {comments} = this.state;
    const dateObj = new Date(created_at)
    return (
      <SingleArticleWrapper>
        <h1>{title}</h1>
        <h2>By {author}</h2>
        <BodyWrapper>
          {body}
        <MetaInfoWrapper>
          <li>Comments: {comment_count}</li>
          <li>{timestampMaker(dateObj)}</li>
          <li>Votes: {votes}</li>
          </MetaInfoWrapper>
          </BodyWrapper>
          <CommentDisplay comments={comments}/>

      </SingleArticleWrapper>
    );
  }
  componentDidMount() {
     const { article_id } = this.props;
   this.fetchArticles(article_id)
   this.fetchComments(article_id)
  }

  fetchArticles = (article_id) => {
    getArticleById(article_id)
      .then(article =>
        this.setState({ article, loading: false, hasError: false })
      )
      .catch(error => this.setState({ hasError: error, loading: false }));
  }
  fetchComments = (article_id) => {
    getComments(article_id).then(comments => this.setState({comments: comments}))
  }
}
