
import Image from 'next/image'
import Link from 'next/link'
import path from 'path';
import getPublicDirectories from '../../countDirectories';

import React, { useEffect, useState } from "react"

export default function Home({ params }: { params: { slug: string } }) {
    const publicDirectories = getPublicDirectories(params.slug);
    return (
        <>
            <h1>{params.slug.replaceAll("_", " ")}</h1>
            {publicDirectories &&
                publicDirectories.map((item, index) => {
                    return (
                        <>
                            <div key={index}>
                                <Link href={`/watch/${params.slug}/${encodeURIComponent(item.trim())}`}>
                                    {item.replaceAll("_", " ")}
                                </Link>
                            </div>
                        </>

                    );
                })}
            {/* <img src='oh_shi_no_ko/chap_1/001.jpg'></img> */}
        </>
    )
}
