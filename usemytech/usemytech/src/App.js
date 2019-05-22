import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PrivateRoute from './components/PrivateRoute'
import ItemList from './components/ItemList'
import AddItemForm from './components/AddItemForm'
import Items from './components/Items'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>
            <p>Use My Tech</p>
            <div className="navigation">
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
              <Link to='/additem'>Add Item</Link>
              <Link to='/item'>Items</Link>
            </div>
          </header>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route exact path='/protected' component={ItemList} />
          <Route path='/additem' component={AddItemForm} />
          <Route path='/item' component={Items} />
        </div>
      </Router>
    );
  }
}

export default App;