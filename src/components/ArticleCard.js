import React, { Component } from "react";

export default class ArticleCard extends Component {
  render() {
    const { title, author, topic, votes, commentCount, createdAt } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <h3>{topic}</h3>
        <h4>Votes: {votes}</h4>
        <h4>Comment Count: {commentCount}</h4>
        <p>Date created: {createdAt}</p>
      </div>
    );
  }
}
