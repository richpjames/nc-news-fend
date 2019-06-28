import React, { Component } from "react";
import { getComments, postComment, deleteComment } from "../../Api";
import Voter from "./Voter";
import styled from "styled-components";
import { distanceInWords } from "date-fns";

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
    loading: true
  };
  render() {
    const { comments } = this.state;
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
            <div key={comment.body}>
              {console.log(comment.author, username)}{" "}
              {comment.author === username && (
                <button onClick={() => this.handleDelete(comment.comment_id)}>
                  Delete
                </button>
              )}
              <p>{comment.body}</p>
              <h4>{comment.author}</h4>
              <p>Votes: {comment.votes}</p>
              <p>{`${distanceInWords(comment.created_at, new Date())} ago`}</p>
              <p>
                {
                  <Voter
                    votes={comment.votes}
                    article_id={comment.article_id}
                  />
                }
              </p>
            </div>
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
      this.setState({ comments: comments, loading: false })
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
      .catch(err => console.dir(err));
  };
}
