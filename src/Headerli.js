import React from 'react'
import { Link} from 'react-router-dom'
export default function Headerli(props) {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={props.menuLink}>{props.menuName}</Link>
        </li>
    )
}
