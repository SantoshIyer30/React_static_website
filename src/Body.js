import React from "react";
import { ReactDOM } from "react";



function Body(){
    return (
      <div className='main'>
        <h1  className="main-heading"> Fun Facts About React </h1>
        <ul className="fact-list">
          <li className="list-item">Was first released in 2013</li>
          <li className="list-item">Was originally created by Jordan Walke</li>
          <li className="list-item">Has well over 100K stars on Github</li>
          <li className="list-item">Is maintained by Facebook</li>
          <li className="list-item">Powers thousands of enterprise apps,including mobile apps</li>
        </ul>
      </div>
    )
  }

  
  export default Body;