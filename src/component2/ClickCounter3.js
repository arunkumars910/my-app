import React, { Component } from "react";

class ClickCounter3 extends Component {
  
  render() {
    const { countFromRenderProp,incrementMethodCall } = this.props;
    return (
      <div>
        <h1 onMouseOver={incrementMethodCall}>Current Count :: {countFromRenderProp}</h1>
      </div>
    );
  }
}

export default ClickCounter3;
