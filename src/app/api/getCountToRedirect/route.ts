import { stringify } from "querystring";
import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server'
import { data } from 'autoprefixer';
export async function GET(request : Request) {
    // return new Response(JSON.stringify({hello:"hi"}))
    const { searchParams } = new URL(request.url)
    const name = searchParams.get('name')
    
    console.log(name)
    try {
        const imgDir = path.join(process.cwd(), 'public', String(name));
        const imageNames = fs.readdirSync(imgDir);
        const data:string[] = [];
    imageNames.map((item)=>{
      if(item != "avatar.jpg")
      data.push(item)
    })
        return   NextResponse.json(data);
      } catch (error) {
        console.log(error);
        return  NextResponse.json([]);
      }
   
}