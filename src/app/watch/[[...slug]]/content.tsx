import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import getImageNames from "../../getImages"

interface PageProps {
    slug: string;
}
export default function Content({ slug }: PageProps) {
    const imageNames: string[] = getImageNames(slug);

    return <>
        {slug && slug.length > 1 ?
            <>   {imageNames.map((imageName) => (

                <div className='d-flex justify-content-center' key={imageName}>
                    <img src={`/${slug[0]}/${slug[1]}/${imageName}`} alt={imageName} style={{ width: "700px" }} />
                </div>
            ))}</>
            :
            <></>
        }


    </>
}