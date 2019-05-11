
import React from "react";
import "./booksz.css";


const Booksz = props => {
  return (
    <span>
      <div className="full">
      <div className="col-md-4" id="thestuff" style={{ marginTop: "20px" }}>

        <p><img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} /></p>
        
        <p style={{ fontSize: "30px" }}>{props.title}</p>
        
        <p><strong>Author(s):</strong> {props.author}</p>
        
        <p><strong>Publish Date:</strong> {props.date}</p>
        
        <p><strong>Google Books Link:</strong> <a href={props.link} target={"_blank"} >{props.title}</a></p>

        <button> <a href={props.link} className="btn btn-warning save-btn" style={{ marginBottom: "30px"}}>
          View
        </a></button>
        
        <button onClick={props.handleSaveBook} className="btn btn-warning save-btn" style={{ marginBottom: "30px"}}>
          Save
        </button>
      
      </div>
      
      <div className="col-md-8" style={{ float: "right", marginTop: "20px" }}>
        
        <p style={{ marginBottom: "30px"}}><strong>Description:</strong> {props.description}</p>
      
      </div>
      
      <hr style={{ clear: "both" }} />

      </div>
    
    </span>
  );
}

export default Booksz;