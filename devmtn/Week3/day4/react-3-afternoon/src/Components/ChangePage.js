import React from "react"


export default function ChangePage(props) {

    return(
        <div>
            <button onClick={e => {props.decrement(props.page)}}>Previous</button>
            <button onClick={e => {props.increment(props.page)}}>Next</button>
        </div>
    )
}