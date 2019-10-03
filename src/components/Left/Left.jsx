import React, { Component } from 'react'
import Title from './Title/Title'
import Button from '../Button/Button'
class Left extends Component {
    render() {
        const { posts } = this.props;
        const styles = {
            main: {
                width: '1300px',
                margin: '0 0 0 10px',
            },
            posts: {
                display: "block",
                borderTop: '6px solid #37D0FF',
            },
            coverImg: {
                width: '450px',
                height: '250px',
                margin: 'auto',
                marginLeft: '30px',
                marginRight: '20px'
            },
            post: {
                display: "flex",
                margin: "0 0 10px",
                backgroundColor: 'white',
                height: '300px'
            },
            detail: {
                display: "block",
                color: '#4FB0FF',
                fontWeight: 'bold', 
                lineHeight: '30px',
                margin: '20px 0 15px 0'
            },
            postBy: {
                float: 'left',
                lineHeight: '30px',
                margin: '0 0 15px 0'
            },
            content: {
                display: 'block',
                fontWeight: 'bold',
                lineHeight: '30px',
                 margin: '0 0 15px 0'
            }

        }
        return (
            <div style={styles.main}>
                <Title></Title>

                <div style={styles.posts}>{
                    posts.map((post, i) => {
                        return (<div style={styles.post}>
                            <img key={i} src={post.src} style={styles.coverImg} alt="" />
                            <div>
                                <span style={styles.detail} key={"h" + i}>{post.title.toUpperCase()}</span>
                                <span>Posted by {post.author} | {post.time} | {post.genres.map((genre, index) => {
                                    return index === 0 ? genre : ", " + genre
                                }
                                )} | <div className="star-ratings-sprite"><span style={{ width: ((post.rate / 5) * 100).toString() + "%" }} className="star-ratings-sprite-rating"></span></div>
                                </span>
                                <span style={styles.content}>{post.content}</span>
                                <Button>READ MORE</Button>
                            </div>
                        </div>)
                    }
                    )}
                </div>
            </div>
        )
    }
}
export default Left;