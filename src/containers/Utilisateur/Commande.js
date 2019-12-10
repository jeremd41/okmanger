// Composant qui affiche l'historique des commandes du compte client 

import React, {Component} from "react"
import LayoutUtilisateur from "../../components/LayoutUtilisateur"

//Composant

class Commande extends Component{
    render(){
        return(
            <LayoutUtilisateur title= "Mes commandes">
                <div className="content">
                    Pas de commande pour le moment ... 
                </div>
            </LayoutUtilisateur>
        )
    }
}

export default Commande