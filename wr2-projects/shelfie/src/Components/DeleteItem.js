import React from "react";

export default function DeleteItem(props){
    return(
        <div>
            <button onClick={() =>{props.deleteItem(props.id)}}>Delete</button>
        </div>
    )
}