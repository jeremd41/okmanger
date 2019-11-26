import React, {Component} from 'react';

class Root extends Component {
    UNSAFE_componentWillMount(){
        document.location.href="/accueil";
    }

    render() {
        return null;
    }
}

export default Root;