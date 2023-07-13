import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import getImageNames from "../../getImages"
import Content from './content';
import NextPrev from './fromClient';
import getPublicDirectories from '@/app/countDirectories';
import Base from './base';
interface ComponentAProps {
  index: number
}
export default async function Page({ params }: { params: { slug: string } }) {
  // const publicDirectories = getPublicDirectories(params.slug[0
  // ]);
  // const imageNames: string[] = getImageNames(params.slug);

  return <>
    {/* {console.log(params.slug)} */}
    <div className="container">

      <div className='justify-content-center'>

        {/* <Content slug={imageNames} name={params.slug[0]} chap={params.slug[1]} /> */}
        <Base slug={params.slug} />
      </div>

      {/* <NextPrev slug={params.slug} indexSV={publicDirectories.length} /> */}



    </div>
  </>
}
