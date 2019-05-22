import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";

import Items from "./components/Items";
import PrivateRoute from "./components/PrivateRoute";
import AddItemForm from "./components/AddItemForm";
import ItemList from './components/ItemList'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>
            <p>Use My Tech</p>
            <div className="nav-bar">
              <Link to="/protected">Home</Link>
              <Link to='/item-form'>Add Item</Link>
            
              
            </div>
          </header>

          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/protected" component={Items} />
          <PrivateRoute exact path="/item-form" component={AddItemForm} />
          <Route path="/signup" component={SignUp} />
          
        </div>
      </Router>
    );
  }
}

export default App;
