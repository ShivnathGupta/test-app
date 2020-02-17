import React, { Component } from 'react'

export default class Map extends Component {
    state={
        name:"Shiv",
        roll:this.props.roll
    }
    render() {
        const newArray=this.state.roll.map(item=>(<h1>{item}</h1>))
        return (
            <div>
                {newArray}
            </div>
        )
    }
}
