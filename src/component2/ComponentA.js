import React, { Component } from 'react'
import ComponentB from './ComponentB'

class ComponentA extends Component {
    render() {

        const {loginuname} = this.props
        return (
            <div>
                <h1>This is componentA </h1>
                <ComponentB loginuname={loginuname}/>
            </div>
        )
    }
}

export default ComponentA
