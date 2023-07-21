
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
import Layout from '@/component/layout';
import Link from 'next/link';
import { watch } from 'fs';
import Comment from '@/component/comment';
interface ComponentAProps {
  index: number
}
export default function Base({ params }: { params: { slug: string } }) {
  const [imageNames, setImageNames] = useState([]);
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {

    const fetchImageNames = async () => {

      try {
        const response = await fetch(`/api/getImage?name=${params.slug[0]}&chap=${params.slug[1]}`);

        const data = await response.json();
        // console.log(data)

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
    <Layout>


      <div className='body'>
        <div className='container'>

          {params.slug.length === 2 ? <>
            <div className='header-container'>
              <h1><Link href={`/watch/${params.slug[0]}`}>{params.slug[0].replaceAll("_", " ")} </Link> - Chapter {Number(replaceString(params.slug[1]))}</h1>
              <div className='reding-control py-3'>
                <div className='notice'>
                  <em>Use the left (←) or right (→) arrows to switch chapters</em>
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
          <Comment name={params.slug[0]} chap={params.slug[1]} />

        </div>
      </div>
    </Layout>
  </>
}

