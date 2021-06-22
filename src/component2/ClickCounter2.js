import React, { Component } from 'react'

class ClickCounter2 extends Component {
 
    render() {
        const { countFromRenderProp,incrementMethodCall } = this.props;
        return (
            <div>
                <h1>Current Count :: {countFromRenderProp}</h1>
                <button onClick={incrementMethodCall}>Click Here</button>
            </div>
        )
    }
}

export default ClickCounter2
