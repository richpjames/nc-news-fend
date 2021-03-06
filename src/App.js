import React, { Component } from "react";
import "./App.css";
import ArticlesGrid from "./components/article-grid/ArticlesGrid";
import SingleArticle from "./components/article-view/SingleArticle";
import Header from "./components/header/Header";
import ErrorPage from "./components/ErrorPage";
import { Router } from "@reach/router";
import { getTopics } from "./Api.js";

class App extends Component {
  state = {
    topics: [],
    loggedInUser: {
      username: "jessjelly",
      avatar: "https://i.ytimg.com/vi/RUP4dCucVnY/hqdefault.jpg",
      name: "Jess Jelly"
    }
  };

  render() {
    const { topics } = this.state;
    return (
      <div className="App">
        <Header topics={topics} />
        <Router>
          <ArticlesGrid path="/" />
          <ArticlesGrid path="/topics/:topic" />
          <SingleArticle
            loggedInUser={this.state.loggedInUser}
            path="/article/:article_id"
          />
          <ErrorPage default />
        </Router>
      </div>
    );
  }
  componentDidMount() {
    getTopics().then(topics => this.setState({ topics: topics }));
  }
}

export default App;
