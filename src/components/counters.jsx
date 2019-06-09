import React, { Component } from "react";
import { render } from "react-dom";

import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 4 }
    ]
  };

  handleDelete = counterId => {
    // console.log("delete event handler called");

    const counters = this.state.counters.filter(c => c.id !== counterId);

    this.setState({ counters: counters });

    // console.log(counterId);
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState(counters);
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });

    console.log(this.state.counters[index]);
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          // counter => console.log(counter)

          <Counter
            key={counter.id}
            value={counter.value}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          >
            <h1> Counter #{counter.id}</h1>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
