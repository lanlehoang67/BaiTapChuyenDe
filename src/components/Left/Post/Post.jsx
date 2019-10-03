import React from "react";
import Button from "../../Button/Button";
const styles = {
  coverImg: {
    width: "450px",
    height: "250px",
    margin: "auto",
    marginLeft: "30px",
    marginRight: "20px"
  },
  post: {
    display: "flex",
    margin: "0 0 10px",
    backgroundColor: "white",
    height: "300px"
  },
  detail: {
    display: "block",
    color: "#4FB0FF",
    fontWeight: "bold",
    lineHeight: "30px",
    margin: "20px 0 15px 0"
  },
  postBy: {
    float: "left",
    lineHeight: "30px",
    margin: "0 0 15px 0"
  },
  content: {
    display: "block",
    fontWeight: "bold",
    lineHeight: "30px",
    margin: "0 0 15px 0"
  },
  button: {
    display: "inline-block",
    color: "black",
    backgroundColor: "#e7e7e7",
    margin: "4px 2px"
  }
};
function Post(props) {
  const { post } = props;
  return (
    <div style={styles.post}>
      <img src={post.src} style={styles.coverImg} alt="" />
      <div>
        <span style={styles.detail}>{post.title.toUpperCase()}</span>
        <span>
          Posted by {post.author} | {post.time} |{" "}
          {post.genres.map((genre, index) => {
            return index === 0 ? genre : ", " + genre;
          })}{" "}
          |{" "}
          <div className="star-ratings-sprite">
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
