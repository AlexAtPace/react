import React, { Component } from "react";
import "./App.css";
import TodoParent from "./components/TodoParent";
import LottieAnimation from "./animations/todo";

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <LottieAnimation />
        <TodoParent />
      </div>
    );
  }
}

export default App;
