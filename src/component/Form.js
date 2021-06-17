import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
      topic: "",
      isGoing: false,
      checkBoxvalue:""
    };
  }

  handleUsernameChange = (event) => {
    this.setState(
      {
        username: event.target.value,
      },
      () => {
        console.log("username", this.state.username);
      }
    );
  };

  handleCommentChange = (event) => {
    this.setState(
      {
        comment: event.target.value,
      },
      () => {
        console.log("comment", this.state.comment);
      }
    );
  };

  handleTopicChange = (event) => {
    this.setState(
      {
        topic: event.target.value,
      },
      () => {
        console.log("topic", this.state.topic);
      }
    );
  };

  handleCheckboxChange = (event) => {
    const target = event.target;
    const value = target.checked ? true:false;
    
    this.setState({
      isGoing: value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comment} ${this.state.topic} ${this.state.isGoing}`);
    event.preventDefault();
  };

  render() {
    const { username, comment, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>comment</label>
          <textarea
            value={comment}
            onChange={this.handleCommentChange}
          ></textarea>
        </div>

        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option>React</option>
            <option>Angular</option>
            <option>Python</option>
          </select>
        </div>

        <div>
          <label>isGoing</label>
          <input name="isGoing" type="checkbox" value="hello" onClick={this.handleCheckboxChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
