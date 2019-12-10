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

const Child = styled.div`{
    display: block;
    margin: 15px;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 8px;
    height: 70vh;
    width: 80%;

    h4{
        padding: 15px;
        border-bottom: 1px solid rgba(0,0,0,.125);
    }

    .contenu{
        padding:15px;
    }

    @media screen and (max-width: 977px) {
        width:95%
        margin: 0 auto;
     }
}`


const Nav = styled.ul`{
    margin: 15px;
    height: 50vh;
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
        margin: 0 auto;
     }
  }
`;

// Composant

class LayoutUtilisateur extends Component{
    render(){
        const{children, title}= this.props
        return(
                <Flex>
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