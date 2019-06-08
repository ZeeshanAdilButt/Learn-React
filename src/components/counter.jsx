import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag 1", "tag 2", "tag 3"]
  };

  styles = {
    fontSize: 10
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p> There are no tags here</p>;

    return this.state.tags.map(tag => <li key={tag}> {tag} </li>);
  }

  render() {
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span style={{ fontSize: 10 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-sm btn-secondary"> Increment </button>
        <br />
        {this.state.tags.length === 0 && "Please create a new tag"}
        <ul>{this.renderTags()}</ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;

    return count === 0 ? "ZERO" : count;
  }
}

export default Counter;
