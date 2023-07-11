
import Image from 'next/image'
import Link from 'next/link'
import path from 'path';
import getPublicDirectorie from './countManga';
import getPublicDirectories from './countDirectories';
import 'bootstrap/dist/css/bootstrap.css';
import ListManga from './watch/[slug]/listManga';

import React, { useEffect, useState } from "react"

export default function Home() {
  const publicDirectories = getPublicDirectorie();
  interface DataItem {
    [key: string]: any;
  }

  const data: DataItem[] = [];
  publicDirectories.forEach((item) => {
    const dynamicKey: string = item;
    const obj: DataItem = {};
    obj["name"] = dynamicKey
    obj["quantity"] = getPublicDirectories(item).length;
    // obj[dynamicKey] = getPublicDirectories(item).length;
    data.push(obj);
  });
  return (
    <>
      <div className='container'>
        <ListManga data={data} />
      </div>

    </>
  )
}
