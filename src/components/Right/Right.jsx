import React, { Component } from 'react'
import RegisterBox from './RegisterBox/RegisterBox'
import NewPosts from './NewPosts/NewPosts'
export default class Right extends Component {
    render() {
        return (
            <>
            <RegisterBox></RegisterBox>
            <NewPosts></NewPosts>
            </>
        )
    }
}
