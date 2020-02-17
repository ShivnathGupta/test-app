import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
      
        return (
            <nav aria-label="Page navigation example">
          <ul className="pagination pagination-lg">
            <li className="page-item"><a href="" className="page-link" ref="">Previous</a></li>
            <li className="page-item"><Link to="/latest/1" className="page-link">1</Link></li>
            <li className="page-item"><Link to="/latest/2" className="page-link">2</Link></li>
            <li className="page-item"><Link to="/latest/3" className="page-link">3</Link></li>
            <li className="page-item"><Link to="/latest/4" className="page-link">4</Link></li>
            <li className="page-item"><a href="" className="page-link">Next</a></li>
          </ul>
        </nav>
        )
    }
}
