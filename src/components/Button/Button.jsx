import React from 'react'
const styles = {
    border: 'none',
    color: 'black',
    backgroundColor: '#e7e7e7',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
}
function Button(props) {
    return (
        <button style={styles}>{props.children}</button>
    )
}

export default Button
