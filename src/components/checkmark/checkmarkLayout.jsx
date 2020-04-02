import React from "react";
import propTypes from "prop-types";

import "./checkmark.scss";

class CheckmarkLayout extends React.Component {
  render() {
    return (
      <div className={this.props.isActive ? "active" : "inactive"}>
        <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
          <circle
            fill="yellowgreen"
            className="circle"
            cx="25"
            cy="25"
            r="20"
          />
          <path
            className="arrow"
            stroke="white"
            strokeWidth="2.4"
            fill="none"
            d="M15 26 l 7.1 7.2  16.6-16.7"
          />
        </svg>
      </div>
    );
  }
}

CheckmarkLayout.propTypes = {
  isActive: propTypes.bool.isRequired
};

export default CheckmarkLayout;
