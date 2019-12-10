// Composant compte utilisateur qui montre les points fidélité acquis par le client

import React, {Component} from "react" ;
import {Link} from "react-router-dom" ;
import LayoutUtilisateur from "../../components/LayoutUtilisateur" ;
import styled from "styled-components"

// Règles css du composant

const Wrapper = styled.div`{
    width: 90%;
    margin: 0 auto;
    text-align: center;

    .ligne{margin: 20px;}

    input{
        width: 30%;
    }

    label{
        width: 80%;
    }
}`

// Composant 

class Fidelite extends Component{
    render(){
        return(
            <LayoutUtilisateur title= "Ma Fidélité">
                <Wrapper>
                    <div className="ligne">
                        <label> Mes points : <input className="input is-small disable" type="text" readOnly placeholder="0" /></label>
                    </div>
                    <div className="ligne">
                       <p>Un programme fidélité ? <Link to="/">Plus d’info</ Link></p> 
                    </div>
                </Wrapper>
            </LayoutUtilisateur>
        )
    }
}

export default Fidelite