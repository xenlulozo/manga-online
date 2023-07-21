
import Image from 'next/image'
import Link from 'next/link'
import path from 'path';
import getPublicDirectories from '../../countDirectories';
import 'bootstrap/dist/css/bootstrap.css';
import "./page.scss"
import Layout from '@/component/layout';
import React, { useEffect, useState } from "react"
import DetailStory from '@/component/detailStory';
import Star from '@/component/star';
import Comment from '@/component/comment';

export default function Home({ params }: { params: { slug: string } }) {

    function extractChapterNumber(chapterName: string): number | null {
        const match = chapterName.match(/\d+/);
        return match ? parseInt(match[0]) : null;
    }

    function customSort(chapters: string[]): string[] {
        return chapters.sort((a, b) => {
            const numA = extractChapterNumber(a);
            const numB = extractChapterNumber(b);

            if (numA === null || numB === null) {
                return 0;
            }

            return numA - numB;
        });
    }
    const publicDirectories = customSort(getPublicDirectories(params.slug));
    return (

        <>
            {console.log(publicDirectories)}

            <Layout>
                <div className='container'>
                    <div className='content-page mx-xl-5 my-3'>
                        <h1 className='text-center '>{params.slug.replaceAll("_", " ").toUpperCase()}</h1>
                        <div className='section d-flex col-12'>
                            <div className='poster col-xl-3 col-5 '>
                                <img src={`/${params.slug}/avatar.jpg`}></img>
                            </div>
                            <div className='chapter mx-3 col-xl-8 col-6'>
                                <div>
                                    <DetailStory name={params.slug} />
                                    <Star name={params.slug} />
                                </div>


                            </div>

                        </div>
                        <div className='row my-2' >
                            <div className='ChapterfirstOrLast text-center'>
                                <button className='btn btn-success mx-2 my-2'>
                                    <Link style={{ color: "white !important", textDecoration: "none" }} href={`/test/${params.slug}/${encodeURIComponent(
                                        publicDirectories[0].trim())}`}>
                                        Read First
                                    </Link>
                                </button>
                                <button className='btn btn-success mx-2 my-2'>
                                    <Link style={{ color: "white !important", textDecoration: "none" }} href={`/test/${params.slug}/${encodeURIComponent(publicDirectories[publicDirectories.length - 1].trim())}`}>
                                        Read Last
                                    </Link>

                                </button>

                            </div>
                        </div>

                        <div className='row'>
                            <h2 className='my-3'> All Chapters</h2>
                            <div className='lits-chapter d-flex flex-wrap col-12'>
                                {publicDirectories &&
                                    publicDirectories.map((item, index) => {
                                        return (
                                            <>

                                                <div key={index} className=' my-1 col-xl-4 col-6 text-xl-center'>


                                                    <Link href={`/test/${params.slug}/${encodeURIComponent(item.trim())}`}>
                                                        Chapter {item.replaceAll("chap_", " ")}
                                                    </Link>
                                                </div>


                                            </>

                                        );
                                    })}
                            </div>
                        </div>

                    </div>


                </div>

            </Layout>

        </>
    )
}
