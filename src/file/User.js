import React, { Component } from 'react'
import Style from './User.module.css';

export default class User extends Component {
    render() {
        return (
            <div>
                <h1 className={Style.txt}>Rahul</h1>
            </div>
        )
    }
}
