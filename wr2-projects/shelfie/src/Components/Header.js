import React, {Component} from "react";
import {Link} from "react-router-dom";


export default class Header extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <header>
                <h1>SHELFIE</h1>
                <Link className="link" to="/">DashBoard</Link>
                <Link className="link" to="/add">Add Item</Link>
            </header>
        )
    }
}