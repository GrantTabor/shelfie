import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            nameInput: "",
            priceInput: "",
            imageInput: "",
            editId: 0,
            
        }
    }

    componentDidMount(){
        let edit = +this.props.match.params.id;
        this.setState({editId: edit})

        axios.get(`/api/inventory/${edit}`)
        .then(res =>{
          this.setState({nameInput: res.data[0].name, priceInput: res.data[0].price, imageInput: res.data[0].image})
          //console.log(this.state.object);
        })
        .catch(err =>{
          console.log(err);
        })
        
    }

    createItem = (name, price, image) =>{
        if (image === ""){
          image = "https://static.toiimg.com/photo/msid-67586673/67586673.jpg?resizemode=4&width=400"
        }
        if (price === ""){
          price = 0;
        }
        //image = image.toString()
        axios.post("/api/inventory", {name, price, image})
        .then(res =>{
          this.getInventory();
        })
        .catch(err =>{
          console.log(err)
        })
      }

    editItem = (id, name, price, image) =>{
    if (image === ""){
        image = "https://static.toiimg.com/photo/msid-67586673/67586673.jpg?resizemode=4&width=400"
    }
    if (price === ""){
        price = 0;
    }
    axios.put(`/api/inventory/${id}`, {name, price, image})
    .then(res =>{
        this.getInventory();
    })
    .catch(err =>{
        console.log(err)
    })
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
            this.createItem(this.state.nameInput, this.state.priceInput, this.state.imageInput);
            this.setState({nameInput: "", priceInput: "", imageInput: ""})
            this.props.history.push("/")
        }
    }
    handleEdit = () =>{
        if(this.state.nameInput !== ""){
            this.editItem(this.state.editId, this.state.nameInput, this.state.priceInput, this.state.imageInput);
            this.setState({nameInput: "", priceInput: "", imageInput: ""})
            this.props.history.push("/")
        }
    }

    render(){
        
        return(
            <div className="body">
                <div className="form">
                <img src={this.state.imageInput}/>
                
                Image URL:
                <input value={this.state.imageInput} type="string" placeholder="Image URL" onChange={(e) => this.handleImageChange(e.target.value)}/>
                
                Product Name:
                <input value={this.state.nameInput}  placeholder="Name" onChange={e => this.handleNameChange(e.target.value)}/>
                
                Price:
                <input value={this.state.priceInput} type="number" placeholder="Price" onChange={e => this.handlePriceChange(e.target.value)} />
                

                
                <button onClick={() => {this.setState({nameInput: "", priceInput: "", imageInput: "", editing: false})}}>Cancel</button>
                {this.props.location.pathname === "/add"
                ? (<button onClick={() => this.handleAdd()} >Add To Inventory</button>)
                : (<button onClick={() => this.handleEdit()} >Save Changes</button>)
                }
               
            </div>
            </div>
            
        );
    }
}