import React from "react";
import "./nav.css";

function Nav() {

  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      
      <a className="navbar-brand" id= "title" href="/">
        
        (React) Google Books Search
      
      </a>

      <a className="navbar-brand" id = "saved" href="savedbooks">
        
        Saved Books
      
      </a>
    
    </nav>

  );

}

export default Nav;