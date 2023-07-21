import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server'

export async function GET(request : Request) {
    
    const { searchParams } = new URL(request.url)
    const name = searchParams.get('name')
    
    try {
        const imgDir = path.join(process.cwd(), 'public', String(name));
        const imageNames = fs.readdirSync(imgDir);
        // console.log(imageNames)
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