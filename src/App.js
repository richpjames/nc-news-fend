import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import { getTopics } from "./Api";
import styled, { css } from "styled-components";
import ArticlesGrid from "./components/ArticlesGrid";

class App extends Component {
  state = {
    topics: []
  };

  render() {
    const { topics } = this.state;
    return (
      <div className="App">
        <Header topics={topics} />
        <ArticlesGrid />
      </div>
    );
  }
  componentDidMount() {
    getTopics().then(topics => this.setState({ topics: topics }));
  }
}

export default App;
