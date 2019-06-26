import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import { getArticleSummaries } from "../Api.js";
import { Link } from "@reach/router";
import styled from "styled-components";

const ArticlesWrapper = styled.section`
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

export default class ArticlesGrid extends Component {
  state = {
    topics: [],
    articles: [],
    hasError: false,
    loading: true,
    topic: ""
  };

  render() {
    const { articles } = this.state;
    return (
      <>
        <ArticlesWrapper>
          {this.state.articles.map(article => (
            <Link to={`/article/${article.article_id}`} key={article.title}>
              <ArticleCard
                author={article.author}
                title={article.title}
                topic={article.topic}
                votes={article.votes}
                commentCount={article.comment_count}
                createdAt={article.created_at}
              />
            </Link>
          ))}
        </ArticlesWrapper>
      </>
    );
  }
  componentDidMount() {
    getArticleSummaries().then(articles =>
      this.setState({ articles: articles })
    );

    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    const { topic } = this.props;
    getArticleSummaries(topic)
      .then(articles =>
        this.setState({ articles, loading: false, hasError: false })
      )
      .catch(error => this.setState({ hasError: error, loading: false }));
  };
}
