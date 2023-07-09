"use client"

import React, { useEffect, useState } from "react";
import { redirect } from 'next/navigation'
import Link from 'next/link'
interface NextPrevProps {
    slug: string;
    indexSV: number;
}



export default function NextPrev({ slug, indexSV }: NextPrevProps) {
    const [index, setIndex] = useState(0)
    // const router = useRouter();
    useEffect(() => {
        setIndex(Number(replaceString(slug)))
    }, [])
    const replaceString = (inputString: string): string => {

        const modifiedString = inputString.replace("chap_", "");

        return modifiedString;
    }
    const handelNext = () => {
        if (index < indexSV)
            setIndex(() => index + 1)
    }
    const handelPrev = () => {
        if (index !== 1 && index > 0)
            setIndex(() => index - 1)
    }
    return (<>
        {console.log(index)}
        <div>
            <div className="d-flex justify-content-center mt-4">

                {index !== 1 ?
                    <button className="btn btn-primary mr-2" onClick={handelPrev}>
                        <Link href={`http://localhost:3000/watch/chap_${encodeURIComponent(index - 1)}`}>
                            Prev Chapter
                        </Link>
                    </button>
                    : <>
                        <button className="btn btn-primary mr-2" onClick={handelPrev}>
                            Prev Chapter
                        </button>


                    </>
                }


                <button className="btn btn-primary" onClick={handelNext}>
                    {index < indexSV ?
                        <Link href={`http://localhost:3000/watch/chap_${encodeURIComponent(index + 1)}`}>
                            Next Chapter
                        </Link> :
                        <> Next Chapter</>
                    }

                </button>
            </div>
        </div>
    </>)
}