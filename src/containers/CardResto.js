import React, {Component} from "react"
import styled from "styled-components"

import burger1 from "../assets/imgs/burger-regime.jpg"


const Wrapper = styled.section`
  width: 95%;
  margin: 25px auto;

  i{margin: 5px;}

  .pointer{cursor: pointer;}

  li{margin: 5px;}
  
  h1{margin-top: 10px;}
`;

class CardResto extends Component{
    render(){
        return(
            <Wrapper>
                <h1 className="title">Cool Burger</h1>
                <ul className="columns">
                    <li><i className="fas fa-star" /> 4,65</li>
                    <li><i className="fas fa-drumstick-bite" />Burger</li>
                    <li><i className="fas fa-circle" />Paris 8e</li>
                </ul>
                <div className="columns is-multiline">
                    <img className="column is-half image is-600x480" src={burger1} alt="burger regime"/>
                    <div className="column is-half">
                        <div className="columns is-gapless is-multiline is-mobile">
                            <figure className="column is-6 image is-120x120">
                                <img  src={burger1} alt="burger regime" />
                            </figure>
                            <figure className="column is-6 image is-120x120">
                                <img src={burger1} alt="burger regime" />
                            </figure>
                            <figure className="column is-6 image is-120x120">
                                <img src={burger1} alt="burger regime" />
                            </figure>
                            <figure className="column is-6 image is-120x120">
                                <img src={burger1} alt="burger regime" />
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="columns is-multiline">
                    <div className="card column is-half">
                    <strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel rutrum leo. Nam odio metus, egestas in mi quis, molestie luctus metus. Ut facilisis nunc et venenatis tincidunt. Donec feugiat velit sed tempor egestas. Vivamus fermentum vel orci gravida blandit. Sed finibus diam a erat scelerisque, eget ultricies tortor consectetur. Suspendisse ut volutpat metus. Integer ac ipsum vehicula, tempus nulla sit amet, rhoncus nisl. Etiam dignissim aliquam dui non euismod. Pellentesque est elit, hendrerit nec blandit nec, hendrerit nec ligula. Ut placerat tempus lectus. Phasellus eleifend fringilla neque vel fringilla.
                    </div>
                    <div className="card column is-half">
                        <h4>Au menu:</h4>
                        <ul>
                            <li className="pointer card">Menu 1</li>
                            <li className="pointer card">Menu 2</li>
                            <li className="pointer card">Menu 3</li>
                            <li className="pointer card">Menu 4</li>
                            <li className="pointer card">Menu 5</li>
                            <li className="pointer card">Menu 6</li>
                            <li className="pointer card">Menu 7</li>
                        </ul>
                    </div>
                </div>
            </Wrapper>
        )
    }
}

export default CardResto