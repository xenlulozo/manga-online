'use client'
import { redirect } from 'next/navigation'
import Link from "next/link"
import React from "react"

import { useRouter, usePathname, useSearchParams } from 'next/navigation'

interface props {
    item: string[]
    quantity: number
}
export default function ListManga({ item, quantity }: props) {
    const { push } = useRouter();
    const toContent = () => {

        push('/watch');
    }
    return <>
        {item &&
            item.map((item, index) => {

                return (
                    <>
                        <div className='col-12 mx-5 mt-5'>

                            <div className='col-3' onClick={toContent}>
                                <div className='imgContent'>
                                    <span>[{quantity}/?]</span>
                                    <img src={`${item}/avatar.jpg`}></img>
                                </div>

                                <h1>{item.replaceAll("_", " ")}</h1>
                            </div>
                        </div>

                    </>

                );
            })}
    </>
}