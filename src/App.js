import React from "react";
import logo from "./logo.svg";
import "./App.css";

const element = <h3>Hello World</h3>;
console.log(element);

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>This is My React Website</h2>
      <a className="trialLink" href="#">
        Trial
      </a>
      <span>Again</span>
    </div>
  );
}

export default App;
