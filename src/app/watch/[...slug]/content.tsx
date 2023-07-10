"use client"
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
// import getImageNames from "../../getImages"

interface PageProps {
    slug: string[];
    name: string
    chap: string
}
export default function Content({ slug, name, chap }: PageProps) {
    // const imageNames: string[] = getImageNames(slug);

    return <>

        {/* {console.log(slug)} */}
        {slug && slug.length > 1 ?
            <>
                {slug.map((imageName) => (

                    <div className='d-flex justify-content-center' key={imageName}>
                        <img src={`/${name}/${chap}/${imageName}`} alt={imageName} style={{ width: "700px" }} />
                    </div>
                ))}
            </>
            :
            <></>
        }


    </>
}