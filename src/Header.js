import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap';
import { BrowserRouter, Link } from 'react-router-dom';
class Header extends React.Component {

    render() {
        // const options = [
        //     {name: 'Swedish', value: 'sv'},
        //     {name: 'English', value: 'en'},
        //     {
        //         type: 'group',
        //         name: 'Group name',
        //         items: [
        //             {name: 'Spanish', value: 'es'},
        // //         ]
        //     },
        // ];
        return <div>
            
            <ReactBootstrap.Navbar bg="light" expand="lg">
                <ReactBootstrap.Container fluid>
                    <ReactBootstrap.Navbar.Brand href="#">Twitter</ReactBootstrap.Navbar.Brand>
                    <ReactBootstrap.Navbar.Toggle aria-controls="navbarScroll" />
                    <ReactBootstrap.Navbar.Collapse id="navbarScroll">
                        <ReactBootstrap.Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <ReactBootstrap.Nav.Link >Register</ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link href="#action2">Link</ReactBootstrap.Nav.Link>
                            <ReactBootstrap.NavDropdown title="Link" id="navbarScrollingDropdown">
                                <ReactBootstrap.NavDropdown.Item href="#action3">Action</ReactBootstrap.NavDropdown.Item>
                                <ReactBootstrap.NavDropdown.Item href="#action4">Another action</ReactBootstrap.NavDropdown.Item>
                                <ReactBootstrap.NavDropdown.Divider />
                                <ReactBootstrap.NavDropdown.Item href="#action5">
                                    Something else here
                                </ReactBootstrap.NavDropdown.Item>
                            </ReactBootstrap.NavDropdown>
                            <ReactBootstrap.Nav.Link href="#" disabled>
                                Link
                            </ReactBootstrap.Nav.Link>
                        </ReactBootstrap.Nav>
                        <ReactBootstrap.Form className="d-flex">
                            <ReactBootstrap.FormControl
                                type="seReactBootstraparch"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <ReactBootstrap.Button variant="outline-success">Search</ReactBootstrap.Button>
                        </ReactBootstrap.Form>
                    </ReactBootstrap.Navbar.Collapse>
                </ReactBootstrap.Container>
            </ReactBootstrap.Navbar>

        </div>;
    }
}

export default Header;