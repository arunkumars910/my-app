import React, { Component } from "react";

class Model2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    return <h1 onMouseOver={this.increment}>Count : {this.state.count}</h1>;
  }
}

export default Model2;
