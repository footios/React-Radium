import React from "react";
import ReactDOM from "react-dom";
import { StyleRoot } from "radium";
import TryRadium from "./TryRadium";
import "./styles.css";

function App() {
  return (
    <StyleRoot>
      <div className="App">
        <TryRadium />
      </div>
    </StyleRoot>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
