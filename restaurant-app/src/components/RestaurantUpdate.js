import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import NavBarMenu from "./NavBarMenu"
export default class RestaurantUpdate extends Component {
    constructor()
    {
        super();
        this.state=
        {
            name: null,
            email: null,
            address: null,
            rating: null,
            id: null
        }
    }
    componentDidMount()
    {
        fetch('http://localhost:3000/restaurant/'+ this.props.match.params.id).then((resp) => {
            resp.json().then((result) => {
                //console.warn(result)
                this.setState({ name: result.name ,
                                email:result.email,
                                id: result.id,
                                rating:result.rating,
                                address: result.address
                 });
            });
        });
    }
    update()
    {
        fetch('http://localhost:3000/restaurant/'+this.state.id,
        {
            method:"PUT",
            headers: {
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(this.state)
        }).then((result)=> {
            result.json().then((resp)=>{
                alert("Restaurant has been Updated ")
            })
        })     
    }
    render() {
        //console.warn(this.state);
        return ( 
            <div>
                <NavBarMenu/>  
                <h1>Restaurant Update</h1>
                <input type="text" onChange={(event)=>{this.setState({ name: event.target.value })}} 
                    placeholder="Restaurant Name"    value={this.state.name}          /><br/><br/>
                <input type="text" onChange={(event)=>{this.setState({ email: event.target.value })}} 
                    placeholder="Restaurant Email"   value={this.state.email}          /><br/><br/>
                <input type="text" onChange={(event)=>{this.setState({ address: event.target.value })}} 
                    placeholder="Restaurant Address" value={this.state.address}          /><br/><br/>
                <input type="text" onChange={(event)=>{this.setState({ rating : event.target.value })}} 
                    placeholder="Restaurant Rating"  value={this.state.rating}          /><br/><br/>
                <Button onClick={ ()=>{this.update()}}>update Restaurant</Button>
            
            </div>
        )
    }
}