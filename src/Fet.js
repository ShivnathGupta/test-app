import React, { Component } from 'react'

export default class Fet extends Component {    
    render() {
        return (
            <div className="module">
                <img src={'http://image.tmdb.org/t/p/w185/ ${this.props.poster_path}'} alt={this.props.alt} />
                <div className="titleContainer">
                    <div>Movie Name: {this.props.movie_title}</div>
                    <div>Rating: {this.props.rating}</div>
                    <div>Vote Avg.: {this.props.vote_average}</div>
                    <div>Relase Date: {this.props.release_date}</div>
                    <div>Vote: {this.props.vote_count}</div>
                </div>
                <div>
                    {this.props.desc}
                </div>
                <input type="Button" value="More Detail"></input>
            </div>
        )
    }
}
