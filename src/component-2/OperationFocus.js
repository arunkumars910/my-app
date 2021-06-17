import React, { Component } from 'react'
import ComponentInput from './ComponentInput';

class OperationFocus extends Component {

    constructor(props) {
        super(props)
        
        this.componentRefernce=React.createRef();
    }
    
    clickHandler=()=>{
        this.componentRefernce.current.focusReference();
    }

    render() {
        return (
            <div>
                <h1>This is Focus operation</h1>
                <ComponentInput ref={this.componentRefernce}/>
                <button onClick={this.clickHandler}>click here</button>
            </div>
        )
    }
}

export default OperationFocus
