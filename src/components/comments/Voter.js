import React, { Component } from "react";
import { patchArticleVotes, patchCommentVotes } from "../../Api";
import styled from "styled-components";

const Thumb = styled.button`
  height: 25px;
  position: relative;
`;

export default class Voter extends Component {
  state = {
    voteChange: 0
  };
  render() {
    const { voteChange } = this.state;
    const { votes } = this.props;
    return (
      <section>
        <Thumb onClick={() => this.handleVote(1)} disabled={voteChange > 0}>
          <i className="fas fa-thumbs-up" />
        </Thumb>
        <br />
        Votes: {votes + voteChange}
        <br />
        <Thumb onClick={() => this.handleVote(-1)} disabled={voteChange < 0}>
          <i className="fas fa-thumbs-down" />
        </Thumb>
      </section>
    );
  }
  handleVote = increment => {
    const { article_id } = this.props;
    const { comment_id } = this.props;
    if (article_id) {
      patchArticleVotes(article_id, increment).catch(err => {
        this.setState(({ voteChange }) => ({
          voteChange: voteChange - increment
        }));
      });
    }
    if (comment_id) {
      patchCommentVotes(comment_id, increment).catch(err => {
        this.setState(({ voteChange }) => ({
          voteChange: voteChange - increment
        }));
      });
    }
    this.setState(({ voteChange }) => ({
      voteChange: voteChange + increment
    }));
  };
}
