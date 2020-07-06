import React, {Component} from "react";
import DeleteItem from "./DeleteItem";
import axios from "axios";


export default class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
          inventory: [],
          editingObject: {}
        }
        
      }
    
      componentDidMount(){
        this.getInventory();
      }
      componentDidUpdate(){
          this.getInventory();
      }
     
      getInventory = () =>{
        axios.get("/api/inventory")
        .then(res =>{
          this.setState({inventory: res.data})
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
  
    render(){
        const mappedInventory = this.state.inventory.map((object) =>{
            const {id, image, name, price} = object
            
            return(
            <div className="item">
                <img src={ image } className="image"/>
                <div className="info">
                    <div className="text">
                    <p>{name}</p>
                    <p> ${price}</p>
                    </div>
                    <div className="buttons">
                        <DeleteItem id={id} deleteItem = {this.deleteItem}/>
                        <button onClick={()=>this.props.history.push(`/edit/${id}`)} >Edit</button>
                    </div>

                    
                </div>
                
                
            </div>
            )
        })
        return(
            <div className="body" >
                {mappedInventory}
                
            </div>
        )
    }
}