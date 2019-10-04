import React from 'react'
import RegisterBox from './RegisterBox/RegisterBox'
import NewPosts from './NewPosts/NewPosts'
const styles = {
    display: 'grid',
    margin: '0 auto',
    justifyItems: 'center',
}

function Right(props) {
    const {newPosts} = props;
    return (
        <div style={styles}>
        <RegisterBox></RegisterBox>
        <NewPosts newPosts={newPosts}></NewPosts>
        </div>
    )
}

export default Right
