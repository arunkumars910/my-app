import React, { Component } from "react";
import ForwardRef from "./ForwardRef";

class ParentRefComp extends Component {
  constructor(props) {
    super(props);
    this.inputReference = React.createRef();
  }

  clickHandler = () => {
    this.inputReference.current.focus();
  };

  render() {
    return (
      <div>
        <h1>Parent component to forward the reference</h1>
        <ForwardRef ref={this.inputReference} />
        <button onClick={this.clickHandler}>click here</button>
      </div>
    );
  }
}

export default ParentRefComp;
