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

                <Image src='/logo/logo.png' width={200} height={100} alt='err' ></Image>

            </div>

        </>
    )
}
