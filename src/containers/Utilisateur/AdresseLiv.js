// Composant qui affiche les lieu de livraison que le client à ajouter

import React, {Component} from "react"
import LayoutUtilisateur from "../../components/LayoutUtilisateur"

//Composant

class AdresseLiv extends Component{
    render(){
        return(
            <LayoutUtilisateur title= "Mes lieux de livraison">
                <div>
                    <button className="button is-info">+ Ajouter lieu</button>
                </div>
            </LayoutUtilisateur>
        )
    }
}

export default AdresseLiv