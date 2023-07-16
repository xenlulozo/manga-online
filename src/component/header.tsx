"use client"
import Image from 'next/image'

import 'bootstrap/dist/css/bootstrap.css';
import "./header.scss"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { connectDB, connection } from '@/model/connectDB';
import { useEffect, useState, useContext } from 'react';
import Login from './login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { CounterContext } from '../context/context';



export default function Header() {
    const [isLogin, setIsLogin] = useState(false)
    const { state, dispatch } = useContext(CounterContext);
    useEffect(() => {
        const checkCookie = async () => {
            const res = await axios.get("https://manga-online-delta.vercel.app/api/auth/checktoken")
            const result = res.data
            // console.log(res.data.token)
            if (result.token) {
                setIsLogin(true)
            }
            else {
                setIsLogin(false)
            }
        }
        checkCookie()
    }, [])
    return (
        <>
            {/* <div style={{ marginBottom: "4rem", textAlign: "center" }}>
                <h4 style={{ marginBottom: 16 }}>{state.count}</h4>
                <button onClick={() => dispatch({ type: "ADD" })}>increment</button>
                <button
                    onClick={() => dispatch({ type: "DECREMENT" })}
                    style={{ marginInline: 16 }}
                >
                    decrement
                </button>
                <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
            </div> */}
            {/* <MyContextProvider username='test'> */}
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

                                        {isLogin ? <>
                                            <Nav.Link className='me-4 items-menu' href="/logout"><FontAwesomeIcon icon={faRightFromBracket} /></Nav.Link>

                                        </> : <>
                                            <Nav.Link className='me-4 items-menu' href="/login">LOGIN</Nav.Link>

                                        </>}

                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>

                    {/* <Login /> */}
                </div>

            </div>

            {/* </MyContextProvider> */}

        </>
    )
}
