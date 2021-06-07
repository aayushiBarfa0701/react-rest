import React, { Component } from 'react'
import NavBarMenu from "./NavBarMenu"

export default class AdminDash extends Component {
    render() {
        return (
            <div>
                <NavBarMenu/>
                <h1>Admin Dashboard</h1>
            </div>
        )
    }
}
