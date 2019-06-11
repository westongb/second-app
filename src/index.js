import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Quiz from "./Quiz";
import Sidebar from "./Sidebar";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Quiz />, document.getElementById("Quiz"));
ReactDOM.render(<Sidebar />, document.getElementById("Sidebar"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
