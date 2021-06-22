import React, { Component } from "react";
import axios from "axios";

class PostLists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    var config = {
      headers: { "Access-Control-Allow-Origin": "*" },
    };
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      //.get("http://localhost:8080/product/fetchall",config)
      .then((response) => {
        console.log(response);
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <h1>List of Posts</h1>
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
      </div>
    );
  }
}

export default PostLists;
