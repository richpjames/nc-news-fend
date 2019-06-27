import React, { Component } from "react";
import { patchArticleVotes } from "../../Api";

export default class Voter extends Component {
  state = {
    voteChange: 0
  };

  render() {
    const { voteChange } = this.state;
    const { votes } = this.props;
    return (
      <div>
        <button onClick={() => this.handleVote(1)} disabled={voteChange > 0}>
          <i className="fas fa-thumbs-up" />
        </button>
        <p>Votes: {votes + voteChange}</p>
        <button onClick={() => this.handleVote(-1)} disabled={voteChange < 0}>
          <i className="fas fa-thumbs-down" />
        </button>
      </div>
    );
  }
  handleVote = increment => {
    const { article_id } = this.props;
    patchArticleVotes(article_id, increment).catch(err => {
      this.setState(({ voteChange }) => ({
        voteChange: voteChange - increment
      }));
    });
    this.setState(({ voteChange }) => ({
      voteChange: voteChange + increment
    }));
  };
}
