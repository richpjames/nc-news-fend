import React, { Component } from "react";
import { getComments, postComment, deleteComment } from "../../Api";
import Voter from "./Voter";
import styled from "styled-components";
import CommentCard from "./CommentCard";

const CommentPostBox = styled.section`
  width: 40vw;
  height: 500;
`;

const VoterWrapper = styled.section``;

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
              required
            />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </CommentPostBox>

        <VoterWrapper>
          <Voter votes={votes} article_id={articleId} />
        </VoterWrapper>

        <CommentListWrapper>
          <h2>Comments:</h2>

          {this.state.comments.map(comment => (
            <CommentCard
              handleDelete={this.handleDelete}
              username={username}
              comment={comment}
              key={comment.comment_id}
            />
          ))}
        </CommentListWrapper>
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
      .catch(err => console.log(err));
  };
  fetchComments = article_id => {
    getComments(article_id).then(comments =>
      this.setState({ comments: comments, loading: false }).catch(console.log)
    );
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
      .catch(err => {
        console.log(err);
      });
  };
}
