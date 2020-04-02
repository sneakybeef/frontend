import React, { Component } from "react";
import Counters from "../counters/counters";
import Header from "../header/header";

class Checklist extends Component {
  constructor() {
    super();
    this.state = {
      counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
      ]
    };
  }
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  handleIncrement = counter => {
    const counters = this.state.counters;
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = counter => {
    const counters = this.state.counters;
    const index = counters.indexOf(counter);
    counters[index] = counter;

    counters[index].value--;

    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };
  render() {
    const links = [
      { name: "home", url: "/" },
      { name: "form", url: "/form" },
      { name: "login", url: "login" },
      { name: "register", url: "/register" },
      { name: "Tasks", url: "/tasks" },

      { name: "checklist", url: "/checklist" }
    ];
    return (
      <React.Fragment>
        <Header links={links}>
          <span className="badge badge-pill badge-secondary">
            {this.state.counters.filter(counter => counter.value > 0).length}
          </span>
        </Header>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default Checklist;
