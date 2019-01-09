import React from "react";
import Radium from "radium";
import "./styles.css";

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

    let linkStyle = {
      ":hover": {
        color: "red"
      }
    };

    let boxStyle = {
      "@media (max-width: 500px)": {
        width: "50px",
        backgroundColor: "red"
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
        <a style={linkStyle} key="3" href="#">
          test
        </a>
        <div className="Div" key="4" style={boxStyle}>
          Box
        </div>
      </div>
    );
  }
}

export default Radium(TryRadium);
