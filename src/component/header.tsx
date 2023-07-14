"use client"
import Image from 'next/image'

import 'bootstrap/dist/css/bootstrap.css';
import "./header.scss"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Header() {

    return (
        <>
            <div className='container-header'>

                <div className='d-flex logo'>

                    <div>
                        <Navbar expand="lg" className="bg-body-tertiary">
                            <Container>
                                <Navbar.Brand href="/" className='mx-xl-5 me-sm-5'>
                                    <Image className='mx-xl-5' src='/logo/new-logo-save.png' width={200} height={70} alt='err' ></Image>
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link className='me-4 items-menu' href="/">HOME</Nav.Link>
                                        <Nav.Link className='me-4 items-menu' href="mailto:baymaxvipx@gmail.com">CONTACT</Nav.Link>

                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>


                </div>

            </div>

        </>
    )
}
