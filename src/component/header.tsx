"use client"
import Image from 'next/image'

import 'bootstrap/dist/css/bootstrap.css';
import "./header.scss"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {

    return (
        <>
            <div className='container-header'>


                <Navbar bg="light" data-bs-theme="light">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>

        </>
    )
}
