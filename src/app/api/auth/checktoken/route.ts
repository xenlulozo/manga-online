import { cookies } from "next/headers";
import { NextApiResponse } from 'next';
import { NextResponse } from "next/server";
import { Value } from "sass";

export async function GET (params:Request) {
    const cookieStore = cookies()
    const token = cookieStore.get('outside')
    const username_token = cookieStore.get('username')

    // const {value} = token;
    // console.log(value)
    return NextResponse.json({token : token?.value, username_token : username_token?.value});
}