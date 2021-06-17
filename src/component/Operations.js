import React, { Component } from 'react'

class Operations extends Component {


    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        },
         //call back param
         ()=>{
            console.log("count :: ", this.state.count)
         }
        )
       
       }

    render() {
        return (
            <div>
                <h1>count - {this.state.count}</h1>
                <button onClick={() => this.increment()}>increment</button>
            </div>
        )
    }
}

export default Operations