import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import getImageNames from "../../getImages"
import Content from './content';
import NextPrev from './fromClient';
import getPublicDirectories from '@/app/countDirectories';

interface ComponentAProps {
  index: number
}
export default function Page({ params }: { params: { slug: string, index: Number } }) {
  const publicDirectories = getPublicDirectories(params.slug[0]);
  const imageNames: string[] = getImageNames(params.slug);

  return <>
    {/* {console.log(typeof params)} */}
    <div className="container">

      <div className='justify-content-center'>

        <Content slug={params.slug} />

      </div>

      <NextPrev slug={params.slug} indexSV={publicDirectories.length} />



    </div>
  </>
}
