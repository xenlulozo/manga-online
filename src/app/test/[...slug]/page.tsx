// import 'bootstrap/dist/css/bootstrap.css';
// import React from 'react';
// import getImageNames from "../../getImages"
// import Content from './content';
// import NextPrev from './fromClient';
// import getPublicDirectories from '@/app/countDirectories';
// import Base from './base';
// interface ComponentAProps {
//   index: number
// }
// export default async function Page({ params }: { params: { slug: string } }) {
//   // const publicDirectories = getPublicDirectories(params.slug[0
//   // ]);
//   // const imageNames: string[] = getImageNames(params.slug);

//   return <>
//     {/* {console.log(params.slug)} */}
//     <div className="container">

//       <div className='justify-content-center'>

//         {/* <Content slug={imageNames} name={params.slug[0]} chap={params.slug[1]} /> */}
//         <Base slug={params.slug} />
//       </div>

//       {/* <NextPrev slug={params.slug} indexSV={publicDirectories.length} /> */}



//     </div>
//   </>
// }
"use client"
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import getImageNames from "../../getImages"
import Image from 'next/image';
import getPublicDirectories from '@/app/countDirectories';
import Content from '@/app/watch/[...slug]/content';
import { data } from 'autoprefixer';

interface ComponentAProps {
  index: number
}
export default function Base({ params }: { params: { slug: string } }) {
  const [imageNames, setImageNames] = useState([]);

  useEffect(() => {
    // console.log(slug && slug.slug)
    const fetchImageNames = async () => {

      try {
        const response = await fetch(`https://manga-online-six.vercel.app/api/getImage?name=${params.slug[0]}&chap=${params.slug[1]}`);

        const data = await response.json();
        console.log(data)

        setImageNames(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImageNames();
  }, []);
  return <>
    <Content slug={imageNames} name={params.slug[0]} chap={params.slug[1]} />
  </>
}

