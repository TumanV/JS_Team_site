import React, {Component} from 'react';

import {Navbar, Nav, FormControl, Container, Form, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

import logo from './JSlogo.jpg'

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
          <Container>
            {/*переход на главную страницу значка*/}
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="35"
                width="35"
                className="d-inline-block align-center"
                alt="Logo"
              /> Learn with Javascript
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/" draggable="false">
                        Home
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/about" exact="true" draggable="false">
                        About
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/contacts" exact="true" draggable="false">
                        Contacts
                    </Nav.Link>
                </Nav>
              <Form className="d-flex">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="me-sm-2"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

// export default Header;
