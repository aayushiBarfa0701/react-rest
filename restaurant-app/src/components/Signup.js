import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import NavBarMenu from './NavBarMenu'

export default class Signup extends Component {
    constructor(){
        super();
        this.state={
            name:null,
            password:null,
            
        }
        
    }
    signup()
    {
        fetch('http://localhost:3000/login',
        {
            method:"Post",
            headers: {
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(this.state)
        }).then((result)=> {
            result.json().then((resp)=>{
                
                alert("You are have sucessfully Signed Up")
            })
        })
    }
    render() {
        return (
            <div>
                 <NavBarMenu/>
                <h1>Sign up page</h1>
                {/* {<Button>Admin</Button>} */}
                <input type="text" onChange={(event)=>{this.setState({name: event.target.value})}} placeholder="enter name" /><br/><br/>
                <input type="password" onChange={(event)=>{this.setState({password: event.target.value})}} placeholder="enter password" /><br/><br/>
                <Button onClick={()=>{this.signup()}}>Signup</Button> 
            </div>
        )
    }
}
