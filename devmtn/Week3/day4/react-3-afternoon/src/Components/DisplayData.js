import React, {Component} from "react"
import ChangePage from "./ChangePage";


export default class DisplayData extends Component{
    constructor(props){
        super(props)
        this.state ={
            page: 1
        }
    }

    increment = (page) =>{
        let newPage = page + 1;
        if(newPage > this.props.data.length){
            newPage = 1;
        }
        this.setState({page: newPage})
    }
    decrement = (page) =>{
        let newPage = page - 1;
        if(newPage === 0){
            newPage = this.props.data.length;
        }
        this.setState({page: newPage})
    }
    

    render(){
        //let data = this.props.data
        let data = this.props.data.map((object) =>{
            const {id, name, city, country, employer, title, favoriteMovies} = object;
            
            if(this.state.page === id){
                return (<div>
                    <header>
                        <p>{`${id} / ${this.props.data.length}`}</p>
                    </header>
                    <p>
                     {`${name.first} ${name.last}`}
                    </p>
                    <div>
                       <p>{`From: ${city}, ${country}`}</p>
                       <p>{`Job Title: ${title}`}</p>
                       <p>{`Employer: ${employer}`}</p>
                       <p>{`Favorite Movies: ${favoriteMovies}`} </p>
                    </div>
                       
                   </div>  
               )
            }
          }) 
        return(
            <div>
                {data}
                
                <ChangePage increment ={this.increment} decrement ={this.decrement} page={this.state.page}/>
            </div>
        )
    }
}