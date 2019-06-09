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

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          // counter => console.log(counter)

          <Counter
            key={counter.id}
            value={counter.value}
            onDelete={this.handleDelete}
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
