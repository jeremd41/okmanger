import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components"

import brandLogo from "../assets/imgs/OkManger-logo.png";

const Wrapper = styled.section`
  border-bottom:1px solid #DCD5D4 ;
  box-shadow: -15px 0px 25px -15px #111;

  .logo{
    color:#007bff;
  }

  .panier{
    display: block;
    border: 1px solid #111;
  }
`;

class MenuBar extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar bg="light" expand="lg" sticky="top">
          <Navbar.Brand className="logo" href="/">
            <img src={brandLogo} alt="OkManger" width={42} /> OK Manger
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="links-navbar" className="justify-content-end">
            <Nav className="m1-auto">
            <Nav.Link>
                <Link to="/preview">Dev Preview</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/connexion">Connexion</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/inscription">Inscription</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="icon is-medium" to="/panier">
                    <i className="fas fa-lg fa-shopping-bag" />
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Wrapper>
    );
  }
}

export default MenuBar;
