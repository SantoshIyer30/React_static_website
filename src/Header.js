import React from "react";
import { ReactDOM } from "react";
import logo from './logo.svg';

function Header(){
    return(
         <header>
                <nav className = "navbar">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>ReactFacts </h2>
                <h3> A Static React Web Page </h3>
                </nav>
            </header>
    )
  }

  
  export default Header;      //to export header function