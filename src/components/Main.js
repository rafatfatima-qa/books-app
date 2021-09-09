import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard'
import Home from './Home'
import About from './About'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export default function Main() {
    return (
      <Router> 
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/home">
              <Home />
            </Route>

            <Route exact path="/books-app">
              <Home />
            </Route>

            <Route exact path="/Login">
              <Login />
            </Route>
                
            <Route exact path="/Dashboard">
              <Dashboard />
            </Route> 

            <Route exact path="/About">
              <About />
            </Route> 

          </Switch> 
      </Router> 
    );
}