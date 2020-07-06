import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Form from "./Components/Form";
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inventory: []
    }
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


  componentDidMount(){
    
    this.getInventory();
  }

  render(){
    return (
      <div className="App">
          <Header/>
      </div>
    );
  } 
}

export default App;
