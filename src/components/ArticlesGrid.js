import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import { getArticleSummaries } from "../Api.js";

export default class ArticlesGrid extends Component {
  state = {
    articles: []
  };
  render() {
    return (
      <div>
        {this.state.articles.map(article => (
          <ArticleCard
            key={article.title}
            author={article.author}
            title={article.title}
            topic={article.topic}
            votes={article.votes}
            commentCount={article.comment_count}
            createdAt={article.created_at}
          />
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
