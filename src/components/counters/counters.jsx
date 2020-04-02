import React, { Component } from "react";
import Counter from "../counter/counter.jsx";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
            onDecrement={this.props.onDecrement}
            key={counter.id}
            counter={counter}
            isDisabled={counter.isDisabled}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
