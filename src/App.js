import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MenuBar from "./components/MenuBar";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router forceRefresh={true}>
          <MenuBar />
          <Switch>
            <Route exact path="/" component={Home} />
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
