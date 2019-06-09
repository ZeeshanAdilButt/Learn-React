import React, { Component } from "react";
import { render } from "react-dom";

import Counter from "./counter";

class Counters extends Component {
  render() {
    //object destructing, to remove unneccessary prop.prefixes
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m2">
          Reset
        </button>
        {counters.map(counter => (
          // counter => console.log(counter)

          <Counter
            key={counter.id}
            value={counter.value}
            onDelete={onDelete}
            onIncrement={onIncrement}
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
