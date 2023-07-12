import { stringify } from "querystring";
import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server'
export async function GET(request : Request) {
    // return new Response(JSON.stringify({hello:"hi"}))
    const { searchParams } = new URL(request.url)
    const name = searchParams.get('name')
    const chap = searchParams.get('chap')
    console.log(name, chap)
    try {
        const imgDir = path.join(process.cwd(), 'public', String(name), String(chap));
        const imageNames = fs.readdirSync(imgDir);
    
        return   NextResponse.json(imageNames);
      } catch (error) {
        console.log(error);
        return  NextResponse.json([]);
      }
   
}