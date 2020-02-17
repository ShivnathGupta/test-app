import React, { Component } from 'react'
import './Fetch.css';
import Fet from './Fet'

export default class File extends Component {
    constructor(props){
        super(props);
        this.state={
            data:null
        }
    }
    componentWillMount() {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=da46474f8dd8ea1caebd07b84cb98b86&language=en-US&page=1").then(response => response.json).then(data => {
            this.setState = {
                data:data
            }
        })
    }

    
    render() {
        
        return (
            <React.Fragment>
    if(this.state.data!=null)
    {
        this.state.data.results.map((item)=>{
           <div>
            <Fet poster_path="sg" movie_title="sdfs" rating="4.4" desc={item.desc} />
                
            </div>
            
        })
        
        }
        </React.Fragment>
        )
    }
    

}
