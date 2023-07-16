import { cookies } from "next/headers";
import { NextApiResponse } from 'next';
import { NextResponse } from "next/server";
import { Value } from "sass";

export async function POST (params:Request) {
    const cookieStore = cookies()
    const token = cookieStore.delete("outside")
    const name = cookieStore.delete("username")

    // const {value} = token;
    // console.log(value)
    return NextResponse.json({token : cookieStore});
}