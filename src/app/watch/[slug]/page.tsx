
import Image from 'next/image'
import Link from 'next/link'
import path from 'path';
import getPublicDirectories from '../../countDirectories';
import 'bootstrap/dist/css/bootstrap.css';
import "./page.scss"

import React, { useEffect, useState } from "react"

export default function Home({ params }: { params: { slug: string } }) {
    const publicDirectories = getPublicDirectories(params.slug);
    return (

        <>

            <div className='container'>
                <div className='content-page mx-xl-5'>
                    <h1 className='text-center '>{params.slug.replaceAll("_", " ")}</h1>
                    <div className='section d-flex col-12'>
                        <div className='poster col-xl-3 col-5 '>
                            <img src={`/${params.slug}/avatar.jpg`}></img>
                        </div>
                        <div className='chapter mx-3 col-xl-8 col-6'>
                            <div className='ChapterfirstOrLast'>
                                <button className='btn btn-success mx-2 my-2'>
                                    <Link style={{ color: "white !important", textDecoration: "none" }} href={`/test/${params.slug}/${encodeURIComponent(
                                        publicDirectories[0].trim())}`}>
                                        Read First
                                    </Link>
                                </button>
                                <button className='btn btn-success mx-2 my-2'>
                                    <Link style={{ color: "white !important", textDecoration: "none" }} href={`/test/${params.slug}/${encodeURIComponent(publicDirectories[publicDirectories.length - 1].trim())}`}>
                                        Read Last
                                    </Link>

                                </button>

                            </div>
                            <div>
                                <h2 className='my-3'> All Chapters</h2>
                                <div className='lits-chapter d-flex flex-wrap col-12'>
                                    {publicDirectories &&
                                        publicDirectories.map((item, index) => {
                                            return (
                                                <>

                                                    <div key={index} className='mx-1 my-1 col-xl-3 col-12'>
                                                        <Link href={`/test/${params.slug}/${encodeURIComponent(item.trim())}`}>
                                                            Chapter {item.replaceAll("chap_", " ")}
                                                        </Link>
                                                    </div>


                                                </>

                                            );
                                        })}
                                </div>
                            </div>

                        </div>
                    </div>


                </div>

            </div>

        </>
    )
}
