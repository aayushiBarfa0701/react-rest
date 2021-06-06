import React, { Component } from "react";
import {Table,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash} from '@fortawesome/free-solid-svg-icons'
import NavBarMenu from "./NavBarMenu"

export default class RestaurantList extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
        };
    }
    componentDidMount() {
        this.getData();
    }
    getData()
    {
        fetch("http://localhost:3000/restaurant").then((resp) => {
            resp.json().then((result) => {
                this.setState({ list: result });
            });
        });
    }
    delete(id)
    {
        fetch('http://localhost:3000/restaurant/'+id,{  method:"DELETE"}).then((result)=> {
            result.json().then((resp)=>{
                alert("Restaurant has been Deleted ")
                this.getData();
            })
        })
    } 
    render() {
        return (
            <div>
                <NavBarMenu/>  
                <h1>Restaurant List</h1>
                {this.state.list ? (
                    <Container>
                        <Table striped bordered hover>
                        
                            <thead>
                             <tr>
                               <th>#</th>
                               <th>Resto Name</th>
                               <th>Location</th>
                               <th>Resto Rating</th>
                               <th>Operation</th>
                             </tr>
                           </thead>
                           <tbody>
                                {
                                this.state.list.map((item, i) => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.address}</td>
                                        <td>{item.rating}</td>
                                        <td><Link to={"/update/"+item.id}><FontAwesomeIcon icon={faEdit} color="orange"/></Link><span>     </span>
                                           <span onClick={()=>{this.delete(item.id)}}> <FontAwesomeIcon icon={faTrash} color="red"/></span>
                                        </td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </Table>
                    </Container>
                ) : (
                    <p>Please wait...</p>
                )}
            </div>
        );
    }
}
