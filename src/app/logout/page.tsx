"use client"
import { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";


export default function Logout() {
    const { push } = useRouter()
    useEffect(() => {
        const logOut = async () => {
            await axios.post("https://manga-online-delta.vercel.app/api/auth/logout")
        }
        push("/")
        logOut()
    }, [])
    return <></>
}