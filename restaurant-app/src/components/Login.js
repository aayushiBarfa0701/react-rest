import React, { Component } from 'react';
import {Button} from'react-bootstrap'
import NavBarMenu from "./NavBarMenu"
class Login extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            password:""
        }
        
    }
    login()
    {
        console.warn(this.state)
        fetch("http://localhost:3000/login?q="+this.state.name).then((resp)=>{
            resp.json().then((result)=>{
                if(result.length>0)
                {
                    localStorage.setItem('login',JSON.stringify(result))
                    console.warn(this.props.history.push('list'));
                }
                else
                {
                    alert("Please check user name and Password");
                }
            })
        })
    }
    render() {
        return (
            <div>
                <NavBarMenu/> 
                <h1>Login</h1>
                <input type="text" onChange={(event)=>{this.setState({name: event.target.value})}} placeholder="enter name" /><br/><br/>
                <input type="password" onChange={(event)=>{this.setState({password: event.target.value})}} placeholder="enter password" /><br/><br/>
                <Button onClick={()=>{this.login()}}>Login</Button>
                
            </div>
        );
    }
}

export default Login;