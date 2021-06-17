import React, { Component } from 'react'
import ChildLifeCycleComponent from './ChildLifeCycleComponet'

class MountingComponentLifeCycle extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Hello'
        }
        console.log("Constructor initialized")
    }
    
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps got invoked")
        return null
    }

    componentDidMount(){
        console.log("componentDidMount Lifecycle got invoked")
    }

    render() {
        console.log("rendering happened")
        return (
            <div>
                <h1>{this.state.name}</h1>
                <ChildLifeCycleComponent />
            </div>
        )
    }
}

export default MountingComponentLifeCycle
