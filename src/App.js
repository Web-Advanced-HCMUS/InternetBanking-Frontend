import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import UserAccount from "./components/UserAccount/UserAccount"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
        <UserAccount/>
    </>
  );
}

export default App;
