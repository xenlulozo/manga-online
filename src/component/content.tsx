"use client"
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Image from 'next/image'
// import getImageNames from "../../getImages"

interface PageProps {
    slug: string[];
    name: string
    chap: string
}
export default function Content({ slug, name, chap }: PageProps) {
    return <>
        {console.log(slug)}
        {slug && slug.length > 1 ?
            <>
                {slug.map((imageName) => {

                    return <>
                        <div className='d-flex justify-content-center' key={imageName}>
                            <Image src={`/${name}/${chap}/${imageName}`} alt={imageName} width={700} height={10000} />
                        </div>
                    </>
                }

                )}
            </>
            :
            <></>
        }
    </>
}