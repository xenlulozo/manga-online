'use client'
import { redirect } from 'next/navigation'
import Link from "next/link"
import React from "react"
import "./main.scss"
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import Image from 'next/image'
interface props {

    data: any
}

export default function ListManga({ data }: props) {
    const { push } = useRouter();
    const toContent = (item: string) => {

        push(`/watch/${item}`);
    }
    return <>

        <div className='d-flex col-12 flex-wrap'>
            {data &&
                data.map((item: any, index: any) => {

                    return (
                        <>
                            <div className='col-xl-4  col-12 my-3' key={index}>


                                <div className=' d-flex'>
                                    <div className='image-content' onClick={() => toContent(item.name)}>
                                        <div className='quantity-chapter'>
                                            <span>   {item.quantity} / ? </span>
                                        </div>
                                        <Image src={`/${item.name}/avatar.jpg`} height={120} width={100} alt='poster'></Image>
                                    </div>
                                    <div className='name-manga mx-2'>
                                        <h1 className='name' onClick={() => toContent(item.name)}>{item.name.replaceAll("_", " ")}</h1>

                                        <div className='col'>
                                            {Array.from({ length: 2 }).map((_, i) => {
                                                const chapterNumber = item.quantity - i;
                                                if (chapterNumber > 0) {
                                                    return <>
                                                        <div className='new-chappter my-2 px-2 '>
                                                            {/* <div> */}
                                                            <span key={i}>Chapter {chapterNumber}</span>

                                                            {/* </div> */}
                                                        </div>
                                                        <br />
                                                    </>
                                                }
                                                return null;
                                            })}

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </>

                    );
                })}
        </div>

    </>
}