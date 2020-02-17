import React, { Component } from 'react'
import User from './User';
import Client from './Client';

export default class Simple extends Component {
    render() {
        return (
            <div>
                <User />
                <Client/>
            </div>
        )
    }
}
