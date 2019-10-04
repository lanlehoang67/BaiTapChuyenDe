import React from 'react'
import Button from '../../Button/Button'
import NewPost from '../NewPosts/NewPost/NewPost'
const styles = {
    head: {
        display: 'grid',
        border: 'none',
        width: '450px',
        backgroundColor: '#3E5062',
        margin: '0',
        height: '65px',
        color: 'white',
        fontWeight: 'bold',
        lineHeight: '65px',
        verticalAlign: 'middle'
    },
    headContent: {
        paddingLeft: '15px'
    },
    newPosts: {
        display: 'block',
        color: 'black',
        lineHeight: '40px'
    }
}
function NewPosts(props) {
    const {newPosts} = props;
    return (
        <>
       <div style={styles.head}><div style={styles.headContent}>BÀI VIẾT MỚI</div>
       
       <div style={styles.newPosts}>{
           newPosts.map(newPost => {
            return <NewPost newPost={newPost}></NewPost>
           })
       }
       </div>
       </div>
       
       </>
    )
}

export default NewPosts
