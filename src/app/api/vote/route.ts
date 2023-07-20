import { NextPage } from 'next';
import { useEffect } from 'react';
import { connectDB, connection } from '@/model/connectDB';
import { NextResponse,NextRequest } from 'next/server'

import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import bodyParser from 'body-parser';
import { useSearchParams } from 'next/navigation';
import { RowDataPacket } from 'mysql2';

interface RequestWithBody extends NextApiRequest {
  body: {
    name: string;
    rate :number 
  };
}
export async function POST(request :Request) {
  
  try {
    
      const res = await request.json() 
    
      const { name, rate , userAffterLogin } = res;
      // console.log(name,rate,userAffterLogin)

      if (!name || !rate || !userAffterLogin) {
        return NextResponse.json({ message: "Invalid values",errCode :0 });
      }
      await connectDB();
      const check = await checkVote( userAffterLogin,name)
      if(check){
        return   NextResponse.json({message:"you already voted", errCode : 0});
      }
    
      await connection.query(
        'INSERT INTO `rate` (`name`, `username`, `rate`) VALUES (?, ?, ?)',[name,userAffterLogin, rate]
      );
      // console.log(name, rate, userAffterLogin)
      return   NextResponse.json({message:"Thanks for voting", errCode : 1});

    } catch (err) {
      return   NextResponse.json({message:"err", errCode :0 });
    }
       
  }

 
    async function checkVote(username: string,name:string): Promise<boolean> {
      try {
        // await connectDB();
    
   
        const [rows] = await connection.query<RowDataPacket[] >('SELECT * FROM rate WHERE username = ? and name = ?' , [username, name]);
        return rows.length > 0;   
    
      } catch (error :any) {
        console.error('Error occurred:', error.message);
        return false; 
      }
    }
  
  export async function GET(request : Request) {
    const { searchParams } = new URL(request.url)
    const name = searchParams.get('name')
    
      try {
  
          connectDB()
          const [rows] = await connection.query('SELECT * FROM `rate` WHERE name = ?', [name]);
          return   NextResponse.json(rows);
        } catch (err) {
          return   NextResponse.json({message:"err"});
        }
     
  }


