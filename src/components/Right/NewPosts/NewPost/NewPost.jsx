import React from 'react'
const styles = {
    main: {
        backgroundColor: 'white',
        border: 'none',
        margin: '0 0 5px 0',
        textAlign: 'start',
        whiteSpace: 'no-wrap',
    },
    img: {
        display: 'inline-block',
        width: "50px",
        height: "50px",
        verticalAlign: 'top',
        margin: '15px'
    },
    spanTitle: {
        display: 'inline-block',
        lineHeight: '25px'
    },
    spanContent:{
        display: 'inline-block',
        fontWeight: 'lighter',
        color: 'grey',
        lineHeight: '20px'
    },
    content: {
        display: 'inline-block',
        width: '350px',
        
    }
}
function NewPost(props) {
    const {newPost} = props;
    return (
        <div style={styles.main}>
        <img style={styles.img} src={newPost.src} alt=""/>
        <div style={styles.content}>
        <span style={styles.spanTitle}>{newPost.title}</span>
        <span style={styles.spanContent}>{newPost.time} | {newPost.genres.map((genre,i) => {
            return i === 0 ? genre : " | " + genre
        } )}</span>
        </div>
        </div>
    )
}

export default NewPost
