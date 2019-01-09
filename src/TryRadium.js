import React from "react";
import Radium from "radium";

function TryRadium() {
  const style = {
    backgroundColor: "green",
    color: "white",
    ":hover": {
      backgroundColor: "red"
    }
  };
  return (
    <div>
      <p style={style}>Hello</p>
    </div>
  );
}

export default Radium(TryRadium);
