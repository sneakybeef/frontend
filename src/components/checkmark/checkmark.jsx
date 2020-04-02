import React from "react";
import CheckmarkLayout from "./checkmarkLayout";

class Checkmark extends React.Component {
  render() {
    return (
      <div className="checkmark">
        <CheckmarkLayout isActive={this.props.isActive} />
      </div>
    );
  }
}
export default Checkmark;
