import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// containers
import Login from "../containers/Login";
import Register from "../containers/Register";
import Home from "../containers/Home";
import NotFound from "../containers/NotFound"; // not found page for the user if he will use unknown routes
import MenuBar from "../components/MenuBar";

class Direction extends Component {
  render() {
    return (
      <Router>
        <MenuBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/connexion" component={Login} />
          <Route path="/inscription" component={Register} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Direction;
