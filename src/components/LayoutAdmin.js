import React, {Component} from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"

const Flex = styled.div`{
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-around;
}`

const Child = styled.div`{
    display: block;
    padding: 15px;
    margin: 15px;
    border: 1px solid rgba(0,0,0,.125);
    height: 80vh;
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
            <Flex>
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
            </Flex>
        )
    }
}

export default LayoutAdmin