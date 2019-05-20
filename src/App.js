import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import { Nav, NavItem, NavLink } from "reactstrap";

import "./App.css";

import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/pages/Login";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Use My Tech</h1>
        <Nav>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/signup">Sign Up</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/login">Login</NavLink>
          </NavItem>
        </Nav>

        <hr />

        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default App;
