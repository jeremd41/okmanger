// Composant central de l'application avec l'ensemble du routeur et des templates de base 

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import du template

import Layout from "./components/Layout";

// Import des pages de l'application

import Login from "./containers/Login";
import Register from "./containers/Register";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import CardResto from "./containers/CardResto";
import HomeAdmin from "./containers/Administration/HomeAdmin";
import AjouterRestau from "./containers/Administration/AjouterRestau";
import ModifierRestau from "./containers/Administration/ModifierRestau";
import Stats from "./containers/Administration/Stats"
import DevPreview from "./containers/DevPreview";
import Parametre from "./containers/Utilisateur/Parametre";
import Fidelite from "./containers/Utilisateur/Fidelite";
import AdressLiv from "./containers/Utilisateur/AdresseLiv";
import Commande from "./containers/Utilisateur/Commande";

// Composant

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router forceRefresh={false}>
          <Layout>
            <Switch>
              <Route exact path="/preview" component={DevPreview} />
              <Route exact path="/Utilisateur" component={Parametre} />
              <Route exact path="/Utilisateur/fidelite" component={Fidelite} />
              <Route exact path="/Utilisateur/adresse" component={AdressLiv} />
              <Route exact path="/Utilisateur/commande" component={Commande} />
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
