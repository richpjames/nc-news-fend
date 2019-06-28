import React, { Component } from "react";
import styled from "styled-components";
import { distanceInWords } from "date-fns";
import { deleteComment } from "../../Api";
import Voter from "./Voter";

const CommentsWrapper = styled.section``;

export default class CommentDisplay extends Component {
  state = { comments: [] };
  render() {
    return (
      <>
        <h2>Comments:</h2>
        {this.props.comments.map(comment => (
          <div key={comment.body}>
            {comment.author === this.props.loggedInUser && (
              <button onClick={() => this.handleDelete(comment.comment_id)}>
                Delete
              </button>
            )}
            <p>{comment.body}</p>
            <h4>{comment.author}</h4>
            <p>Votes: {comment.votes}</p>
            <p>{`${distanceInWords(comment.created_at, new Date())} ago`}</p>
            <p>
              {<Voter votes={comment.votes} article_id={comment.article_id} />}
            </p>
          </div>
        ))}
      </>
    );
  }
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
