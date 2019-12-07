import React, {Component} from "react"
import MenuBar from "./MenuBar"

class Layout extends Component{
    render(){
        const {children} = this.props
        return(
            <div>
                <MenuBar />
                <div>{children}</div>
            </div>
        )
    }
}

export default Layout