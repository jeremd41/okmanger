import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../scss/components/MenuBar.scss"; // to customize the navbar in the feature

import brandLogo from "../assets/imgs/OkManger-logo.png";

class MenuBar extends Component {
  render() {
    return (
      <>
        <Navbar bg="light" expand="lg" sticky="top">
          <Navbar.Brand href="/">
            <img src={brandLogo} alt="OkManger" width={42} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="links-navbar" className="justify-content-end">
            <Nav className="m1-auto">
              <Nav.Link>
                <Link to="/connexion">Connexion</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/inscription">Inscription</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default MenuBar;
