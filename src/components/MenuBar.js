import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components"

import brandLogo from "../assets/imgs/OkManger-logo.png";

const Wrapper = styled.section`
  border-bottom:1px solid #DCD5D4 ;
  box-shadow: -15px 0px 25px -15px #111;
`;

class MenuBar extends Component {
  render() {
    return (
      <Wrapper>
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
              <Nav.Link>
                <Link to="/panier">
                  <span className="icon is-medium">
                    <i className="fas fa-lg fa-shopping-bag"></i>
                  </span></Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Wrapper>
    );
  }
}

export default MenuBar;
