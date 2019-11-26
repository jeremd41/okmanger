import React, {Component} from 'react';
import Router from "./router/Router";
import MenuBar from "./components/MenuBar";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <MenuBar/>
                </Router>
            </div>
        )
    }
}

export default App;