import React, { Component } from "react";
import { getComments, postComment, deleteComment } from "../../Api";
import Voter from "./Voter";
import styled from "styled-components";
import CommentCard from "./CommentCard";
import CommentTitle from "./CommentTitle";

const CommentSectionWrapper = styled.section``;

const CommentPostBox = styled.section`
  margin-left: auto;
  margin-right: auto;
  padding-top: 2vh;
  padding-bottom: 2vh;
  min-height: 30px;
  background: #aefff0;
  border-bottom: solid 1px #bcb6ff;
`;

const CommentListWrapper = styled.section``;

export default class Comments extends Component {
  state = {
    comments: [],
    commentBody: "",
    loading: true,
    hasError: false,
    errorMsg: ""
  };
  render() {
    const { votes, articleId } = this.props;
    const { username } = this.props.loggedInUser;
    const { hasError } = this.state;
    if (hasError) return <h3>Error loading comments</h3>;
    return (
      <CommentSectionWrapper>
        <CommentPostBox>
          <Voter votes={votes} article_id={articleId} />
          <form onSubmit={this.handleSubmit}>
            <label>
              Comment:{` `}
              <input
                type="text"
                name="userComment"
                placeholder="Write your comment here"
                value={this.state.commentBody}
                onChange={this.handleChange}
                required
              />
            </label>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </CommentPostBox>

        <CommentListWrapper>
          <CommentTitle />
          {this.state.comments.map(comment => (
            <CommentCard
              handleDelete={this.handleDelete}
              username={username}
              comment={comment}
              key={comment.comment_id}
            />
          ))}
        </CommentListWrapper>
      </CommentSectionWrapper>
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
    postComment(comment, articleId)
      .then(commentRes => {
        const { comment } = commentRes.data;
        this.setState(prevState => {
          return {
            comments: [comment, ...prevState.comments],
            commentBody: ""
          };
        });
      })
      .catch(err => this.setState({ hasError: true, errorMsg: err }));
  };
  fetchComments = article_id => {
    getComments(article_id)
      .then(comments => {
        this.setState({ comments: comments, loading: false });
      })
      .catch(err => this.setState({ hasError: true, errorMsg: err }));
  };
  handleDelete = comment_id => {
    const { comments } = this.state;
    deleteComment(comment_id)
      .then(comment => {
        this.setState(prevState => {
          return {
            comments: [
              ...comments.filter(comment => comment.comment_id !== comment_id)
            ]
          };
        });
      })
      .catch(err => this.setState({ hasError: true, errorMsg: err }));
  };
}
