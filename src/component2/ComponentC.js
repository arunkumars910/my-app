import React, { Component } from "react";
import { UserConsumer } from "./userContext";

class ComponentC extends Component {
  render() {
    const { loginuname } = this.props;
    return (
      <div>
        <h1>This is componentC </h1>
        <h1>Username :: {loginuname}</h1>
        <UserConsumer>
          {(stackname) => {
            return <h1>Currently {stackname} is going on</h1>;
          }}
        </UserConsumer>
      </div>
    );
  }
}

export default ComponentC;
