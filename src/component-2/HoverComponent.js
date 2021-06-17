import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverComponent extends Component {

    render() {
    const { name,count } = this.props;
    
    return (
      <div>
         
        <h1 onMouseOver={this.props.increment}>
          This is Hover count : {count}   {name}
        </h1>
      </div>
    );
  }
}

export default withCounter(HoverComponent,5);
