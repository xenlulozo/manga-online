'use client'
import { redirect } from 'next/navigation'
import Link from "next/link"
import React from "react"

import { useRouter, usePathname, useSearchParams } from 'next/navigation'

interface props {

    data: any
}

export default function ListManga({ data }: props) {
    const { push } = useRouter();
    const toContent = (item: string) => {

        push(`/watch/${item}`);
    }
    return <>
        {/* {console.log(data)}
        
        */}

        {data &&
            data.map((item: any, index: any) => {
                // console.log(item)
                return (
                    <>
                        <div className='col-12 mx-5 mt-5'>

                            <div className='col-3' onClick={() => toContent(item.name)}>
                                <div className='imgContent'>
                                    <span>[{item.quantity}/?]</span>
                                    <img src={`${item.name}/avatar.jpg`}></img>
                                </div>

                                <h1>{item.name.replaceAll("_", " ")}</h1>
                            </div>
                        </div>

                    </>

                );
            })}
    </>
}