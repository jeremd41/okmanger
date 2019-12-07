import React, {Component} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components"

import Fond from "../assets/imgs/backhome.jpg"

const Wrapper = styled.div`{
    position:relative;
    width: 100%;
    height: 90vh;
    background-image: url(${Fond});
    background-size: cover;

    .recherche{
        width: 55%;
        height: 200px;;
        background: #fff;
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%,-50%);
        border:1px solid #DCD5D4;
        border-radius: 8px;

        form{
            margin: 25px 0;
            width: 100%;

            .field{
                width: 100%;
                margin: 0 auto;
            }

            .control{
                width:90%;
                margin: 0 auto;
                display: flex;
                justify-content: space-around;
            }

            .input{
                width: 60%;
            }
        }

        p{text-align: center;}

        h2{
            color:#007bff;
            text-align: center;
        }
    }

    @media screen and (max-width: 977px) {
        
        .recherche{
            width: 100%;
            height: auto;
        
            p{display:none;}
        }
     }
}`

class Home extends Component {
    render() {
        return (
            <Wrapper>
                <div className="recherche">
                    <form>
                        <h2 className="title is-3">On fait un break ensemble ?</h2>
                        <p className="subtitle is-5">Saisie l'adresse de ton école ou ta boîte et c'est parti !</p>
                        <div class="field">
                            <div class="control">
                                <input class="input is-info" type="text" placeholder="🔎 Entrez l'adresse ici"/>
                                <button class="button is-info">Commander</button>
                            </div>
                        </div>
                    </form>
                </div>
            </Wrapper>
        );
    }
}

export default Home;