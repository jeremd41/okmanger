import React, {Component} from "react"
import MenuBar from "./MenuBar"
import Footer from "./Footer"

class Layout extends Component{
    render(){
        const {children} = this.props
        return(
            <div>
                <MenuBar />
                <div>{children}</div>
                <Footer />
            </div>
        )
    }
}

export default Layout