import React, { Component } from "react";

class ModelCount1 extends Component {
  
  render() {
    return (<div>
        <h1>{this.props.count} {this.props.name}</h1>
        <button onClick={this.props.increment}>Click Here</button>
    </div>);
  }
}

export default ModelCount1;
