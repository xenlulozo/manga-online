
"use client"
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import getImageNames from "../../getImages"
import Image from 'next/image';
import getPublicDirectories from '@/app/countDirectories';
import Content from '@/component/content';
import { data } from 'autoprefixer';
import NextPrev from '@/component/fromClient';



interface ComponentAProps {
  index: number
}
export default function Base({ params }: { params: { slug: string } }) {
  const [imageNames, setImageNames] = useState([]);

  useEffect(() => {
    // console.log(slug && slug.slug)
    const fetchImageNames = async () => {

      try {
        const response = await fetch(`https://manga-online-delta.vercel.app/api/getImage?name=${params.slug[0]}&chap=${params.slug[1]}`);

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
    <div className='menu' style={{ position: "fixed", top: 0, zIndex: 9999 }}>
      <Content slug={imageNames} name={params.slug[0]} chap={params.slug[1]} />
    </div>
    <NextPrev name={params.slug[0]} chap={params.slug[1]} />
  </>
}

