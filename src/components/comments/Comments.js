import React, { Component } from "react";
import { getComments, postComment } from "../../Api";
import CommentDisplay from "./CommentDisplay";
import Voter from "./Voter";
import styled from "styled-components";

const CommentPostBox = styled.div`
  width: 40vw;
  height: 500;
`;

export default class Comments extends Component {
  state = {
    comments: [],
    commentBody: ""
  };
  render() {
    const { comments } = this.state;
    const { votes, articleId } = this.props;
    return (
      <div>
        <CommentPostBox>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="userComment"
              placeholder="Write your comment here"
              value={this.state.commentBody}
              onChange={this.handleChange}
            />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </CommentPostBox>
        <Voter votes={votes} article_id={articleId} />
        <CommentDisplay comments={comments} />
      </div>
    );
  }
  componentDidMount() {
    const { articleId } = this.props;
    this.fetchComments(articleId);
  }
  handleChange = event => {
    this.setState({ commentBody: event.target.value });
  };
  handleSubmit = event => {
    const { articleId } = this.props;
    const { username } = this.props.loggedInUser;
    event.preventDefault();
    let comment = {
      article_id: articleId,
      username: username,
      body: this.state.commentBody
    };
    postComment(comment, articleId);
  };
  fetchComments = article_id => {
    getComments(article_id).then(comments =>
      this.setState({ comments: comments })
    );
  };
}
