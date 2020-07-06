import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {Link} from "react-router-dom";


import routes from "./routes";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Dashboard from"./Components/Dashboard";
import DeleteItem from "./Components/DeleteItem";



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inventory: [],
      editingObject: {}
    }
    
  }






  render(){
    return (
      <div className="App">
          <Header />
         
         
          
           {routes}
      </div>
    );
    
  } 

}

export default App;
