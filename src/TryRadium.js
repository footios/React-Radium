import React from "react";
import Radium from "radium";

class TryRadium extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MrBool: true
    };
  }

  toggleMrBool = () => this.setState({ MrBool: !this.state.MrBool });

  render() {
    let style = {
      backgroundColor: "green",
      color: "white",
      ":hover": {
        backgroundColor: "red",
        color: "black"
      }
    };
    let buttonStyle = {
      border: "1px solid blue",
      backgroundColor: "green",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen"
      }
    };

    let paragraph = "";
    if (this.state.MrBool) {
      paragraph = <p> Hello again </p>;
      buttonStyle.backgroundColor = "red";
      buttonStyle[":hover"] = {
        backgroundColor: "salmon"
      };
    } else {
      paragraph = null;
    }
    return (
      <div>
        <p Key="1" style={style}>
          Hello
        </p>
        <button key="2" style={buttonStyle} onClick={this.toggleMrBool}>
          toggle hello again
        </button>
        {paragraph}
      </div>
    );
  }
}

export default Radium(TryRadium);
