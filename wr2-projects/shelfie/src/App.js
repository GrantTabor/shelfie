import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Header from "./Components/Header";
import Form from "./Components/Form";
import Dashboard from"./Components/Dashboard";
import DeleteItem from "./Components/DeleteItem";



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inventory: []
    }
  }

  componentDidMount(){
    this.getInventory();
  }

  
  getInventory = () =>{
    axios.get("/api/inventory")
    .then(res =>{
      this.setState({inventory: res.data})
      console.log(this.state.inventory);
    })
    .catch(err =>{
      console.log(err);
    })
  }
  deleteItem = (id) =>{
    axios.delete(`/api/inventory/${id}`)
    .then(res =>{
      this.getInventory();
    })
    .catch(err =>{
      alert(err)
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



  

  render(){
    return (
      <div className="App">
          <Header/>

          
  
              <Dashboard 
              inventory = {this.state.inventory}
              deleteItem = {this.deleteItem}
              />
           
          

          <Form 
          createItem = {this.createItem}
          />
      </div>
    );
  } 
}

export default App;
