
import Image from 'next/image'
import Link from 'next/link'
import path from 'path';
import getPublicDirectories from '../../countDirectories';

import React, { useEffect, useState } from "react"

export default function Home({ params }: { params: { slug: string } }) {
    const publicDirectories = getPublicDirectories(params.slug);
    return (
        <>

            {publicDirectories &&
                publicDirectories.map((item, index) => {
                    return (
                        <>
                            <div key={item}>
                                <Link href={`/watch/${params.slug}/${encodeURIComponent(item.trim())}`}>
                                    {item.replaceAll("_", " ")}
                                </Link>
                            </div>
                        </>

                    );
                })}
        </>
    )
}
