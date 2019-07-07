import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import { getArticleSummaries } from "../../Api.js";
import { Link } from "@reach/router";
import styled from "styled-components";
import Loader from "../Loader";
import Sorting from "./Sorting";
import ErrorPage from "../ErrorPage";

const ArticlesWrapper = styled.section`
  padding-left: 10vw;
  padding-right: 10vw;
  padding-top: 2vh;
  background: #e1eff6;
  width: 50vw;
  min-height: 50vw;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15vh;
  margin-bottom: 15vh;
  font-family: "Roboto", sans-serif;
  border: 2px solid #6fb1fc;
  border-radius: 25px;
  @media (max-width: 768px) {
    width: 90%;
    padding-left: 2%;
    padding-right: 3%;
    margin-top: 5vh;
  }
`;

export default class ArticlesGrid extends Component {
  state = {
    topics: [],
    articles: [],
    hasError: false,
    errMsg: "",
    loading: true,
    sortBy: "created_at"
  };

  render() {
    const { hasError, errMsg, articles } = this.state;
    if (hasError) return <ErrorPage errMsg={errMsg} />;
    return (
      <ArticlesWrapper>
        {this.state.loading ? (
          <Loader />
        ) : (
          <>
            <Sorting dropDownSubmit={this.dropDownSubmit} />
            {articles.map(article => {
              const {
                article_id,
                author,
                title,
                topic,
                votes,
                comment_count,
                created_at
              } = article;
              return (
                <Link to={`/article/${article_id}`} key={title}>
                  <ArticleCard
                    author={author}
                    title={title}
                    topic={topic}
                    votes={votes}
                    commentCount={comment_count}
                    createdAt={created_at}
                  />
                </Link>
              );
            })}
          </>
        )}
      </ArticlesWrapper>
    );
  }
  componentDidMount() {
    const { topic } = this.props;
    this.fetchArticles(topic);
    getArticleSummaries(topic).then(articles => {
      this.setState({ articles: articles });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    const { sortBy } = this.state;
    const topicChange = prevProps.topic !== topic;
    const sortByChange = prevState.sortBy !== sortBy;
    // const orderBy = prevState.orderBy !== //orderby
    if (topicChange || sortByChange) {
      this.fetchArticles(topic, sortBy);
    }
  }

  dropDownSubmit = event => {
    this.setState({ sortBy: event.target.value });
  };

  fetchArticles = (topic, sortBy) => {
    getArticleSummaries(topic, sortBy)
      .then(articles =>
        this.setState({ articles, loading: false, hasError: false })
      )
      .catch(error =>
        this.setState({
          errMsg: error.response.data.msg,
          hasError: error,
          loading: false
        })
      );
  };
}
