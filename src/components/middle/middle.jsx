import React from "react";
import TestButton from "../testButton/testButton";
import Checkmark from "../checkmark/checkmark";
import "./middle.scss";

class Middle extends React.Component {
  constructor() {
    super();
    this.state = { checkmarkActive: false };
  }

  onBtnClick = () => {
    this.setState({ checkmarkActive: !this.state.checkmarkActive });
  };

  render() {
    return (
      <div className="middle">
        <TestButton value="BUTTON" onClick={this.onBtnClick} />
        <Checkmark isActive={this.state.checkmarkActive} />
      </div>
    );
  }
}

export default Middle;
