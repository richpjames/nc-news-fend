import React, { Component } from "react";
import "./App.css";
import ArticlesGrid from "./components/ArticlesGrid";
import SingleArticle from "./components/SingleArticle";
import Header from "./components/header/Header";
import { Router } from "@reach/router";
import { getTopics } from "./Api.js";

class App extends Component {
  state = {
    topics: []
  };
  render() {
    const { topics } = this.state;
    return (
      <div className="App">
        <Header topics={topics} />
        <Router>
          <ArticlesGrid path="/" />
          <ArticlesGrid path="/topics/:topic" />
          <SingleArticle path="/article/:article_id" />
        </Router>
      </div>
    );
  }
  componentDidMount() {
    getTopics().then(topics => this.setState({ topics: topics }));
  }
}

export default App;
