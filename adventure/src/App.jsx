import * as React from "react";
//import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
import Home from "./Home"
//import {BrowserRouter as Router, Link, Route, Switch} from "react-router "
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {

 

 
  render() {
    return (
      <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" >
            <Home/>
          </Route>
        </Switch>
      </Router>
      </React.Fragment>
    );
  }
}

export default App;
