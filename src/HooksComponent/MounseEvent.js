import React, { Component } from "react";

class MounseEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  logMouseCordinates = (e) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.logMouseCordinates);
  }

  render() {
    return (
      <div>
        X- {this.state.x} Y- {this.state.y}
      </div>
    );
  }
}

export default MounseEvent;
