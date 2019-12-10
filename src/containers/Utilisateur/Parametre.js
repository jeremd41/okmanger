// Composant qui affiche les données personnelles du compte utilisateur

import React, {Component} from "react";
import styled from "styled-components"
import LayoutUtilisateur from "../../components/LayoutUtilisateur";

const Form = styled.form`{
    width:90%;
    margin: 0 auto;

    .formhaut{
        width: 100%;
        border-bottom: 1px solid rgba(0,0,0,.125);;
    }

    label{
        width:100%;
        margin:10px auto;
    }

    input{
        width:70%;
        float: right;
    }

    .formbas{
        margin-top: 25px;
        width: 100%;
    }
}`


class Parametre extends Component{
    render(){
        return(
            <LayoutUtilisateur title="Paramètre de compte">
                <Form>
                    <h5>Informations générales</h5>
                    <div className="columns formhaut">
                        <div className="column">
                            <label>Nom:<input className="input is-small" type="text" /></label>
                            <label>Prenom:<input className="input is-small" type="text" /></label>
                        </div>
                        <div className="column">
                            <label>E-mail:<input className="input is-small" type="text" /></label>
                            <label>Téléphone:<input className="input is-small" type="text" /></label>
                        </div>
                    </div>
                    <div className="formbas">
                        <h5>Modifier mot de passe</h5>
                        <div className="columns">
                            <div className="column">
                                <label>Actuel:<input className="input is-small" type="password" /></label>
                                <label>Nouveau:<input className="input is-small" type="password" /></label>
                            </div>
                        </div>
                    </div>
                    <button className="button is-small is-info">Enregistrer</button>
                </Form>
            </LayoutUtilisateur>
        )
    }
}

export default Parametre