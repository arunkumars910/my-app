import React, { Component, PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log('Pure component got rendered')
        return (
            <div>
                <h1>Pure Component {this.props.name}</h1>
            </div>
        )
    }
}

export default PureComp
