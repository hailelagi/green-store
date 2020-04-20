import React, {Component} from 'react';
import SignIn from "./SignIn";
import Navbar from "./Navbar";

class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <SignIn/>
            </React.Fragment>
        );
    }
}

export default HomePage;
