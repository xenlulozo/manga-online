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
export default function Page({ params }: { params: { slug: string, index: Number } }) {
  const [imageNames, setImageNames] = useState([]);

  useEffect(() => {
    const fetchImageNames = async () => {
      try {
        const response = await fetch(`https://manga-online-six.vercel.app//api/getImage?name=${params.slug[0]}&chap=${params.slug[1]}`);

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

    <div className="container">

      <div className='justify-content-center'>

        {/* {slug.map((imageName) => {
                    return <>
                        <div className='d-flex justify-content-center' key={imageName}>
                            <Image src={`/${name}/${chap}/${imageName}`} alt={imageName} width={700} height={1000} />
                        </div>
                    </>
                }

                )} */}
        <Content slug={imageNames} name="oh_shi_no_ko" chap="chap_2" />

      </div>




    </div>
  </>
}
