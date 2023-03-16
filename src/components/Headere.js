import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";

function Headere() {
    return (
        <Navbar bg="light" className='nav navbar fixed-top' expand="lg">
            <Container fluid>
                <Link className='nav navbar-brand' to="/"   >Navbar scroll</Link>
                <Navbar.Toggle aria-controls="navbarScroll" className='bg-dark' />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className='nav nav-link'  to="/about">About</Link>
                        <Link  className='nav nav-link' to="/contacts">Contact</Link>


                    </Nav>


                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Headere;