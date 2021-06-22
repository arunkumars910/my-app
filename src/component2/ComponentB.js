import React, { Component } from "react";
import ComponentC from "./ComponentC";
import { UserContext } from "./userContext";

class ComponentB extends Component {
  render() {
    const { loginuname } = this.props;
    return (
      <div>
        <h2>{this.context}</h2>
        <h1>This is componentB </h1>
        <ComponentC loginuname={loginuname} />
      </div>
    );
  }
}

ComponentB.contextType = UserContext;

export default ComponentB;
