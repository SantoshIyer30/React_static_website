import React from "react";
import { ReactDOM } from "react";



function Footer(props){
    return (
        <footer className = {props.darkMode ? "dark" : ""} >
                <small>© 2021 Iyer development. All rights reserved.</small>
            </footer>
    )
  }
  

  
  export default Footer;