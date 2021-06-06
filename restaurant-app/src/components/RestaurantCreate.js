import React, { Component } from 'react'
import {Button } from 'react-bootstrap'
import NavBarMenu from "./NavBarMenu"

export default class RestaurantCreate extends Component {
    constructor()
    {
        super();
        this.state=
        {
            name: null,
            email: null,
            address: null,
            rating: null
        }
    }
    create()
    {
        fetch('http://localhost:3000/restaurant',
        {
            method:"Post",
            headers: {
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(this.state)
        }).then((result)=> {
            result.json().then((resp)=>{
                alert("Restaurant has been added ")
            })
        })
    }
    render() {
        return (
            <div>
                <NavBarMenu/>  
                <h1>Restaurant Create</h1>
                <input type="text" onChange={(event)=>{this.setState({ name: event.target.value })}} 
                    placeholder="Restaurant Name"/><br/><br/>
                <input type="text" onChange={(event)=>{this.setState({ email: event.target.value })}} 
                    placeholder="Restaurant Email"/><br/><br/>
                <input type="text" onChange={(event)=>{this.setState({ address: event.target.value })}} 
                    placeholder="Restaurant Address"/><br/><br/>
                <input type="text" onChange={(event)=>{this.setState({ rating : event.target.value })}} 
                    placeholder="Restaurant Rating"/><br/><br/>
                <Button onClick={ ()=>{this.create()}}>Add Restaurant</Button>
            </div>
        )
    }
}
