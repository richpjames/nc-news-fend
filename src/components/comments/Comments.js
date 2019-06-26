import React, { Component } from "react";
import { getComments } from "../../Api";
import CommentDisplay from "./CommentDisplay";
import styled from "styled-components";

const CommentPostBox = styled.div``;

export default class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    const { comments } = this.state;
    return (
      <div>
        <CommentPostBox>
          <input
            type="text"
            name="userComment"
            placeholder="Write your comment here"
            value={this.state.value}
            onChange={this.onChange}
          />
          <br />
          <input type="submit" value="Submit" onChange={this.onChange} />
        </CommentPostBox>
        <CommentDisplay comments={comments} />
      </div>
    );
  }
  componentDidMount() {
    const { articleId } = this.props;
    this.fetchComments(articleId);
  }

  fetchComments = article_id => {
    getComments(article_id).then(comments =>
      this.setState({ comments: comments })
    );
  };
}
