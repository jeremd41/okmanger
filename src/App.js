import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import CardResto from "./containers/CardResto";
import HomeAdmin from "./containers/HomeAdmin";
import AjouterRestau from "./containers/AjouterRestau";
import ModifierRestau from "./containers/ModifierRestau";
import Stats from "./containers/Stats"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router forceRefresh={false}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cardrestau" component={CardResto} />
            <Route exact path="/Admin" component={HomeAdmin} />
            <Route exact path="/Admin/Ajouter" component={AjouterRestau} />
            <Route exact path="/Admin/Modifier" component={ModifierRestau} />
            <Route exact path="/Admin/Stats" component={Stats} />
            <Route path="/connexion" component={Login} />
            <Route path="/inscription" component={Register} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
