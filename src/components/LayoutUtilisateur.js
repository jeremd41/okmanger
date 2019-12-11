// Base template gestion compte utilisateur

import React, {Component} from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"

// règles css du composant

const Flex = styled.div`{
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-around;
    
    @media screen and (max-width: 977px) {
        flex-direction: column;
     }
}`

const Drop = styled.div`{
    display: none;
    
    @media screen and (max-width: 977px) {
        display: none;
     }
}`

const Child = styled.div`{
    display: block;
    margin: 15px;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 8px;
    height: auto;
    width: 80%;

    h4{
        padding: 15px;
        border-bottom: 1px solid rgba(0,0,0,.125);
    }

    .contenu{
        padding:15px;
    }

    @media screen and (max-width: 977px) {
        width:95%;
        margin: 0 auto;
        margin-bottom: 15px;
     }
}`


const Nav = styled.ul`{
    margin: 15px;
    height: auto;
    list-style-type: none;
    padding: 0;
    margin-left: 5px;
    display: flex;
    width: 20%;
    flex-direction: column;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 8px;
    top: 10%;

    h4{
        padding: 15px;
        border-bottom: 1px solid rgba(0,0,0,.125);
    }

    li:hover {
      background: #DCD5D4;
    }

    li a {
      color: #111;
      display: block;
      padding: 15px;
    }

    @media screen and (max-width: 977px) {
        width:95%;
        margin: 15px auto;
     }
  }
`;

// Composant

class LayoutUtilisateur extends Component{
    render(){
        const{children, title}= this.props
        return(
                <Flex>
                    <Drop>
                        <div class="dropdown is-active">
                            <div class="dropdown-trigger">
                                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                <span>Dropdown button</span>
                                <span class="icon is-small">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                                </button>
                            </div>
                            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                <Link to="#" class="dropdown-item">
                                    Dropdown item
                                </Link>
                                <Link to="*" class="dropdown-item">
                                    Other dropdown item
                                </Link>
                                <Link to="#" class="dropdown-item">
                                    Other dropdown item
                                </Link>
                                <Link to="#" class="dropdown-item">
                                    Other dropdown item
                                </Link>
                                </div>
                            </div>
                        </div>
                    </Drop>
                    <Nav>
                        <h4 className="title is-4">Espace client</h4>
                        <li>
                            <Link to="/Utilisateur">Paramètres compte</Link>
                        </li>
                        <li>
                            <Link to="/Utilisateur/adresse">Adresse</Link>
                        </li>
                        <li>
                            <Link to="/Utilisateur/commande">Mes commandes</Link>
                        </li>
                        <li>
                            <Link to="/Utilisateur/fidelite">Votre Fidélité</Link>
                        </li>
                    </Nav>
                    <Child>
                        <h4 className="title is-4">{title}</h4>
                        <div className="contenu">{children}</div>
                    </Child>
                </Flex>
        )
    }
}

export default LayoutUtilisateur