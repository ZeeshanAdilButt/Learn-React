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

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          // counter => console.log(counter)

          <Counter key={counter.id} value={counter.value}>
            <h1> Counter #{counter.id}</h1>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
