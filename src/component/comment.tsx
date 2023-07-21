
"use client"
import Image from 'next/image'
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import "./comment.scss"
import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faStar, faStarHalf, faStarHalfStroke, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { CounterContext } from '@/context/context';
import { data } from 'autoprefixer';
import axios from 'axios';
import { useRouter } from "next/navigation";

interface nameManga {
    name: string
    chap: string
}
interface commentData {
    name_manga: string;
    username: string;
    id: number;
    comment: string
}
export default function Comment({ name, chap }: nameManga) {

    const { push } = useRouter()
    const [isLogin, setIsLogin] = useState(false)
    const [userAffterLogin, setUserNameAffterLogin] = useState("")

    const [data, setData] = useState<commentData[]>([])
    const [comment, setComment] = useState("")

    useEffect(() => {
        const checkCookie = async () => {
            const res = await axios.get("/api/auth/checktoken")
            const result = res.data
            // console.log(res.data.token)
            if (result.token) {
                setIsLogin(true)
            }
            else {
                setIsLogin(false)
            }
        }
        checkCookie()
        const getComment = async () => {
            // if (isLogin) {
            try {
                const queryParams = new URLSearchParams({ name: name, chap: chap });
                const apiUrl = `/api/comment?${queryParams}`;

                const response = await axios.get<commentData[]>(apiUrl);
                const result = response.data
                // console.log(response.data)
                setData(response.data)
            } catch (error) {
                console.log(error)

            }
            // }
            // else {
            //     push("/login")
            // }

        }
        getComment()
        const getUserNameLogin = async () => {
            const res = await axios.get("/api/auth/checktoken")
            const result = res.data
            // console.log(res.data.username_token)
            if (result.token) {
                setUserNameAffterLogin(res.data.username_token)
            }
            else {
                setUserNameAffterLogin("")
            }
        }
        getUserNameLogin()

    }, [])
    const handelComment = async (e: any) => {
        if (userAffterLogin) {
            const data = { chapter: chap, name: name, comment: comment, username: userAffterLogin }
            e.preventDefault()
            if (isLogin) {

                try {

                    const response = await axios.post("/api/comment", data)

                    const result = response.data;
                    if (response.data.errCode === 1) {
                        setComment("")
                    }
                    else {
                        alert("some errol")
                    }

                } catch (error) {
                    console.log(error)
                }
            }
            else {
                push("/login")
            }
        }


    }
    const handelChangedComment = (event: any) => {
        setComment(event.target.value)
    }
    return (
        <>
            <div className='mt-3'>
                <h2>Comment</h2>
                <div>
                    <form onSubmit={(event) => handelComment(event)}>
                        <div className="form-group">


                            <textarea onChange={(event) => handelChangedComment(event)} value={comment} name="comment" className="form-control" aria-label="With textarea"></textarea>
                            <button className='send'><FontAwesomeIcon icon={faPaperPlane} /></button>

                        </div>
                    </form>

                </div>

                {data.length > 0 ? (
                    <>
                        {data.map((item, index) => (

                            <div className='d-flex row my-3' key={index}>
                                <div className='col-xl-1 col-3'>
                                    <Image src={"/logo/avatar.png"} width={60} height={60} alt='E' />
                                </div>

                                <div className='content-comment border col-xl-11 col-8'>
                                    <div className='left-arrow'>
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    </div>
                                    <div className='comment-header   border-bottom'>
                                        <span className='my-2 d-block'>{item.username}</span>
                                    </div>
                                    <div className='comment-body'>
                                        <span className='my-2 d-block'>  {item.comment}</span>

                                    </div>
                                </div>
                            </div>

                        ))}
                    </>


                ) : (
                    <p>Loading...</p>
                )}



            </div>


        </>
    )
}
