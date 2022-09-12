import React, { Component } from "react";
import FirstClassComponent from "./FirstClassComponent";
import FooterClassComponent from "./FooterClassComponent";
import HeaderClassComponent from "./HeaderClassComponent";

class App extends Component {

    render(){

        return (
            <div>
                <HeaderClassComponent />
                <FirstClassComponent />
                <FooterClassComponent />
            </div>
        );
    }

}

export default App;