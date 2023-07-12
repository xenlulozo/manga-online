import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import getImageNames from "../../getImages"
import getPublicDirectories from '@/app/countDirectories';

interface ComponentAProps {
  index: number
}
export default function Page({ params }: { params: { slug: string, index: Number } }) {
  const publicDirectories = getPublicDirectories(params.slug[0
  ]);
  const imageNames: string[] = getImageNames(params.slug);

  return <>
    {/* {console.log("go")} */}
    <div className="container">

      <div className='justify-content-center'>
        from server
        {params.slug}
        <img src='/oh_shi_no_ko/chap_1/001.jpg'></img>

        {/* <Content slug={imageNames} name={params.slug[0]} chap={params.slug[1]} /> */}

      </div>

      {/* <NextPrev slug={params.slug} indexSV={publicDirectories.length} /> */}



    </div>
  </>
}
