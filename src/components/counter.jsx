import React, { Component } from "react";
import { render } from "react-dom";

class Counter extends Component {
  state = {
    value: this.props.value,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag 1", "tag 2", "tag 3"],
    testArray: []
  };

  styles = {
    fontSize: 10
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p> There are no tags here</p>;
    return this.state.tags.map(tag => <li key={tag}> {tag} </li>);
  }

  handleIncrement = product => {
    // console.log("Increment Clicked", this);
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log("props", this.props);

    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {this.props.children}
        <span style={{ fontSize: 13 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button
          onClick={() => this.handleIncrement({ product: 1 })}
          className="btn btn-sm btn-secondary"
        >
          Increment
        </button>

        <br />
        {this.state.tags.length === 0 && "Please create a new tag"}

        <ul>{this.renderTags()}</ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;

    return count === 0 ? "ZERO" : count;
  }
}

export default Counter;
