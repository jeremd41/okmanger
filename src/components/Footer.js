import React, {Component} from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"

const Wrapper = styled.div`{
    .center{
        width:90%;
        margin: 0 auto;
    }

    h5{
        margin-bottom: 25px;
    }

    li{margin: 10px;}

   footer{
       background:rgba(0,0,0,.125);
   }
}`

const Text = styled.div`{
   text-align: center;
}`

class Footer extends Component{
    render(){
        return(
            <Wrapper>
                <footer className="footer">
                    <div className="columns center">
                        <ul className="column">
                            <h5>Catégories</h5>
                            <li><Link>Burger</Link></li>
                            <li><Link>Tacos</Link></li>
                            <li><Link>Japonais</Link></li>
                            <li><Link>Pizza</Link></li>
                            <li><Link>Chinois</Link></li>
                            <li><Link>Thailandais</Link></li>
                        </ul>
                        <ul className="column">
                            <h5>A propos de nous</h5>
                            <li><Link>Qui sommes-nous</Link></li>
                            <li><Link>CGV</Link></li>
                            <li><Link>Politique de confidentialités</Link></li>
                            <li><Link>Suggérez-nous un restaurateur</Link></li>
                            <li><Link>FAQ</Link></li>
                        </ul>
                        <div className="column">
                            <h5>Nos Réseaux</h5>
                            <ul className="columns">
                                <li className="column"><Link><i class="fab fa-facebook"></i></Link></li>
                                <li className="column"><Link><i class="fab fa-twitter"></i></Link></li>
                                <li className="column"><Link><i class="fab fa-instagram"></i></Link></li>
                                <li className="column"><Link><i class="fab fa-linkedin"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <Text>Copyright 2019 - OkManger </Text>
                </footer>
            </Wrapper>
        )
    }
}

export default Footer