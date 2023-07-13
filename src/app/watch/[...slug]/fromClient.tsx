"use client"

import React, { useEffect, useState } from "react";
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { data } from 'autoprefixer';


interface NextPrevProps {
    name: any;
    chap: any
    // indexSV: number;
}



export default function NextPrev({ name, chap }: NextPrevProps) {
    const [index, setIndex] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [data, setData] = useState([])
    const { push } = useRouter();

    // const router = useRouter();
    useEffect(() => {

        const fetchImageNames = async () => {

            try {
                const response = await fetch(`http://localhost:3000/api/getCountToRedirect?name=${name}`);
                const data = await response.json();

                setData(data);
                setIndex(Number(data.length))
                setCurrentIndex(Number(replaceString(chap)))

            } catch (error) {
                console.error(error);
            }
        };

        fetchImageNames()
    }, [])
    // if (slug.length > 1)
    //     setIndex(Number(replaceString(slug[1])))

    const replaceString = (inputString: string): string => {

        const modifiedString = inputString.replace("chap_", "");

        return modifiedString;
    }
    const handelNext = () => {
        if (currentIndex < index)
            setIndex(() => currentIndex + 1)

        push(`chap_${currentIndex + 1}`);

    }
    const handelPrev = () => {
        if (currentIndex !== 1 && currentIndex > 0)
            setIndex(() => currentIndex - 1)

        push(`chap_${currentIndex - 1}`);

    }
    return (<>

        <div>
            <div className="d-flex justify-content-center mt-4">

                {currentIndex !== 1 ?
                    <button className="btn btn-primary mr-2" onClick={handelPrev}>
                        <span> Prev Chapter</span>
                    </button>
                    : <>
                        <button className="btn btn-primary mr-2"    >

                            <span>Prev Chapter</span>
                        </button>

                    </>
                }


                {currentIndex < index ?

                    <button className="btn btn-primary" onClick={handelNext}>

                        <span>Next Chapter</span>

                    </button>

                    :
                    <button className="btn btn-primary" >

                        <> Next Chapter</>

                    </button>

                }

            </div>
        </div>
    </>)
}