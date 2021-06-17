import React, { Component, PureComponent } from "react";
import MemoReact from "./MemoReact";
import PureComp from "./PureComp";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Hello React",
    };
    console.log("constructor initilized");
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Hello World",
      });
    }, 2000);
  }

  render() {
    console.log("class component got rendered");
    return (
      <div>
        {/* <PureComp name={this.state.name} /> */}
        <MemoReact name={this.state.name}/>
        <h1>This is Parent component</h1>
      </div>
    );
  }
}

export default ParentComponent;
