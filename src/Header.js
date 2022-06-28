import React from "react";
import logo from './logo.svg';

function Header(props){
    return(
         <header>
                <nav className ={props.darkMode ? "dark" : ""}>
                <img src={logo} className="App-logo" alt="logo" />
                <h2>ReactFacts </h2>
                <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
                </nav>
            </header>
    )
  }

  
  export default Header;      //to export header function