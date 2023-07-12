"use client"
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
// import getImageNames from "../../getImages"

interface PageProps {
    slug: string[];
    name: string
    chap: string
}
export default async function Content({ slug, name, chap }: PageProps) {
    // const imageNames: string[] = getImageNames(slug);

    return <>

        {/* {console.log(slug)} */}
        {slug && slug.length > 1 ?
            <>
                {slug.map((imageName) => {
                    // console.log(imageName)
                    return <>
                        {/* <div>from content</div> */}
                        <div className='d-flex justify-content-center' key={imageName}>
                            <img src={`/${name}/${chap}/${imageName}`} alt={imageName} style={{ width: "700px" }} />
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