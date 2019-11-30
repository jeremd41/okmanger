import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MenuBar from "./components/MenuBar";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import CardResto from "./containers/CardResto"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router forceRefresh={false}>
          <MenuBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cardrestau" component={CardResto} />
            <Route path="/connexion" component={Login} />
            <Route path="/inscription" component={Register} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
