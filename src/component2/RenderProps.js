import React, { Component } from "react";

class RenderProps extends Component {
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
    const { name,render } = this.props;
    // return <div>{this.props.render(this.state.count,this.increment)}</div>;

    return (
      <div>
        <h1>{name}</h1>
        {render(this.state.count,this.increment)}
      </div>
    );
  }
}

export default RenderProps;
