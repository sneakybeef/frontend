import React from "react";
import { Swipeable } from "react-swipeable";

class Slider extends React.Component {
  swiped = event => {
    console.log(event);
  };

  render() {
    const config = {
      onSwiped: event => this.swiped(event),
      trackMouse: true
    };
    return <Swipeable {...config}>{this.props.children}</Swipeable>;
  }
}

export default Slider;
