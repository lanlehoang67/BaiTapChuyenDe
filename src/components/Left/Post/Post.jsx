import React from "react";
import Button from "../../Button/Button";
const styles = {
  coverImg: {
    margin: "auto 0 auto 30px",
    paddingRight: "30px",
    width: "650px",
    height: "250px",
  },
  post: {
    display: "flex",
    margin: "0 0 5px",
    backgroundColor: "white",
    height: "300px"
  },
  detail: {
    display: "inline-block",
    color: "#4FB0FF",
    fontWeight: "bold",
    lineHeight: "30px",
    margin: "20px 0 15px 0"
  },
  postBy: {
    display: "block",
    float: "left",
    lineHeight: "36px",
    margin: "0 0 15px 0"
  },
  content: {
    display: "inline-block",
    fontWeight: "bold",
    lineHeight: "30px",
    margin: "0 0 15px 0"
  },
  button: {
    display: "block",
    color: "black",
    backgroundColor: "#e7e7e7",
    margin: "4px 2px",
    position: "absolute",
    bottom: '21px'
  },
  rating: {
    display: 'inline-block',
    color: 'grey'
  },
  rightSide: {
    position: 'relative',
    width: '800px'
  }
};
function Post(props) {
  const { post } = props;
  return (
    <div style={styles.post}>
      <img src={post.src} style={styles.coverImg} alt="" />
      <div style={styles.rightSide}>
        <span style={styles.detail}>{post.title.toUpperCase()}</span>
        <span style={styles.postBy}>
          Posted by {post.author} | {post.time} |{" "}
          {post.genres.map((genre, index) => {
            return index === 0 ? genre : ", " + genre;
          })}{" "}
          |{" "}
          <div className="star-ratings-sprite" style={styles.rating}>
            <span
              style={{ width: ((post.rate / 5) * 100).toString() + "%" }}
              className="star-ratings-sprite-rating"
            ></span>
          </div>
        </span>
        <span style={styles.content}>{post.content}</span>
        <Button styles={styles.button}>READ MORE</Button>
      </div>
    </div>
  );
}

export default Post;
