
"use client"
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import getImageNames from "../../getImages"
import Image from 'next/image';
import getPublicDirectories from '@/app/countDirectories';
import Content from '@/app/watch/[...slug]/content';
import { data } from 'autoprefixer';
import NextPrev from '@/app/watch/[...slug]/fromClient';

interface ComponentAProps {
  index: number
}
export default function Base({ params }: { params: { slug: string } }) {
  const [imageNames, setImageNames] = useState([]);

  useEffect(() => {
    // console.log(slug && slug.slug)
    const fetchImageNames = async () => {

      try {
        const response = await fetch(`http://localhost:3000/api/getImage?name=${params.slug[0]}&chap=${params.slug[1]}`);

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
    <NextPrev name={params.slug[0]} chap={params.slug[1]} />
  </>
}

