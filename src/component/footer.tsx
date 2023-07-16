
import Image from 'next/image'
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import "./footer.scss"


export default function Footer() {

    return (
        <>
            <div className='container-footer mt-5 d-flex justify-content-center'>
                <div className='px-3 items'>
                    <Link className='item-footer' href='/'>HOME</Link>

                </div>
                <div className='px-3 items  '>

                    <Link className='item-footer' href='mailto:baymaxvipx@gmail.com'>Contact Me</Link>
                </div>
                <div className='px-3 items'>

                    <Link className='item-footer' href='/'>Privacy Policy</Link>

                </div>
            </div>
            <p className='text-center'>My website is made for educational use with no intention of profiteering or nefarious</p>
            <p className='text-center'> Disclaimer regarding legal or copyright issues</p>

        </>
    )
}
