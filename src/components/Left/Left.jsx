import React, { Component } from "react";
import Title from "./Title/Title";
import Post from "./Post/Post";
class Left extends Component {
  render() {
    const { posts } = this.props;
    const styles = {
      main: {
        width: "1300px",
        margin: "0 0 0 10px"
      },
      posts: {
        display: "block",
        borderTop: "6px solid #37D0FF"
      }
    };
    return (
      <div style={styles.main}>
        <Title></Title>

        <div style={styles.posts}>
          {posts.map((post, i) => {
            return <Post key={i} post={post}></Post>;
          })}
        </div>
      </div>
    );
  }
}
export default Left;
