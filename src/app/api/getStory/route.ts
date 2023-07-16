import { NextPage } from 'next';
import { useEffect } from 'react';
import { connectDB, connection } from '@/model/connectDB';
import { NextResponse,NextRequest } from 'next/server'

import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import bodyParser from 'body-parser';
import { useSearchParams } from 'next/navigation';


export async function GET(request : Request) {
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name')

    try {

        connectDB()
   
        const [rows] = await connection.query('SELECT * FROM `manga` where name = ?', [name]);
     
        return   NextResponse.json(rows);
      } catch (err) {
        return   NextResponse.json({message:"err"});
      }
   
}


