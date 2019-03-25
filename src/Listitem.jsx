import React from "react";
import Hate from "./Hate.jsx";
import Likes from "./Likes.jsx";



function ListItem(props) {
  return (
    <div className="list-group-item">
      {props.children}
      <button
        type="button"
        className="btn btn-link float-right"
        aria-label="Delete"
        onClick={() => props.delete(props.index)}
      >
        x 
      </button>
      <p>
      <Likes />
         <Hate />
         </p>
    </div>
  );
}

export default ListItem;
