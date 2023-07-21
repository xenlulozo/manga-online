import { NextPage } from 'next';
import { useEffect } from 'react';
import { connectDB, connection } from '@/model/connectDB';
import { NextResponse,NextRequest } from 'next/server'

import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import bodyParser from 'body-parser';
import { useSearchParams } from 'next/navigation';


export async function GET(request : Request) {
    try {
      const { searchParams } = new URL(request.url)
      const name = searchParams.get('name')
      const chap = searchParams.get('chap')
        connectDB()
   
        const [rows] = await connection.query('SELECT * FROM `comment` where name_manga = ? and chapter = ?', [name , chap]);
     
        return   NextResponse.json(rows);
      } catch (err) {
        return   NextResponse.json({message:"err"});
      }
   
}
export async function POST(request : Request) {

    try {

      const res = await request.json()  
      const { username, comment,name, chapter } = res;
  console.log(username, comment, name, chapter)
      if (!username || !comment || !chapter || !name) {
        return NextResponse.json({ message: "some err.",errCode :0 });
      }
        connectDB()
   
        await connection.query('INSERT INTO  comment (id, username, name_manga, comment, chapter) VALUES (NULL, ?, ?, ?, ?)',  [username,name,comment,chapter]);
     
        return   NextResponse.json({message:"comment success" ,errCode :1});
     
      } catch (err) {
        return   NextResponse.json({message:"err" ,errCode :0});
      }
   
}


