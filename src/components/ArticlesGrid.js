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
    articles: []
  };

  render() {
    return (
      <ArticlesWrapper>
        {this.state.articles.map((article, i) => (
          <Link to={`/article/${i}`} key={article.title}>
            <ArticleCard
              author={article.author}
              title={article.title}
              topic={article.topic}
              votes={article.votes}
              commentCount={article.comment_count}
              createdAt={article.created_at}
              index={i}
            />
          </Link>
        ))}
      </ArticlesWrapper>
    );
  }
  componentDidMount() {
    getArticleSummaries().then(articles =>
      this.setState({ articles: articles })
    );
  }
}
