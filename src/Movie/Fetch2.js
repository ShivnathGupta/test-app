import React, { Component } from 'react'
import './Fetch.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';

export default class Fetch2 extends Component {


  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      data: null,
      test: null
    }

  }
  componentWillMount() {
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=da46474f8dd8ea1caebd07b84cb98b86&language=en-US&page=3").then(res => {
      return res.json();
    }).then((dt) => {
      this.setState({
        data: dt
      })
    })
  }

  getContact = () => {
    if (this.state.data != null) {
      let images = [];
      this.state.data.results.map((item) => {
        let image = <div className="module">
          <img src={"http://image.tmdb.org/t/p/w185/" + item.poster_path} alt={item.original_title} />
          <div className="titleContainer">
            <div className="title">Movie Name: {item.original_title}</div>
            <div className="title">Rating: {item.popularity}</div>
            <div className="title">Vote Avg.: {item.vote_average}</div>
            <div className="title">Relase Date: {item.release_date}</div>
            <div className="title">Vote: {item.vote_count}</div>
          </div>
          <div className="desc">
            {item.overview}
          </div>
          <input type="Button" value="More Details" className="button" onClick={this.passId}></input>

        </div>
        images.push(image);
      })
      return images;
    }
    else {
      return <h1>No data found.</h1>
    }
  }

  render() {
    return (
      <React.Fragment>

        <div className="container">
          {this.getContact()}
        </div>
        <Navigation />

      </React.Fragment>
    );
  }
}
