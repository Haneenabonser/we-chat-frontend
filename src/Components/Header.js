import { Link } from "react-router-dom";
import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';

export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">We-Chat</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link>
                            <Link to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                            <Link to="/login">Log in</Link>
                            </Nav.Link>
                            <Nav.Link>
                            <Link to="/register">Register</Link>
                            </Nav.Link>
                        </Nav>
    
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;


