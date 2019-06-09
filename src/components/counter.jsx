import React, { Component } from "react";
import { render } from "react-dom";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   imageUrl: "https://picsum.photos/200",
  //   tags: ["tag 1", "tag 2", "tag 3"],
  //   testArray: []
  // };

  styles = {
    fontSize: 10
  };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p> There are no tags here</p>;
  //   return this.state.tags.map(tag => <li key={tag}> {tag} </li>);
  // }

  //its parent should be responsible for modifying the data
  // handleIncrement = product => {
  //   // console.log("Increment Clicked", this);
  //   console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  //if the component is updated
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  //if component is unmounted
  // can be used to check unmounting of component and hence help in cleanup
  componentWillUnmount() {
    console.log("componet unmounted");
  }

  render() {
    // console.log("props", this.props);
    // console.log("props id ", this.props.id);

    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {this.props.children}

        <span style={{ fontSize: 13 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-sm btn-secondary"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        <br />
        {/* {this.state.tags.length === 0 && "Please create a new tag"} */}

        {/* <ul>{this.renderTags()}</ul> */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;

    return count === 0 ? "ZERO" : count;
  }
}

export default Counter;
