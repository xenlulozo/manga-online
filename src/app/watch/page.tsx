
import Image from 'next/image'
import Link from 'next/link'
import path from 'path';
import getPublicDirectories from '../countDirectories';

import React, { useEffect, useState } from "react"

export default function Home() {
    const publicDirectories = getPublicDirectories("oh shi no ko");

    return (
        <>

            {publicDirectories &&
                publicDirectories.map((item, index) => {
                    return (
                        <>
                            <div key={item}>
                                <Link href={`http://localhost:3000/watch/${encodeURIComponent(item.trim())}`}>
                                    {item.replaceAll("_", " ")}
                                </Link>
                            </div>
                        </>

                    );
                })}


        </>
    )
}
