
import React, { Component } from 'react';
import {Button} from'react-bootstrap'

class AdminLogin extends Component {
    constructor(){
        super();
        this.state={
            name:null,
            password:null
        }
        
    }
    adminlogin()
    { 
        console.warn(this.state)
        fetch("http://localhost:3000/admin?q="+this.state.name).then((resp)=>{
            resp.json().then((result)=>{
                console.warn("result",result);
                if(result.length>0)
                {
                    console.warn(this.props.history.push("admindash"))
                    console.warn("props",this.props)
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
              
                <h1>Admin Login Page</h1>
                <input type="text" onChange={(event)=>{this.setState({name: event.target.value})}} placeholder="enter name" /><br/><br/>
                <input type="password" onChange={(event)=>{this.setState({password: event.target.value})}} placeholder="enter password" /><br/><br/>
                <Button onClick={()=>{this.adminlogin()}}>Login</Button>
                
            </div>
        );
    }
}

export default AdminLogin;
