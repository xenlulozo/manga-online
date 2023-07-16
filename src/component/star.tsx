
"use client"
import Image from 'next/image'
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import "./star.scss"
import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { CounterContext } from '@/context/context';
// import { cookies } from 'next/headers'
import { data } from 'autoprefixer';
import axios from 'axios';
import { useRouter } from "next/navigation";

interface nameManga {
    name: string
}
interface MangaData {
    name: string;
    username: string;
    rate: number;
}
export default function Star({ name }: nameManga) {
    const { state, dispatch } = useContext(CounterContext);
    const [rate, setRate] = useState(0)
    const [totalVote, setTotalVote] = useState(0)
    const [userAffterLogin, setUserNameAffterLogin] = useState("")
    const { push } = useRouter()
    const [hoveredRating, setHoveredRating] = useState(false);
    const [indexHover, setIndexHover] = useState(0)

    // const cookieStore = cookies()
    // const cookie_username = cookieStore.get('username')
    useEffect(() => {

        const getUserNameLogin = async () => {
            // const url = `https://manga-online-delta.vercel.app/api/auth/checktoken`;
            // const response = await fetch(url, {
            //     method: 'GET',
            // });


            // console.log(response)
            const res = await axios.get("https://manga-online-delta.vercel.app/api/auth/checktoken")
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
        const fetchDetailStory = async () => {

            try {
                const requestData = { name: name };
                const queryParams = new URLSearchParams(requestData);
                const url = `https://manga-online-delta.vercel.app/api/vote?${queryParams.toString()}`;
                const response = await fetch(url, {
                    method: 'GET',
                });

                const result = await response.json();
                const totalVotes = result.length;
                const averageRating = calculateAverageRating(result);

                setRate(averageRating)
                setTotalVote(totalVotes)
                // console.log(averageRating)

            } catch (error) {
                console.error(error);
            }
        };

        fetchDetailStory()
    }, [])
    const calculateAverageRating = (data: MangaData[]): number => {
        const totalVotes = data.length;
        const totalRating = data.reduce((sum, item) => sum + item.rate, 0);
        const averageRating = totalRating / totalVotes;
        return Number(averageRating.toFixed(1));
    }
    const handelVote = async (name: string, rate: number) => {
        // console.log(name, rate, userAffterLogin)
        // const getUserNameLogin = async () => {
        if (userAffterLogin) {
            try {

                const data = { name: name, userAffterLogin: userAffterLogin, rate: rate }

                const response = await axios.post("https://manga-online-delta.vercel.app/api/vote", data)

                const result = response.data;

                alert(response.data.message)
                // console.log(result.message);


            } catch (error) {
                console.error(error);
            }
        }
        else {
            push("/login")
        }

        // }
        // getUserNameLogin()
    }
    const handleStarHover = (action: string, index: number) => {
        // console.log("hover")
        if (action == "hover") {
            setHoveredRating(true);
            setIndexHover(index)
        }
        if (action == "leave")
            setHoveredRating(false)
    };
    return (
        <>

            <div className='star' style={{ fontSize: "30" }}>
                {/* <FontAwesomeIcon icon={faStarHalf} /> */}
                <p>
                    Rating: {rate}/5 - {totalVote} Reviews.
                </p>
                {Array.from({ length: 5 }).map((_, index) =>
                (

                    <span className='star-rate' key={index}
                        onClick={() => handelVote(name, index + 1)}
                        onMouseEnter={() => handleStarHover("hover", index)}
                        onMouseLeave={() => handleStarHover("leave", 0)}
                    >
                        {hoveredRating && hoveredRating ? <>
                            {index <= indexHover ? <>
                                <FontAwesomeIcon className='star-vote' key={index} icon={faStar} style={{ color: "yellow", }} /> {" "}

                            </> :
                                <>
                                    <FontAwesomeIcon className='star-vote' icon={faStar} style={{ color: "#ccc7c7", }} />{" "}
                                </>
                            }
                        </> :
                            <>
                                {rate.toString().includes(".") && index + 1 === Math.round(rate) ? <>            <FontAwesomeIcon className='star-vote' icon={faStarHalfStroke} style={{ color: "yellow", }} />
                                </> : <> {index + 1 <= rate ? <FontAwesomeIcon className='star-vote' key={index} icon={faStar} style={{ color: "yellow", }} /> : <FontAwesomeIcon className='star-vote' icon={faStar} style={{ color: "#ccc7c7", }} />} </>}

                            </>
                        }

                    </span>

                ))}

                {/* <span className='quantity-star'>
                    {rate} - {totalVote} vote
                </span> */}

            </div>


        </>
    )
}
