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
export default function Base(slug: any) {
  const [imageNames, setImageNames] = useState([]);

  useEffect(() => {
    // console.log(slug && slug.slug)
    const fetchImageNames = async () => {

      try {
        const response = await fetch(`https://manga-online-six.vercel.app/api/getImage?name=${slug.slug[0]}&chap=${slug.slug[1]}`);

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
    <Content slug={imageNames} name={slug.slug[0]} chap={slug.slug[1]} />
  </>
}
