import React, {Component} from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"

const Child = styled.div`{
    margin-left: 17%;
    margin-top: 1%;
    width: 80%;
}`


const Nav = styled.ul`
   {
    margin: 15px;
    height: 80vh;
    list-style-type: none;
    padding: 0;
    margin-left: 5px;
    display: flex;
    width: 180px;
    flex-direction: column;
    border: 1px solid rgba(0,0,0,.125);
    position: absolute;
    top: 10%;

    li:hover {
      background: #DCD5D4;
    }

    li a {
      color: #111;
      display: block;
      padding: 10px;
    }
  }
`;

class LayoutAdmin extends Component{
    render(){
        const{children}= this.props
        return(
            <div>
                <Nav>
                    <li>
                        <Link to="/Admin/Ajouter">Ajouter Restaurant</Link>
                    </li>
                    <li>
                        <Link to="/Admin/Modifier">Modifier/Supprimer Restaurant</Link>
                    </li>
                    <li>
                        <Link to="/Admin/Stats">Stats</Link>
                    </li>
                </Nav>
                <Child>{children}</Child>
            </div>
        )
    }
}

export default LayoutAdmin