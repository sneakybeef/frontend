import React, { Component } from "react";
class Counter extends Component {
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  getDecrementClasses() {
    let classes = "btn btn-secondary";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  render() {
    const { value } = this.props.counter;

    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{value}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-primary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? true : false}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm "
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
