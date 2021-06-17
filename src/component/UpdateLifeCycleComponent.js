import React, { Component } from "react";

class UpdateLifeCycleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "UpdateLifeCycle Component",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps got invoked");
    return null;
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate got invoked");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState, capture) {
    console.log("getSnapshotBeforeUpdate got invoked");
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate got invoked");
  }

  changeState = () => {
    this.setState({
      name: "Update Lifecycle got invoked",
    });
  };

  render() {
    console.log("Inside render");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.changeState}>Click Here</button>
      </div>
    );
  }
}

export default UpdateLifeCycleComponent;
