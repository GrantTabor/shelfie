import React, {Component} from "react";

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            nameInput: "",
            priceInput: "",
            imageInput: "",
            editing: false
        }
    }


    componentDidUpdate(prevProps, prevState){
        if(prevProps.editingObject !== this.props.editingObject){
            this.setState({nameInput: this.props.editingObject.name, priceInput: this.props.editingObject.price, imageInput: this.props.editingObject.image})
            this.setState({editing: true})
            console.log(this.props.editingObject.id)
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
        if(this.state.nameInput !== ""){
            this.props.createItem(this.state.nameInput, this.state.priceInput, this.state.imageInput);
            this.setState({nameInput: "", priceInput: "", imageInput: ""})
        }
    }
    handleEdit = () =>{
        if(this.state.nameInput !== ""){
            this.props.editItem(this.props.editingObject.id, this.state.nameInput, this.state.priceInput, this.state.imageInput);
            this.setState({nameInput: "", priceInput: "", imageInput: "", editing: false})
        }
    }

    render(){
        return(
            <div>
                <input value={this.state.imageInput} type="string" placeholder="Image URL" onChange={(e) => this.handleImageChange(e.target.value)}/>
                <input value={this.state.nameInput}  placeholder="Name" onChange={e => this.handleNameChange(e.target.value)}/>
                <input value={this.state.priceInput} type="number" placeholder="Price" onChange={e => this.handlePriceChange(e.target.value)} />

                <img src={this.state.imageInput}/>
                <button onClick={() => {this.setState({nameInput: "", priceInput: "", imageInput: "", editing: false})}}>Cancel</button>
                {this.state.editing
                ? (<button onClick={() => this.handleEdit()} >Save Changes</button>)
                : (<button onClick={() => this.handleAdd()} >Add To Inventory</button>)
                }
                
            </div>
        );
    }
}