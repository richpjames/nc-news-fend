import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  state = {
    topics: ["topic1", "topic2", "topic3"]
  };
  render() {
    const { topics } = this.state;
    return (
      <div className="App">
        <Header topics={topics} />
      </div>
    );
  }
}

export default App;
