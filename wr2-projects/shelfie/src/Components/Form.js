import React, {Component} from "react";

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            nameInput: "",
            priceInput: "",
            imageInput: ""
        }
    }

    handleNameChange =(val) =>{
        this.setState({nameInput: val})
    }
    handleImageChange =(val) =>{
        this.setState({imageInput: val})
    }
    handlePriceChange = (val) =>{
        this.setState({priceInput: val})
    }

    handleAdd = () =>{
        this.props.createItem(this.state.nameInput, this.state.priceInput, this.state.imageInput);
        this.setState({nameInput: "", priceInput: "", imageInput: ""})

    }

    render(){
        return(
            <div>
                <input value={this.state.imageInput} type="string" placeholder="Image URL" onChange={(e) => this.handleImageChange(e.target.value)}/>
                <input value={this.state.nameInput}  placeholder="Name" onChange={e => this.handleNameChange(e.target.value)}/>
                <input value={this.state.priceInput} type="number" placeholder="Price" onChange={e => this.handlePriceChange(e.target.value)} />

                <img src={this.state.imageInput}/>
                <button onClick={() => {this.setState({nameInput: "", priceInput: "", imageInput: ""})}}>Cancel</button>
                <button onClick={() => this.handleAdd()} >Add To Inventory</button>
            </div>
        );
    }
}