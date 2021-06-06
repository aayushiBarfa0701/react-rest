import React, { Component } from 'react';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faList,faHome,faPlus,faSearch,faUser } from '@fortawesome/free-solid-svg-icons'
import {Navbar, Nav,Container} from 'react-bootstrap'

import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

class NavBarMenu extends Component {
    render() {
        return (
            <Container>
                <Navbar bg="light" expand="lg" >
                    <Navbar.Brand href="#home">Resto</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link ><Link  style={{ textDecoration: 'none' }} to="/">     <FontAwesomeIcon icon={faHome}/>  Home   </Link></Nav.Link>
                            <Nav.Link ><Link  style={{ textDecoration: 'none' }} to="/list">  <FontAwesomeIcon icon={faList}/>  List   </Link></Nav.Link>
                            <Nav.Link ><Link  style={{ textDecoration: 'none' }} to="/create"><FontAwesomeIcon icon={faPlus}/> Create  </Link></Nav.Link>
                            <Nav.Link ><Link  style={{ textDecoration: 'none' }} to="/search"><FontAwesomeIcon icon={faSearch}/> Search</Link></Nav.Link>
                            {
                                localStorage.getItem('login')?
                                <Nav.Link ><Link  style={{ textDecoration: 'none' }} to="/logout"><FontAwesomeIcon icon={faUser}/> Logout</Link></Nav.Link>
                                :
                                <Nav.Link ><Link  style={{ textDecoration: 'none' }} to="/login"><FontAwesomeIcon icon={faUser}/> Login</Link></Nav.Link>
                            } 
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        );
    }
}

export default NavBarMenu;