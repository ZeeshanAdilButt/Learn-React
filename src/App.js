import React from "react";
import logo from "./logo.svg";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Counters />
      </main>
    </React.Fragment>
  );
}

export default App;
