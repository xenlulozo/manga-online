
import Image from 'next/image'
import Link from 'next/link'
import path from 'path';
import getPublicDirectorie from './countManga';
import getPublicDirectories from './countDirectories';
import 'bootstrap/dist/css/bootstrap.css';
import ListManga from './watch/listManga';

import React, { useEffect, useState } from "react"

export default function Home() {
  const publicDirectories = getPublicDirectorie();
  const publicDirectorie = getPublicDirectories("oh shi no ko").length;

  return (
    <>
      <div className='container'>
        <ListManga item={publicDirectories} quantity={publicDirectorie} />
      </div>

    </>
  )
}
