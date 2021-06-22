import React, { Component } from "react";
import axios from "axios";

class ReactGetCall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookinfo: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log("response : ", response);
        this.setState({
            bookinfo: response.data,
        });
      })
      .catch((error) => {
        console.log("error : ", error);
      });
  }

  render() {
    const { bookinfo } = this.state;
    console.log('current state',this.state)
    return (
      <div>
        {bookinfo.length
          ? bookinfo.map((info) => (
              <div key={info.id}>
                 {info.userId} {info.title}
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default ReactGetCall;
