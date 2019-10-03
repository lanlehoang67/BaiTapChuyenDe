import React from 'react'

function Button(props) {

    const styles = {
        border: 'none',
        color: props.styles.color,
        backgroundColor: props.styles.backgroundColor,
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: props.styles.display,
        fontSize: '16px',
        margin: props.styles.margin,
        cursor: 'pointer',
        width: props.styles.width
    }
    return (
        <button style={styles}>{props.children}</button>
    )
}

export default Button
