
"use client"
import Image from 'next/image'
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import "./detailStory.scss"
import React, { useEffect, useState } from 'react';
interface Manga {
    name: string,
    genre: string,
    author: string
}
interface nameManga {
    name: string
}
export default function DetailStory({ name }: nameManga) {
    const [data, setData] = useState<Manga>({ name: '', genre: '', author: '' });
    const [genre, setGenre] = useState([])
    const [author, setAuthor] = useState([])

    useEffect(() => {
        // console.log(name)
        const fetchDetailStory = async () => {

            try {
                const requestData = { name: name };
                const queryParams = new URLSearchParams(requestData);
                const url = `/api/getStory?${queryParams.toString()}`;
                const response = await fetch(url, {
                    method: 'GET',
                });
                const result = await response.json();
                // console.log("data", response)
                setData(result[0])

                const genreArray = result[0].genre.split(' - ');
                const authorArray = result[0].author.split(' - ');

                setGenre(genreArray)
                setAuthor(authorArray)

            } catch (error) {
                console.error(error);
            }
        };

        fetchDetailStory()
    }, [])



    return (
        <>

            <div>
                {data && data ? <>
                    <p>Name: {data.name.replaceAll("_", " ")}</p>
                    <p>Genre: {genre && genre.map((item: string, index) => {
                        return (<>
                            <Link href={`https://en.wikipedia.org/wiki/${item}`} target='_blank'><span>  {item}  </span></Link>    {index === genre.length - 1 ? <>

                            </>
                                :
                                <> - </>
                            }

                        </>)
                    })}</p>

                    <p>Author: {author && author.map((item: string, index) => {
                        return (<>
                            <Link href={`https://en.wikipedia.org/wiki/${item}`} target='_blank'><span>  {item}  </span></Link>    {index === author.length - 1 ? <>

                            </>
                                :
                                <> - </>
                            }

                        </>)
                    })}</p>
                </> : <>
                    <p>Name: ...Loading</p>
                    <p>Genre: ...Loading</p>

                    <p>Author: ...Loading</p>
                </>}

            </div>

        </>
    )
}
