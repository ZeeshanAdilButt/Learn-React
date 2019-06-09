import React, { Component } from "react";

//as this is a statless component, we can define it as a function

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary m-2">
          {" "}
          {totalCounters}{" "}
        </span>
      </a>
    </nav>
  );
};

//Class componnet

// class NavBar extends Component {
//   state = {};
//   render() {
//     return (
//       <nav className="navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar{" "}
//           <span className="badge badge-pill badge-secondary m-2">
//             {" "}
//             {this.props.totalCounters}{" "}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

export default NavBar;
