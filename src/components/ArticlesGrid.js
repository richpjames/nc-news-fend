import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import { getArticleSummaries } from "../Api.js";
import { Link } from "@reach/router";


export default class ArticlesGrid extends Component {
  state = {
    articles: []
  };

  render() {
    return (
      <div>
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
      </div>
    );
  }
  componentDidMount() {
    getArticleSummaries().then(articles =>
      this.setState({ articles: articles })
    );
  }
}
