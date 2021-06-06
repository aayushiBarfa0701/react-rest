import React, { Component } from 'react'
import {Table,Form,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash} from '@fortawesome/free-solid-svg-icons'
import NavBarMenu from "./NavBarMenu"

export default class RestaurantSearch extends Component {
    constructor()
    {
        super();
        this.state={
            searchData: null,
            noData:false,
            lastSearch:""
        }
    }
    search(key)
    {
        this.setState({lastSearch:key})
        fetch("http://localhost:3000/restaurant?q="+key).then( (resp)=>{
            resp.json().then((result)=>{
                console.warn("search Result",result)
                if(result.length>0)
                {
                    this.setState({noData: false,searchData: result})
                }
                else
                {
                    this.setState({noData: true, searchData: null})
                }
                
            })
        })
    }
    delete(id)
    {
        fetch('http://localhost:3000/restaurant/'+id,{  method:"DELETE"}).then((result)=> {
            result.json().then((resp)=>{
                alert("Restaurant has been Deleted ")
                this.search(this.state.lastSearch);
            })
        })
    }
    render() {
        return (
            <Container>
                <NavBarMenu/>  
                <h1>Restaurant Search</h1>
                <Form.Control type="text"  onChange={(event)=>{this.search(event.target.value)}}  placeholder="Search Restaurant" />
                
                <div>
                    {
                        this.state.searchData?
                        <div>
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
                                    this.state.searchData.map((item)=>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.address}</td>
                                        <td>{item.rating}</td>
                                        <td><Link to={"/update/"+item.id}><FontAwesomeIcon icon={faEdit} color="orange"/></Link><span>     </span>
                                        <span onClick={()=>{this.delete(item.id)}}> <FontAwesomeIcon icon={faTrash} color="red"/></span>
                                        </td>
                                    </tr>
                                    )
                                }
                                </tbody>
                            </Table>
                        </div>
                        :
                        ""
                    }
                    {
                        this.state.noData ? <h4>No data Found</h4>: null
                    }
                </div>
            </Container>
        )
    }
}
