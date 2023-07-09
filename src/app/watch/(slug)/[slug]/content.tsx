import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import getImageNames from "../../../getImages"

interface PageProps {
    slug: string;
}
export default function Content({ slug }: PageProps) {
    const imageNames: string[] = getImageNames(slug);
    return <>

        {imageNames.map((imageName) => (

            <div className='d-flex justify-content-center' key={imageName}>
                <img src={`/oh_shi_no_ko/${slug}/${imageName}`} alt={imageName} style={{ width: "700px" }} />
            </div>
        ))}

    </>
}