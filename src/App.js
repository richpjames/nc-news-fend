import React, { Component } from "react";
import "./App.css";
import { getTopics, getArticleSummaries } from "./Api";
import ArticlesGrid from "./components/ArticlesGrid";
import Header from "./components/Header";
import TopicPage from "./components/TopicPage";
import { Router } from "@reach/router";

class App extends Component {
  state = {
    topics: [],
    articles: [],
    hasError: false,
    loading: true
  };

  render() {
    const { topics, articles } = this.state;
    return (
      <div className="App">
        <Header topics={topics} />
        <Router>
          <ArticlesGrid path="/" />
          <TopicPage path="/topics/:topicSlug" articles={articles} />
        </Router>
      </div>
    );
  }
  componentDidMount() {
    getTopics().then(topics => this.setState({ topics: topics }));
    this.fetchArticles();
  }
  fetchArticles = () => {
    const { topic } = this.props;

    getArticleSummaries(topic)
      .then(articles =>
        this.setState({ articles, loading: false, hasError: false })
      )
      .catch(error => this.setState({ hasError: error, loading: false }));
  };
}

export default App;
