import * as React from "react";
import Home from "./Home"
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
