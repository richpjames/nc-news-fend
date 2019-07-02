import React, { Component } from "react";
import { getArticleById } from "../../Api";
import styled from "styled-components";
import Comments from "../comments/Comments";
import Loader from "../Loader";
import ErrorPage from "../ErrorPage";
import MetaInfoForArticle from "./MetaInfoForSingleArticle";
import ArticleTitleArea from "./ArticleTitleArea";
import ArticleBody from "./ArticleBody";

const SingleArticleWrapper = styled.section`
  padding-top: 2vh;
  background: #e1eff6;
  width: 80vw;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15vh;
  margin-bottom: 15vh;
  font-family: "Roboto", sans-serif;
  border: 2px solid #6fb1fc;
  border-radius: 25px;
`;

export default class SingleArticle extends Component {
  state = {
    article: {},
    comments: [],
    hasError: false,
    errMsg: "",
    loading: true
  };

  render() {
    const {
      author,
      body,
      comment_count,
      created_at,
      title,
      topic,
      votes
    } = this.state.article;

    const { errMsg } = this.state;
    const { article_id } = this.props;
    const { hasError } = this.state;
    const { loading } = this.state;
    if (hasError) return <ErrorPage errMsg={errMsg} />;
    if (loading) return <Loader />;

    return (
      <SingleArticleWrapper>
        {this.state.loading ? (
          <Loader />
        ) : (
          <>
            <ArticleTitleArea title={title} author={author} />
            <ArticleBody body={body} />
            <MetaInfoForArticle
              commentCount={comment_count}
              createdAt={created_at}
              topic={topic}
            />
            <Comments
              articleId={article_id}
              votes={votes}
              loggedInUser={this.props.loggedInUser}
            />
          </>
        )}
      </SingleArticleWrapper>
    );
  }
  componentDidMount() {
    const { article_id } = this.props;
    this.fetchArticle(article_id);
  }

  fetchArticle = article_id => {
    getArticleById(article_id)
      .then(article => {
        this.setState({ article, loading: false, hasError: false });
      })
      .catch(error => {
        this.setState({
          hasError: true,
          loading: false,
          errMsg: error.response.data.msg
        });
      });
  };
}
