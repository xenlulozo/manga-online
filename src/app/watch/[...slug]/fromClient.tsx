"use client"

import React, { useEffect, useState } from "react";
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'


interface NextPrevProps {
    slug: string;
    indexSV: number;
}



export default function NextPrev({ slug, indexSV }: NextPrevProps) {
    const [index, setIndex] = useState(0)
    const { push } = useRouter();

    // const router = useRouter();
    useEffect(() => {
        if (slug.length > 1)
            setIndex(Number(replaceString(slug[1])))
    }, [])
    const replaceString = (inputString: string): string => {

        const modifiedString = inputString.replace("chap_", "");

        return modifiedString;
    }
    const handelNext = () => {
        if (index < indexSV)
            setIndex(() => index + 1)

        push(`chap_${index + 1}`);

    }
    const handelPrev = () => {
        if (index !== 1 && index > 0)
            setIndex(() => index - 1)

        push(`chap_${index - 1}`);

    }
    return (<>

        <div>
            <div className="d-flex justify-content-center mt-4">

                {index !== 1 ?
                    <button className="btn btn-primary mr-2" onClick={handelPrev}>
                        {/* <Link href={`/watch/${slug[0]}/chap_${encodeURIComponent(index - 1)}`}> */}
                        <span> Prev Chapter</span>
                        {/* </Link> */}
                    </button>
                    : <>
                        <button className="btn btn-primary mr-2"    >

                            <span>Prev Chapter</span>
                        </button>

                    </>
                }


                {index < indexSV ?
                    // <Link href={`/watch/${slug[0]}/chap_${encodeURIComponent(index + 1)}`}>
                    //     Next Chapter
                    // </Link>
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