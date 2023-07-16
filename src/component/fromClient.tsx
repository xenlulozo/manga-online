"use client"

import React, { useEffect, useState } from "react";
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { data } from 'autoprefixer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';



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
    const router = useRouter();

    useEffect(() => {

        const fetchImageNames = async () => {

            try {
                const response = await fetch(`https://manga-online-six.vercel.app/api/getCountToRedirect?name=${name}`);
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

    const replaceString = (inputString: string): string => {

        const modifiedString = inputString.replace("chap_", "");

        return modifiedString;
    }
    const handelNext = () => {
        if (currentIndex < index)
            setCurrentIndex(() => currentIndex + 1)

        push(`chap_${currentIndex + 1}`);

    }
    const handelPrev = () => {
        if (currentIndex !== 1 && currentIndex > 0)
            setCurrentIndex(() => currentIndex - 1)

        push(`chap_${currentIndex - 1}`);

    }
    const handleChoose = (event: any) => {
        const selectedChapter = event.target.value;
        router.push(`/test/${name}/${selectedChapter}`);
    };
    return (<>

        <div>
            <div className="d-flex justify-content-center align-item-center">

                {currentIndex !== 1 && currentIndex > 0 ?
                    <button className="btn btn-primary mr-2" onClick={handelPrev}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    : <>
                        <button className="btn btn-primary mr-2" disabled  >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>

                    </>
                }

                {/* <span> Chappter {Number(replaceString(chap))}</span>
                 */}
                <div>
                    <div className="input-group mx-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text">Choose</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01" onChange={(event) => handleChoose(event)}>
                            <option selected hidden>Chapter {Number(replaceString(chap))}</option>
                            {data && data.map((item, index) => {
                                return (<>
                                    <option key={index} value={item}>Chapter {Number(replaceString(item))}</option>
                                </>)
                            })}

                        </select>
                    </div>

                </div>

                {currentIndex < index ?

                    <button className="btn btn-primary" onClick={handelNext}>

                        <FontAwesomeIcon icon={faChevronRight} />

                    </button>

                    :
                    <button className="btn btn-primary" disabled>

                        <FontAwesomeIcon icon={faChevronRight} />

                    </button>

                }

            </div>
        </div>
    </>)
}