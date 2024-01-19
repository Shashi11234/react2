import React from "react";

var cssstyle={
marginLeft:"50px",
};

function Part(props){
  return(
  <div className="Movies">
        <img src={props.img}/>
        <p>{props.Name}</p>
        <p>{props.series}</p>
        <p>{props.year}</p>
        <p>{props.collection}</p>
        <p>{props.star}</p>
        <button>Watch Now</button>
    </div>
  )
}
export default Part;