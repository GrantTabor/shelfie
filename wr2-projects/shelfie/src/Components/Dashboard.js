import React, {Component} from "react";
import DeleteItem from "./DeleteItem";

export default class Dashboard extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const mappedInventory = this.props.inventory.map((object) =>{
            const {id, image, name, price} = object
            
            return(
                <div>
                <img src={ image } className="image"/>
                {name}
                <span> ${price}</span>
                <DeleteItem id={id} deleteItem = {this.props.deleteItem}/>
                <button onClick={() => this.props.addEditingObject(object)} >Edit</button>
            </div>
            )
        })
        return(
            <div>
                {mappedInventory}
            </div>
        )
    }
}