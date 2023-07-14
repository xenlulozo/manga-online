
"use client"
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import getImageNames from "../../getImages"
import Image from 'next/image';
import getPublicDirectories from '@/app/countDirectories';
import Content from '@/component/content';
import { data } from 'autoprefixer';
import NextPrev from '@/component/fromClient';
import "./menu.scss";
import Link from 'next/link';
import { watch } from 'fs';
interface ComponentAProps {
  index: number
}
export default function Base({ params }: { params: { slug: string } }) {
  const [imageNames, setImageNames] = useState([]);
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {

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
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      setIsFixed(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const replaceString = (inputString: string): string => {

    const modifiedString = inputString.replace("chap_", "");

    return modifiedString;
  }
  return <>
    <div className='body'>
      <div className='container'>
        {params.slug.length === 2 ? <>
          <div className='header-container'>
            <h1><Link href={`/watch/${params.slug[0]}`}>{params.slug[0].replaceAll("_", " ")} </Link> - Chapter {Number(replaceString(params.slug[1]))}</h1>
            <div className='reding-control py-3'>
              <div className='notice'>
                <em>Sử dụng mũi tên trái (←) hoặc phải (→) để chuyển chapter</em>
              </div>
              <div className={isFixed ? 'fixed-component' : 'menu pt-3'}>
                <NextPrev name={params.slug[0]} chap={params.slug[1]} />
              </div>
            </div>
          </div>
          <div >
            <Content slug={imageNames} name={params.slug[0]} chap={params.slug[1]} />
          </div>
        </> : <></>}

      </div>
    </div>

  </>
}

