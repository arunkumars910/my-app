import React, { Component } from "react";
import RefComponent from "./RefComponent";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    //to call the focus method in the input element
    //current property refers to the actual DOM element
    this.refernceObj = React.createRef();
  }

  handler = () => {
    alert(this.refernceObj.current.value);
  };
  
  clickHandler=()=>{
      this.refernceObj.current.focusInput();
  }

  componentDidMount() {
    this.refernceObj.current.focus();
    console.log(this.refernceObj);
  }

  render() {
    return (
      <div>
        <h1>Refs Demo</h1>
        <RefComponent />
        <input type="text" ref={this.refernceObj}/>
        <button onClick={this.handler}>Click Here</button>

        {/* <button onClick={this.clickHandler}>Fire</button> */}
      </div>
    );
  }
}

export default RefsDemo;
