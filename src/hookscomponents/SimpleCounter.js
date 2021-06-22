import React, { Component } from "react";

class SimpleCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  
  render() {
    return (
      <div>
        <h1>Count is - {this.state.count}</h1>
        <button onClick={this.increment}>ClickHere</button>
      </div>
    );
  }
}

export default SimpleCounter;
