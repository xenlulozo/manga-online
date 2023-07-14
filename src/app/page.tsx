
import Image from 'next/image'
import Link from 'next/link'
import path from 'path';
import getPublicDirectorie from './countManga';
import getPublicDirectories from './countDirectories';
import 'bootstrap/dist/css/bootstrap.css';
import ListManga from './watch/[slug]/listManga';
import RootLayout from "./layout"
import React, { useEffect, useState } from "react"
import Layout from '@/component/layout';

export default function Home() {
  const publicDirectories = getPublicDirectorie();
  interface DataItem {
    [key: string]: any;
  }

  const data: DataItem[] = [];
  publicDirectories.forEach((item) => {
    if (item != "logo") {
      const dynamicKey: string = item;
      const obj: DataItem = {};
      obj["name"] = dynamicKey
      obj["quantity"] = getPublicDirectories(item).length;
      data.push(obj);
    }

  });
  return (
    <>
      <Layout >
        <div className='container'>
          <div className=' border-bottom mt-5'>
            <h1>READ MANGA - LATEST UPDATES</h1>
          </div>
          <ListManga data={data} />
        </div>
      </Layout>
    </>
  )
}

